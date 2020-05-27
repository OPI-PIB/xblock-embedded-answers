/* Javascript for Embedded Dropdown XBlock. */
function EmbeddedAnswersXBlockInitEdit(runtime, element) {

  var self = this;

  $.fn.refresh = function() {
      var elems = $(this.selector);
      this.splice(0, this.length);
      this.push.apply(this, elems);
      return this;
  };

  $.fn.immediateText = function() {
      return this.contents().not(this.children()).text();
  };

  this.init = function() {
      this.xmlEditorTextarea = $(".block-xml-editor", element);
      this.defaultEditorSelector = $('[class*="view-"] .modal-window .editor-with-buttons.wrapper-comp-settings .list-input.settings-list');
      this.defaultEditorHeight = this.defaultEditorSelector.outerHeight();
      this.defaultModalContentSelector = $('[class*="view-"] .modal-content');
      this.defaultModalContentHeight = this.defaultModalContentSelector.outerHeight();
      this.defaultActionsSelector = $('[class*="view-"] .modal-window .editor-with-buttons .xblock-actions');
      this.defaultCodeMirrorSelector = $('[class*="view-"] .modal-window .CodeMirror');
      this.defaultCodeMirrorHeight;
      this.modalContentHeight = 0.75;
      this.xmlContainerSelector = $(".embedded-answers-xml", element);
      this.visualContainerSelector = $(".embedded-answers-visual", element);
      this.bodySelector = $("html, body");
      this.questionBodyTemplate = questionBodyTemplate;
      this.questionAlternativeTemplate = questionAlternativeTemplate;
      this.demandHintTemplate = demandHintTemplate;
      this.questionInput = $("#question_input", element);
      this.questionInput.on('input', this.resizeTextarea)

      this.xmlButton = $('.embedded-answers-settings-toggle-xml', element);
      this.xmlButton.click(this.xmlView);

      this.visualButton = $(".embedded-answers-settings-toggle-visual", element);
      this.visualButton.click(this.visualView);


      this.mainContainer = $("#excercise-container", element);
      this.mainHintContainer = $("#demandhint-container", element);

      this.mainContainer.on('input','.embedded-answers-question-alternatives-bottom input' , this.editMainFeedbackMessage);
      this.mainContainer.on('input','.embedded-answers-question-alternatives-bottom-secondary .input_question_word' , this.editAlternativeWord);
      this.mainContainer.on('input','.embedded-answers-question-alternatives-bottom-secondary .input_hint' , this.editAlternativeFeedbackMessage);

      this.mainContainer.on("click", ".embedded-answers-button-delete", this.deleteAlternative);
      this.mainContainer.on('click', '.embedded-answers-button-add-alternative', this.addAlternative);

      this.actionCancelButton = $('.action-cancel', element);
      this.actionSaveButton = $('.action-save', element);

      this.actionCancelButton.bind('click', this.onCancel);
      this.actionSaveButton.bind('click', this.onSubmit);

      this.mainHintContainer.on('click', '.embedded-answers-button-delete', this.deleteHint);
      $('.embedded-answers-alternatives', element).on('click', '.embedded-answers-button-add-alternative', this.addHint);
      $('.embedded-answers-alternatives', element).on('input', '.embedded-answers-alternatives-bottom input', this.editHint);

      this.defaultModalContentSelector.outerHeight($(window).height() * this.modalContentHeight);

      this.defaultEditorSelector.outerHeight(this.defaultModalContentSelector.height() - this.defaultActionsSelector.outerHeight(true) - 2);

      this.bodySelector.scrollTop($(document).height());

      this.xmlEditor = CodeMirror.fromTextArea(this.xmlEditorTextarea[0], {
          mode: "xml",
          lineWrapping: true,
      });
      this.defaultCodeMirrorSelector.refresh()
      this.defaultCodeMirrorHeight = this.defaultCodeMirrorSelector.outerHeight();
      this.defaultCodeMirrorSelector.css({
          'height': 'auto'
      });
      this.xmlContainerSelector.addClass("is-hidden");


  }

  this.resetView = function() {
      $('#excercise-container', element).empty();
      $('#demandhint-container', element).empty();
  }

  this.renderView = function() {


      this.$xml = $($.parseXML(this.xmlEditor.getValue()));

      var body_to_change = this.$xml.find('body').children().clone();

      var feedbackMessage = {};
      var answerName = {};
      this.$xml.find('optionresponse optioninput').each(function(index, el) {
          answerName[$(el).attr('id')] = []
          feedbackMessage[$(el).attr('id')] = []
          $(el).find('option').each(function(index, optionEl) {
              answerName[$(el).attr('id')].push($(optionEl).immediateText())
              feedbackMessage[$(el).attr('id')].push($(optionEl).children().text())
          })
      });

      body_to_change.find('input_ref').each(function(index, el) {
          var inputIndex = $(el).attr('input');
          var bodyContainer = $.parseHTML($.trim(self.questionBodyTemplate));
          $(bodyContainer).attr('option_id', inputIndex);
          $(answerName[inputIndex]).each(function(index_el, el_el) {
              if (index_el == 0) {
                  $(el).replaceWith(`[${answerName[inputIndex][index_el]}]`);
                  $(bodyContainer).find('.embedded-answers-question-alternatives-header strong').text(answerName[inputIndex][index_el])
                  $(bodyContainer).find('.embedded-answers-question-alternatives-bottom input').val(feedbackMessage[inputIndex][index_el])
              } else {
                  var alternativeContainer = $.parseHTML($.trim(self.questionAlternativeTemplate));
                  $(alternativeContainer).attr('optioninput',`${inputIndex}`);
                  $(alternativeContainer).find('.input_question_word').val(answerName[inputIndex][index_el]);
                  $(alternativeContainer).find('.input_hint').val(feedbackMessage[inputIndex][index_el]);
                  $(bodyContainer).find('#alternatives-container').append(alternativeContainer);
              }
          });
          $('#excercise-container', element).append(bodyContainer);
      });

      $('#question_input', element).text(body_to_change.text())

      var demandhint_to_change = this.$xml.find('demandhint hint').each(function(index, el) {
          var html = $.parseHTML(self.demandHintTemplate);
          $(html).find('input').val($(el).text())
          $('#demandhint-container', element).append(html);
      });

  };

  this.refreshView = function() {
      this.resetView();
      this.renderView();
  };

  this.resizeTextarea = function(event) {
      $(this).outerHeight(38).outerHeight(this.scrollHeight); // 38 or '1em' -min-height

      self.textareaToXML(($(this).val()));

  };



  this.prettifyXml = function(sourceXml)
  {
      var xmlDoc = new DOMParser().parseFromString(sourceXml, 'application/xml');
      var xsltDoc = new DOMParser().parseFromString([
          // describes how we want to modify the XML - indent everything
          '<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform">',
          '  <xsl:strip-space elements="*"/>',
          '  <xsl:template match="para[content-style][not(text())]">', // change to just text() to strip space in text nodes
          '    <xsl:value-of select="normalize-space(.)"/>',
          '  </xsl:template>',
          '  <xsl:template match="node()|@*">',
          '    <xsl:copy><xsl:apply-templates select="node()|@*"/></xsl:copy>',
          '  </xsl:template>',
          '  <xsl:output indent="yes"/>',
          '</xsl:stylesheet>',
      ].join('\n'), 'application/xml');

      var xsltProcessor = new XSLTProcessor();
      xsltProcessor.importStylesheet(xsltDoc);
      var resultDoc = xsltProcessor.transformToDocument(xmlDoc);
      var resultXml = new XMLSerializer().serializeToString(resultDoc);
      return resultXml;
  };

  this.textareaToXML = function (rawText) {

    // Regex function for finding elements with [] and variable without []
    const regexWithoutBrackets = /(?<=\[).+?(?=\])/g;
    const regexWithBrackets = /\[(.*?)\]/g
    let found = rawText.match(regexWithoutBrackets)
    // Remove optionresponse from xml, when you removed from visual editor
    if (found === null) {
      self.$xml.find('optionresponse').remove();
    }
    else {
    if (self.$xml.find('optionresponse').size() > found.length) {
    var iter;
      for (iter=0; iter < self.$xml.find('optionresponse').size() - found.length; iter++) {
        self.$xml.find('optionresponse').last().remove();
      };
    };
    };
    // Replace [variable] tags to <input_ref>

    let i = 0;
    rawText = rawText.replace(regexWithBrackets, function(){
      i++;
      return `<input_ref input="i${i}"/>`
    });
    // Replace / add <optionresponse> elements in xml editor
    self.$xml.find('body p').html(rawText);
    self.$xml.find('input_ref').each(function(index,element){
        let elementIndex = $(element).attr('input')

        if (self.$xml.find(`optioninput#${elementIndex}`).length)
        {
          self.$xml.find(`optioninput#${elementIndex}`).find('option').first().html(function(id, currentContent){
            const regex = /\<optionhint\>(.*?)\<\/optionhint\>/g;
            let wordToChange = currentContent.replace(regex,'')
            return currentContent.replace(wordToChange, found[index])
          })
        }
        else {
          let tempStringTwo = embedded_answersi18n.gettext('A text which will appear after giving a correct answer');
          let xmlTemporaryTemplate = embedded_answersi18n.gettext(`<optionresponse><optioninput id="${elementIndex}"><option correct="True">${found[index]}<optionhint>${tempStringTwo}</optionhint></option></optioninput></optionresponse>`);
          if (self.$xml.find('optionresponse').length){
          self.$xml.find('optionresponse').last().after(xmlTemporaryTemplate);
          }
          else {
            self.$xml.find('body').last().after(xmlTemporaryTemplate);
          };
          }
    });
    // Update xml editor
    self.updateXmlEditor(self.$xml.get(0));
  };

  this.restoreDefaultEditorHeight = function() {
    this.defaultEditorSelector.outerHeight(this.defaultEditorHeight);
    this.defaultModalContentSelector.outerHeight(this.defaultModalContentHeight);
    this.defaultCodeMirrorSelector.css({
        'height': this.defaultCodeMirrorHeight
    });
};

  this.xmlView = function() {
      self.xmlContainerSelector.removeClass("is-hidden");
      self.visualContainerSelector.addClass("is-hidden");
      self.defaultCodeMirrorSelector.css({
          'height': 'auto'
      });
      self.xmlEditor.refresh();
  };

  this.visualView = function() {
      self.visualContainerSelector.removeClass("is-hidden");
      self.xmlContainerSelector.addClass("is-hidden");
      self.defaultCodeMirrorSelector.css({
          'height': self.defaultCodeMirrorHeight
      });
      self.refreshView();
  };

  this.getXmlString = function (xmlData) {
    var xmlString;
    //IE
    if (window.ActiveXObject){
        xmlString = xmlData.xml;
    }
    // code for Mozilla, Firefox, Opera, etc.
    else {
        xmlString = (new XMLSerializer()).serializeToString(xmlData);
    }
    return xmlString.trim().replace(/(^[ \t]*\n)/gm, "");

  };

  this.updateXmlEditor = function (data , refresh=true) {
    this.xmlEditor.setValue(this.prettifyXml(this.getXmlString(data)));
    if (refresh){
      this.refreshView();
    };
  };

  this.deleteAlternative = function(event) {
    let elementIndex = $(this).parent().index();
    let optionInput = $(this).parent().attr('optioninput');
    self.$xml.find(`#${optionInput}`).children().eq(parseInt(elementIndex)+1).remove();
    self.updateXmlEditor(self.$xml.get(0));
    };

  this.addAlternative = function(event) {
    let elementId = $(this).parent().parent().parent().attr('option_id');
    let tempStringOne = embedded_answersi18n.gettext('Alternative reponse');
    let tempStringTwo = embedded_answersi18n.gettext('A text which will appear after giving a correct alternative answer');
    let xmlTemporaryTemplate =embedded_answersi18n.gettext(`<option correct="True">${tempStringOne}<optionhint>${tempStringTwo}</optionhint></option>`);
    self.$xml.find(`#${elementId}`).append(xmlTemporaryTemplate);
    self.updateXmlEditor(self.$xml.get(0));
  };

  this.editAlternativeWord = function(event) {
    let elementId = $(this).parent().parent().parent().parent().attr('option_id');
    let parentElementIndex= $(this).parent().index()+1;
    let inputValue =  $(this).val();
    self.$xml.find(`optioninput#${elementId}`).find('option').eq(parentElementIndex).html(function(id, currentContent){
      const regex = /\<optionhint\>(.*?)\<\/optionhint\>/g;
      let wordToChange = currentContent.replace(regex,'')
      return currentContent.replace(wordToChange, inputValue);
    });
    self.updateXmlEditor(self.$xml.get(0), false);
  };

  this.editAlternativeFeedbackMessage= function(event) {
    let elementId = $(this).parent().parent().parent().parent().attr('option_id');
    let parentElementIndex = $(this).parent().index()+1;
    console.log(self.$xml.find(`#${elementId}`).find('optionhint').eq(parentElementIndex).text())
    self.$xml.find(`#${elementId}`).find('optionhint').eq(parentElementIndex).text($(this).val());
    self.updateXmlEditor(self.$xml.get(0), false);
  };

  this.editMainFeedbackMessage = function(event) {
    let elementId = $(this).parent().parent().parent().attr('option_id');
    self.$xml.find(`#${elementId}`).find('optionhint').first().text($(this).val());
    self.updateXmlEditor(self.$xml.get(0), false);
  };

  this.deleteHint = function(event) {
    let elementIndex = $(this).parent().index();
    self.$xml.find('demandhint').children().eq(parseInt(elementIndex)).remove();
    self.updateXmlEditor(self.$xml.get(0));
  };

  this.addHint = function(event) {
     self.$xml.find('demandhint').append('<hint> </hint>')
     self.updateXmlEditor(self.$xml.get(0));
  };

  this.editHint = function(event) {
      let elementIndex = $(this).parent().index();
      self.$xml.find('demandhint').children().eq(parseInt(elementIndex)).text($(this).val());
      self.updateXmlEditor(self.$xml.get(0), false);
  };

  this.onCancel = function() {
      self.restoreDefaultEditorHeight();
      runtime.notify("cancel", {});
  };

  this.onSubmit = function() {
      var data = {
          display_name: $("#embedded_answers_edit_display_name").val(),
          weight: $("#embedded_answers_edit_weight").val(),
          data: self.xmlEditor.getValue(),
      };

      runtime.notify("save", {
          state: "start"
      });

      var handlerUrl = runtime.handlerUrl(element, "studio_submit");
      $.post(handlerUrl, JSON.stringify(data)).done(function(response) {
          if (response.result === "success") {
              self.restoreDefaultEditorHeight();
              runtime.notify("save", {
                  state: "end"
              });
          } else {
              runtime.notify("error", {
                  msg: response.message
              });
          }
      });
  };

  this.init();
  this.renderView();
}
