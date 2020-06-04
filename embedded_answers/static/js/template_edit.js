
const embeddedAnswersProblemTip = embedded_answersi18n.gettext('Beneath you have a list of words extracted from the square brackets []. You can add feedback message which will appear after giving the correct answer. You may also add alternative responses which will also be accepted (e.g. café cafe)');
const embeddedAnswersFeedbackMessage = embedded_answersi18n.gettext('Feedback');
const embeddedAnswersAddAlternativeResponseButtonName = embedded_answersi18n.gettext('Add alternative response');
const embeddedAnswersAlternativeResponsesLabel = embedded_answersi18n.gettext('Alternative responses');
const embeddedAnswersTaggedWordLabel = embedded_answersi18n.gettext('Tagged word: ');
var embeddedAnswersQuestionBodyTemplate = `
<div>
    <br>
    <span class="tip setting-help">${embeddedAnswersProblemTip}</span>
    <div class="embedded-answers-question-alternatives">
        <div class="embedded-answers-question-alternatives-header">
            <label>${embeddedAnswersTaggedWordLabel} <strong></strong></label>
        </div>
        <div class="embedded-answers-question-alternatives-bottom">
            <label class="label setting-label">${embeddedAnswersFeedbackMessage}</label>
            <input class="setting-input" type="text" value="">
        </div>
        <div class="embedded-answers-question-alternatives-header-secondary">
            <label>${embeddedAnswersAlternativeResponsesLabel}</label>
        </div>
        <div id="alternatives-container">
        </div>
        <div class="embedded-answers-question-alternatives-button-container">
            <button class="button embedded-answers-button-add-alternative">${embeddedAnswersAddAlternativeResponseButtonName}</button>
        </div>
    </div>
</div>`;

const embeddedAnswersDeleteButtonLabel = embedded_answersi18n.gettext('Delete');
var embeddedAnswersQuestionAlternativeTemplate = `
<div class="embedded-answers-question-alternatives-bottom-secondary">
    <input class="label setting-label input_question_word" type="text" value="">
    <input class="setting-input input_hint" type="text" value="">
    <button type="button" class="embedded-answers-button-delete">${embeddedAnswersDeleteButtonLabel} <i class="fa fa-times" aria-hidden="true"></i></button>
</div>`;

var embeddedAnswersDemandHintTemplate = `<div class="embedded-answers-demandhints-bottom">
<input class="setting-input" type="text" value="">
<button type="button" class="embedded-answers-button-delete">${embeddedAnswersDeleteButtonLabel} <i class="fa fa-times" aria-hidden="true"></i></button></div>`;
