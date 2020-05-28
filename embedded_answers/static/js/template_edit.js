
const problemTip = embedded_answersi18n.gettext('Beneath you have a list of words extracted from the square brackets []. You can add feedback message which will appear after giving the correct answer. You may also add alternative responses which will also be accepted (e.g. café cafe)');
const feedbackMessage = embedded_answersi18n.gettext('Feedback');
const addAlternativeResponseButtonName = embedded_answersi18n.gettext('Add alternative response');
const alternativeResponsesLabel = embedded_answersi18n.gettext('Alternative responses');
const taggedWordLabel = embedded_answersi18n.gettext('Tagged word: ');
var questionBodyTemplate = `
<div>
    <br>
    <span class="tip setting-help">${problemTip}</span>
    <div class="embedded-answers-question-alternatives">
        <div class="embedded-answers-question-alternatives-header">
            <label>${taggedWordLabel} <strong></strong></label>
        </div>
        <div class="embedded-answers-question-alternatives-bottom">
            <label class="label setting-label">${feedbackMessage}</label>
            <input class="setting-input" type="text" value="">
        </div>
        <div class="embedded-answers-question-alternatives-header-secondary">
            <label>${alternativeResponsesLabel}</label>
        </div>
        <div id="alternatives-container">
        </div>
        <div class="embedded-answers-question-alternatives-button-container">
            <button class="button embedded-answers-button-add-alternative">${addAlternativeResponseButtonName}</button>
        </div>
    </div>
</div>`;

const deleteButtonLabel = embedded_answersi18n.gettext('Delete');
var questionAlternativeTemplate = `
<div class="embedded-answers-question-alternatives-bottom-secondary">
    <input class="label setting-label input_question_word" type="text" value="">
    <input class="setting-input input_hint" type="text" value="">
    <button type="button" class="embedded-answers-button-delete">${deleteButtonLabel} <i class="fa fa-times" aria-hidden="true"></i></button>
</div>`;

var demandHintTemplate = `<div class="embedded-answers-demandhints-bottom">
<input class="setting-input" type="text" value="">
<button type="button" class="embedded-answers-button-delete">${deleteButtonLabel} <i class="fa fa-times" aria-hidden="true"></i></button></div>`;
