""" Embedded Responses XBlock main Python class """

import pkg_resources
from django.template import Context, Template
from django.utils.translation import ungettext
from django.utils import translation
from django.utils.translation import ugettext_lazy

from xblock.core import XBlock
from xblock.fields import Scope, String, List, Float, Integer, Dict, Boolean
from xblock.fragment import Fragment
from xblockutils.resources import ResourceLoader

from lxml import etree
from xml.etree import ElementTree as ET
from xml.etree.ElementTree import Element, SubElement

from StringIO import StringIO

import textwrap
import operator

_ = lambda text: text
loader = ResourceLoader(__name__)

@XBlock.needs('i18n')
class EmbeddedAnswersXBlock(XBlock):
    '''
    Icon of the XBlock. Values : [other (default), video, problem]
    '''
    icon_class = 'problem'

    '''
    Fields
    '''
    display_name = String(
        display_name=_('Display Name'),
        default=_('Embedded Answers'),
        scope=Scope.settings,
        help=_('This name appears in the horizontal navigation at the top of the page')
    )

    hints = List(
        default=[],
        scope=Scope.content,
        help=_('Hints for the question'),
    )

    question_string = String(
        help=_('Default question content '),
        scope=Scope.content,
        default=_('''
            <embedded_answers schema_version='1'>
                <body>
                    <p>Enter the problem here. In square brackets put <input_ref input="i1"/>, which you want to <input_ref input="i2"/> to the problem.</p>
                </body>
                <optionresponse>
                    <optioninput id="i1">
                        <option correct="True">a word or and expression<optionhint>A text which will appear after giving a correct answer.</optionhint></option>
                        <option correct="True">Alternative response<optionhint>A text which will appear after giving a correct alternative answer.</optionhint></option>
                    </optioninput>
                </optionresponse>
                <optionresponse>
                    <optioninput id="i2">
                        <option correct="True">add<optionhint>A text which will appear after giving a correct answer.</optionhint></option>
                        <option correct="True">Alternative response<optionhint>A text which will appear after giving a correct alternative answer.</optionhint></option>
                    </optioninput>
                </optionresponse>
                <demandhint>
                    <hint>Hint 1</hint>
                    <hint>Hint 2</hint>
                </demandhint>
            </embedded_answers>
        '''),
        # default=textwrap.dedent(str(default_question))
    )

    score = Float(
        default=0.0,
        scope=Scope.user_state,
    )

    correctness = Dict(
        help=_('Correctness of input values'),
        scope=Scope.user_state,
        default={},
    )

    input_text_order = Dict(
        help=_('Order of input_texts in body'),
        scope=Scope.user_state,
        default={},
    )

    input_texts = Dict(
        help=_('Saved student input values'),
        scope=Scope.user_state,
        default={},
    )

    student_correctness = Dict(
        help=_('Saved student correctness values'),
        scope=Scope.user_state,
        default={},
    )

    feedback = Dict(
        help=_('Feedback for input values'),
        scope=Scope.user_state,
        default={},
    )

    current_feedback = String(
        help=_('Current feedback state'),
        scope=Scope.user_state,
        default='',
    )

    completed = Boolean(
        help=_('Indicates whether the learner has completed the problem at least once'),
        scope=Scope.user_state,
        default=False,
    )

    weight = Integer(
        display_name=_('Weight'),
        help=_(
            'This assigns an integer value representing '
            'the weight of this problem'
        ),
        default=2,
        scope=Scope.settings,
    )

    has_score = True
    skip_flag = False

    '''
    Main functions
    '''

    '''
    Main functions
    '''
    def student_view(self, context=None):
        '''
        The primary view of the XBlock, shown to students
        when viewing courses.
        '''
        self.init_emulation()
        frag = Fragment()
        attributes = ''
        ctx = {
            'display_name': self.display_name,
            'problem_progress': self._get_problem_progress(),
            'prompt': self._get_body(self.question_string),
            'attributes': attributes
        }

        frag.add_content(loader.render_django_template(
            'static/html/embedded_answers_view.html',
            context = ctx,
            i18n_service=self.runtime.service(self, "i18n"),
        ))

        frag.add_css(loader.load_unicode('static/css/embedded_answers.css'))
        frag.add_javascript(loader.load_unicode('static/js/embedded_answers_view.js'))
        frag.add_javascript(self.get_translation_content())
        frag.initialize_js('EmbeddedAnswersXBlockInitView')
        return frag

    def studio_view(self, context=None):
        '''
        The secondary view of the XBlock, shown to teachers
        when editing the XBlock.
        '''
        self.init_emulation()
        frag = Fragment()
        ctx = {
            'display_name': self.display_name,
            'weight': self.weight,
            'xml_data': self.question_string,
        }
        frag.add_content(loader.render_django_template(
            'static/html/embedded_answers_edit.html',
            context = ctx,
            i18n_service=self.runtime.service(self, "i18n"),
        ))
        frag.add_css(loader.load_unicode('static/css/embedded_answers_edit.css'))
        frag.add_javascript(loader.load_unicode('static/js/template_edit.js'))
        frag.add_javascript(loader.load_unicode('static/js/embedded_answers_edit.js'))
        frag.initialize_js('EmbeddedAnswersXBlockInitEdit')
        return frag

    def max_score(self):
        """
        Returns the configured number of possible points for this component.
        Arguments:
            None
        Returns:
            float: The number of possible points for this component
        """
        return self.weight if self.has_score else None

    @XBlock.json_handler
    def student_submit(self, submissions, suffix=''):
        '''
        Save student answer
        '''

        self.input_texts = submissions['responses']
        self.input_text_order = submissions['responses_order']

        self.current_feedback = ''

        correct_count = 0
        _ = self.runtime.service(self, "i18n").ugettext
        # use sorted input_text_order to iterate through input_texts dict
        for key,pos in sorted(self.input_text_order.iteritems(), key=lambda (k,v): (v,k)):
            selected_text = self.input_texts[key]

            if self.correctness.get(key,dict()).get(selected_text,'False').lower() in ('true',):
                default_feedback = '<p class="correct"><strong>(' + str(pos) + ') ' + _('Correct') + '</strong></p>'
                if selected_text in self.feedback[key]:
                    if self.feedback[key][selected_text] is not None:
                        self.current_feedback += '<p class="correct"><strong>(' + str(pos) + ') ' + _('Correct') + ': </strong>' + self.feedback[key][selected_text] + '</p>'
                    else:
                        self.current_feedback += default_feedback
                else:
                    self.current_feedback += default_feedback
                self.student_correctness[key] = 'True'
                correct_count += 1
            else:
                default_feedback = '<p class="incorrect"><strong>(' + str(pos) + ') ' + _('Incorrect') + '</strong></p>'
                if selected_text in self.feedback[key]:
                    if self.feedback[key][selected_text] is not None:
                        self.current_feedback += '<p class="incorrect"><strong>(' + str(pos) + ') ' + _('Incorrect') + ': </strong>' + self.feedback[key][selected_text] + '</p>'
                    else:
                        self.current_feedback += default_feedback
                else:
                    self.current_feedback += default_feedback
                self.student_correctness[key] = 'False'

        self.score = float(self.weight) * correct_count / len(self.correctness)
        self._publish_grade()

        self.runtime.publish(self, 'dropdown_selected', {
            'input_texts': self.input_texts,
            'correctness': self.student_correctness,
        })
        self._publish_problem_check()

        self.completed = True

        result = {
            'success': True,
            'problem_progress': self._get_problem_progress(),
            'submissions': self.input_texts,
            'feedback': self.current_feedback,
            'correctness': self.student_correctness,
            'input_text_order': self.input_text_order,
        }
        return result

    @XBlock.json_handler
    def student_reset(self, submissions, suffix=''):
        '''
        Reset student answer
        '''

        self.score = 0.0
        self.current_feedback = ''
        self.input_texts = {}
        self.student_correctness = {}

        self._publish_grade()

        self.completed = False

        result = {
            'success': True,
            'problem_progress': self._get_problem_progress(),
        }
        return result

    @XBlock.json_handler
    def studio_submit(self, submissions, suffix=''):
        '''
        Save studio edits
        '''
        self.display_name = submissions['display_name']
        try:
            weight = int(submissions['weight'])
        except ValueError:
            weight = 0
        if weight > 0:
            self.weight = weight
        xml_content = submissions['data']

        try:
            etree.parse(StringIO(xml_content))
            self.question_string = xml_content
        except etree.XMLSyntaxError as e:
            return {
                'result': 'error',
                'message': e.message
            }

        return {
            'result': 'success',
        }

    @XBlock.json_handler
    def send_xblock_id(self, submissions, suffix=''):
        return {
            'result': 'success',
            'xblock_id': unicode(self.scope_ids.usage_id),
        }

    @XBlock.json_handler
    def restore_state(self, submissions, suffix=''):
        return {
            'result': 'success',
            'input_texts': self.input_texts,
            'correctness': self.student_correctness,
            'input_text_order': self.input_text_order,
            'current_feedback': self.current_feedback,
            'completed': self.completed,
        }

    @XBlock.json_handler
    def send_hints(self, submissions, suffix=''):
        _ = self.runtime.service(self, "i18n").ugettext
        tree = etree.parse(StringIO(_(self.question_string)))
        raw_hints = tree.xpath('/embedded_answers/demandhint/hint')

        decorated_hints = list()

        if len(raw_hints) == 1:
            hint = _('Hint') + ': ' + etree.tostring(raw_hints[0], encoding='unicode')
            decorated_hints.append(hint)
        else:
            for i in range(len(raw_hints)):
                hint = _('Hint') + ' ({number} / {total}): {hint}'.format(
                    number=i + 1,
                    total=len(raw_hints),
                    hint=etree.tostring(raw_hints[i], encoding='unicode'))
                decorated_hints.append(hint)

        hints = decorated_hints

        return {
            'result': 'success',
            'hints': hints,
        }

    @XBlock.json_handler
    def publish_event(self, data, suffix=''):
        try:
            event_type = data.pop('event_type')
        except KeyError:
            return {'result': 'error', 'message': 'Missing event_type in JSON data'}

        data['user_id'] = self.scope_ids.user_id
        data['component_id'] = self._get_unique_id()
        self.runtime.publish(self, event_type, data)

        return {'result': 'success'}

    '''
    Util functions
    '''
    def load_resource(self, resource_path):
        '''
        Gets the content of a resource
        '''
        resource_content = pkg_resources.resource_string(__name__, resource_path)
        return unicode(resource_content)

    def render_template(self, template_path, context={}):
        '''
        Evaluate a template by resource path, applying the provided context
        '''
        template_str = self.load_resource(template_path)
        return Template(template_str).render(Context(context))

    def resource_string(self, path):
        '''Handy helper for getting resources from our kit.'''
        data = pkg_resources.resource_string(__name__, path)
        return data.decode('utf8')

    def _get_body(self, xmlstring):
        '''
        Helper method
        '''

        tree = etree.parse(StringIO(xmlstring))

        for input_ref in tree.iter('input_ref'):
            input_ref.set('type','text')
            for optioninput in tree.iter('optioninput'):
                # select = Element('select')
                valuecorrectness = dict()
                valuefeedback = dict()
                if optioninput.attrib['id'] == input_ref.attrib['input']:
                    for option in optioninput.iter('option'):
                        valuecorrectness[option.text] = option.attrib['correct']
                        input_ref.set('size',str(len(option.text)));
                        for optionhint in option.iter('optionhint'):
                            valuefeedback[option.text] = optionhint.text
                    input_ref.tag = 'input'
                    input_ref.attrib['xblock_id'] = unicode(self.scope_ids.usage_id)
                    self.correctness[optioninput.attrib['id']] = valuecorrectness
                    self.feedback[optioninput.attrib['id']] = valuefeedback


        body = tree.xpath('/embedded_answers/body')

        bodystring = etree.tostring(body[0], encoding='unicode')

        return bodystring

    def _get_unique_id(self):
        try:
        	unique_id = self.location.name
        except AttributeError:
            # workaround for xblock workbench
            unique_id = 'workbench-workaround-id'
        return unique_id

    def _get_problem_progress(self):
        """
        Returns a statement of progress for the XBlock, which depends
        on the user's current score
        """
        ungettext = self.runtime.service(self, "i18n").ungettext
        result = ''
        if self.score == 0.0:
            result = ungettext(
                '{weight} point possible',
                '{weight} points possible',
                self.weight,
            ).format(
                weight=self.weight
            )
        else:
            score_string = '{0:.1f}'.format(self.score)
            result = score_string + ungettext(
                "/{weight} point",
                "/{weight} points",
                self.weight,
            ).format(
                weight=self.weight
            )
        return result

    def _publish_grade(self):
        self.runtime.publish(
            self,
            'grade',
            {
                'value': self.score,
                'max_value': self.weight,
            }
        )

    def _publish_problem_check(self):
        self.runtime.publish(
            self,
            'problem_check',
            {
                'grade': self.score,
                'max_grade': self.weight,
            }
        )

    def get_translation_content(self):
        try:
            return self.resource_string('static/js/translations/{lang}/text.js'.format(
                lang=translation.get_language(),
            ))
        except IOError:
            return self.resource_string('static/js/translations/en/text.js')

    def init_emulation(self):
        """
        Emulation of init function, for translation purpose.
        """
        if not self.skip_flag:
            _ = self.runtime.service(self, "i18n").ugettext
            #     self.display_name = _(self.display_name)
            self.fields['display_name']._default = _(self.fields['display_name']._default)
            self.fields['question_string']._default = _(self.fields['question_string']._default)
            self.skip_flag = True

    @staticmethod
    def workbench_scenarios():
        """A canned scenario for display in the workbench."""
        return [
            ("EmbeddedAnswersXBlock",
             """<embedded_answers/>
             """),
            ("Multiple EmbeddedAnswersXBlock",
             """<vertical_demo>
                <embedded_answers/>
                <embedded_answers/>
                <embedded_answers/>
                </vertical_demo>
             """),
        ]

    @staticmethod
    def _get_statici18n_js_url():
        """
        Returns the Javascript translation file for the currently selected language, if any.
        Defaults to English if available.
        """
        locale_code = translation.get_language()
        if locale_code is None:
            return None
        text_js = 'public/js/translations/{locale_code}/text.js'
        lang_code = locale_code.split('-')[0]
        for code in (locale_code, lang_code, 'en'):
            loader = ResourceLoader(__name__)
            if pkg_resources.resource_exists(
                    loader.module_name, text_js.format(locale_code=code)):
                return text_js.format(locale_code=code)
        return None

    @staticmethod
    def get_dummy():
        """
        Dummy method to generate initial i18n
        """
        return translation.gettext_noop('Dummy')
