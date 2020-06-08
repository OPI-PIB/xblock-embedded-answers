
            (function(global){
                var embedded_answersi18n = {
                  init: function() {
                    

(function (globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function (n) {
    var v=(n==1 ? 0 : (n%10>=2 && n%10<=4) && (n%100<12 || n%100>14) ? 1 : n!=1 && (n%10>=0 && n%10<=1) || (n%10>=5 && n%10<=9) || (n%100>=12 && n%100<=14) ? 2 : 3);
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  
  /* gettext library */

  django.catalog = {
    "\n            <embedded_answers schema_version='1'>\n                <body>\n                    <p>The highest mountain on Earth is <input_ref input=\"i1\"/>, and the highest mountain in Poland is <input_ref input=\"i2\"/>.</p>\n                </body>\n                <optionresponse>\n                    <optioninput id=\"i1\">\n                        <option correct=\"True\">Mount Everest<optionhint>you are right!</optionhint></option>\n                        <option correct=\"True\">mount everest<optionhint>you are right!</optionhint></option>\n                    </optioninput>\n                </optionresponse>\n                <optionresponse>\n                    <optioninput id=\"i2\">\n                        <option correct=\"True\">Rysy<optionhint>you are right!</optionhint></option>\n                        <option correct=\"True\">rysy<optionhint>you are right!</optionhint></option>\n                    </optioninput>\n                </optionresponse>\n                <demandhint>\n                    <hint>The highest peak on Earth is also called Chomolungma. Its current official elevation is 8,848 m above sea level.</hint>\n                    <hint>The highest Polish peak is located in the Tatra Mountains on the Polish-Slovak border. Its summit is at 2,499 m above sea level.</hint>\n                </demandhint>\n            </embedded_answers>\n        ": "\n            <embedded_answers schema_version='1'>\n                <body>\n                    <p>Najwy\u017cszym szczytem g\u00f3rskim na \u015bwiecie jest <input_ref input=\"i1\"/>, a najwy\u017cszym szczytem w Polsce s\u0105 <input_ref input=\"i2\"/>.</p>\n                </body>\n                <optionresponse>\n                    <optioninput id=\"i1\">\n                        <option correct=\"True\">Mount Everest<optionhint>masz racj\u0119!</optionhint></option>\n                        <option correct=\"True\">mount everest<optionhint>masz racj\u0119!</optionhint></option>\n                    </optioninput>\n                </optionresponse>\n                <optionresponse>\n                    <optioninput id=\"i2\">\n                        <option correct=\"True\">Rysy<optionhint>masz racj\u0119!</optionhint></option>\n                        <option correct=\"True\">rysy<optionhint>masz racj\u0119!</optionhint></option>\n                    </optioninput>\n                </optionresponse>\n                <demandhint>\n                    <hint>Najwy\u017cszy szczyt Ziemi jest zwany te\u017c Czomolungm\u0105. Wznosi si\u0119 na wysoko\u015b\u0107 8848 m n.p.m.</hint>\n                    <hint>Najwy\u017cszy szczyt Polski znajduje si\u0119 w Tatrach na granicy polsko-s\u0142owackiej. Jego wysoko\u015b\u0107 to 2499 m n.p.m.</hint>\n                </demandhint>\n            </embedded_answers>\n        ", 
    "(Loading...)": "(Wczytywanie...)", 
    "/{weight} point": [
      "/{weight} punkt", 
      "/{weight} punkty", 
      "/{weight} punkty", 
      "/{weight} punkty"
    ], 
    "A text which will appear after giving a correct alternative answer": "Tekst, kt\u00f3ry wy\u015bwietli si\u0119 po udzieleniu poprawnej odpowiedzi", 
    "A text which will appear after giving a correct answer": "Tekst, kt\u00f3ry wy\u015bwietli si\u0119 po udzieleniu poprawnej odpowiedzi", 
    "Add a hint": "Dodaj podpowied\u017a", 
    "Add alternative response": "Dodaj odpowied\u017a alternatywn\u0105", 
    "Alternative reponse": "Alternatywna odpowied\u017a", 
    "Alternative responses": "Odpowiedzi alternatywne", 
    "Beneath there is a list of hints. You can modify, add and delete them.": "Pod spodem znajduje si\u0119 lista podpowiedzi. Mo\u017cesz je dodawa\u0107, modyfikowa\u0107 i usuwa\u0107.", 
    "Beneath you have a list of words extracted from the square brackets []. You can add feedback message which will appear after giving the correct answer. You may also add alternative responses which will also be accepted (e.g. caf\u00e9 cafe)": "Pod spodem znajduje si\u0119 lista s\u0142\u00f3w wyodr\u0119bnionych w \u0107wiczeniu nawiasami kwadratowymi []. Mo\u017cesz tu doda\u0107 informacj\u0119 zwrotn\u0105, kt\u00f3ra pojawi si\u0119 po udzieleniu poprawnej odpowiedzi. Mo\u017cesz r\u00f3wnie\u017c doda\u0107 odpowiedzi alternatywne, kt\u00f3re te\u017c b\u0119d\u0105 akceptowane (np. ksiazka, ksi\u0105\u017cka).", 
    "Cancel": "Anuluj", 
    "Check": "Prze\u015blij", 
    "Correct": "Poprawnie", 
    "Correctness of input values": "Poprawno\u015b\u0107 wprowadzonych danych", 
    "Current feedback state": "Aktualny stan informacji zwrotnej", 
    "Default question content ": "Domy\u015blna tre\u015b\u0107 pytania", 
    "Definition": "Definicja", 
    "Delete": "Usu\u0144", 
    "Display Name": "Wy\u015bwietlana nazwa", 
    "Dummy": "Lorem ipsum", 
    "Embedded Answers": "Zadanie zagnie\u017cd\u017cone z luk\u0105", 
    "Enter a problem here. In square brackets [] enter the words, which will be changed into gaps.": "Tutaj wpisz tre\u015b\u0107 zadania. W nawiasach kwadratowych [] wpisz s\u0142owa, kt\u00f3re zmieni\u0105 si\u0119 w luki.", 
    "Feedback": "Wiadomo\u015b\u0107 zwrotna", 
    "Feedback for input values": "Informacja zwrotna dla warto\u015bci wej\u015bciowych", 
    "Hint": "Podpowied\u017a", 
    "Hints": "Podpowiedzi", 
    "Hints for the question": "Podpowiedzi do pytania", 
    "Incorrect": "B\u0142\u0119dnie", 
    "Indicates whether the learner has completed the problem at least once": "Wskazuje, czy student przynajmniej raz podszed\u0142 do \u0107wiczenia. ", 
    "Order of input_texts in body": "Kolejno\u015b\u0107 opcji w tre\u015bci", 
    "Problem": "\u0106wiczenie", 
    "Reset": "Zresetuj", 
    "Save": "Zapisz", 
    "Saved student correctness values": "Zapisane poprawne wyniki studenta", 
    "Saved student input values": "Zapisane warto\u015bci wej\u015bciowe studenta", 
    "Switch to Visual editor view": "Prze\u0142\u0105cz widok do edytora Wizualnego", 
    "Switch to XML editor view": "Prze\u0142\u0105cz widok do edytora XML", 
    "Tagged word: ": "Oznaczone s\u0142owo:", 
    "The XML definition for the problem": "XML definicja problemu", 
    "This assigns an integer value representing the weight of this problem": "Przypisuje liczb\u0119 ca\u0142kowit\u0105 reprezentuj\u0105c\u0105 wag\u0119 tego problemu", 
    "This name appears in the horizontal navigation at the top of the page": "Ta nazwa wy\u015bwietli si\u0119 na poziomym pasku nawigacyjnym na g\u00f3rze strony. ", 
    "Weight": "Waga", 
    "You haven't completed the question.": "Nie uzupe\u0142niono pytania.", 
    "{weight} point possible": [
      "{weight} mo\u017cliwy punkt", 
      "{weight} mo\u017cliwe punkty", 
      "{weight} mo\u017cliwe punkty", 
      "{weight} mo\u017cliwych punkt\u00f3w"
    ]
  };

  django.gettext = function (msgid) {
    var value = django.catalog[msgid];
    if (typeof(value) == 'undefined') {
      return msgid;
    } else {
      return (typeof(value) == 'string') ? value : value[0];
    }
  };

  django.ngettext = function (singular, plural, count) {
    var value = django.catalog[singular];
    if (typeof(value) == 'undefined') {
      return (count == 1) ? singular : plural;
    } else {
      return value[django.pluralidx(count)];
    }
  };

  django.gettext_noop = function (msgid) { return msgid; };

  django.pgettext = function (context, msgid) {
    var value = django.gettext(context + '\x04' + msgid);
    if (value.indexOf('\x04') != -1) {
      value = msgid;
    }
    return value;
  };

  django.npgettext = function (context, singular, plural, count) {
    var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
    if (value.indexOf('\x04') != -1) {
      value = django.ngettext(singular, plural, count);
    }
    return value;
  };
  

  django.interpolate = function (fmt, obj, named) {
    if (named) {
      return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
    } else {
      return fmt.replace(/%s/g, function(match){return String(obj.shift())});
    }
  };


  /* formatting library */

  django.formats = {
    "DATETIME_FORMAT": "j E Y H:i", 
    "DATETIME_INPUT_FORMATS": [
      "%d.%m.%Y %H:%M:%S", 
      "%d.%m.%Y %H:%M:%S.%f", 
      "%d.%m.%Y %H:%M", 
      "%d.%m.%Y", 
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d"
    ], 
    "DATE_FORMAT": "j E Y", 
    "DATE_INPUT_FORMATS": [
      "%d.%m.%Y", 
      "%d.%m.%y", 
      "%y-%m-%d", 
      "%Y-%m-%d"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "j F", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "d-m-Y  H:i", 
    "SHORT_DATE_FORMAT": "d-m-Y", 
    "THOUSAND_SEPARATOR": "\u00a0", 
    "TIME_FORMAT": "H:i", 
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S", 
      "%H:%M:%S.%f", 
      "%H:%M"
    ], 
    "YEAR_MONTH_FORMAT": "F Y"
  };

  django.get_format = function (format_type) {
    var value = django.formats[format_type];
    if (typeof(value) == 'undefined') {
      return format_type;
    } else {
      return value;
    }
  };

  /* add to global namespace */
  globals.pluralidx = django.pluralidx;
  globals.gettext = django.gettext;
  globals.ngettext = django.ngettext;
  globals.gettext_noop = django.gettext_noop;
  globals.pgettext = django.pgettext;
  globals.npgettext = django.npgettext;
  globals.interpolate = django.interpolate;
  globals.get_format = django.get_format;

}(this));


                  }
                };
                embedded_answersi18n.init();
                global.embedded_answersi18n = embedded_answersi18n;
            }(this));
        