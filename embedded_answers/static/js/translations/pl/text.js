
            (function(global){
                var embedded_answersi18n = {
                  init: function() {
                    

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n==1 ? 0 : (n%10>=2 && n%10<=4) && (n%100<12 || n%100>14) ? 1 : n!=1 && (n%10>=0 && n%10<=1) || (n%10>=5 && n%10<=9) || (n%100>=12 && n%100<=14) ? 2 : 3);
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "\n            <embedded_answers schema_version='1'>\n                <body>\n                    <p>The highest mountain on Earth is <input_ref input=\"i1\"/>, and the highest mountain in Poland is <input_ref input=\"i2\"/>.</p>\n                </body>\n                <optionresponse>\n                    <optioninput id=\"i1\">\n                        <option correct=\"True\">Mount Everest<optionhint>you are right!</optionhint></option>\n                        <option correct=\"True\">mount everest<optionhint>you are right!</optionhint></option>\n                    </optioninput>\n                </optionresponse>\n                <optionresponse>\n                    <optioninput id=\"i2\">\n                        <option correct=\"True\">Rysy<optionhint>you are right!</optionhint></option>\n                        <option correct=\"True\">rysy<optionhint>you are right!</optionhint></option>\n                    </optioninput>\n                </optionresponse>\n                <demandhint>\n                    <hint>The highest peak on Earth is also called Chomolungma. Its current official elevation is 8,848 m above sea level.</hint>\n                    <hint>The highest Polish peak is located in the Tatra Mountains on the Polish-Slovak border. Its summit is at 2,499 m above sea level.</hint>\n                </demandhint>\n            </embedded_answers>\n        ": "\n            <embedded_answers schema_version='1'>\n                <body>\n                    <p>Najwy\u017cszym szczytem g\u00f3rskim na \u015bwiecie jest <input_ref input=\"i1\"/>, a najwy\u017cszym szczytem w Polsce s\u0105 <input_ref input=\"i2\"/>.</p>\n                </body>\n                <optionresponse>\n                    <optioninput id=\"i1\">\n                        <option correct=\"True\">Mount Everest<optionhint>masz racj\u0119!</optionhint></option>\n                        <option correct=\"True\">mount everest<optionhint>masz racj\u0119!</optionhint></option>\n                    </optioninput>\n                </optionresponse>\n                <optionresponse>\n                    <optioninput id=\"i2\">\n                        <option correct=\"True\">Rysy<optionhint>masz racj\u0119!</optionhint></option>\n                        <option correct=\"True\">rysy<optionhint>masz racj\u0119!</optionhint></option>\n                    </optioninput>\n                </optionresponse>\n                <demandhint>\n                    <hint>Najwy\u017cszy szczyt Ziemi jest zwany te\u017c Czomolungm\u0105. Wznosi si\u0119 na wysoko\u015b\u0107 8848 m n.p.m.</hint>\n                    <hint>Najwy\u017cszy szczyt Polski znajduje si\u0119 w Tatrach na granicy polsko-s\u0142owackiej. Jego wysoko\u015b\u0107 to 2499 m n.p.m.</hint>\n                </demandhint>\n            </embedded_answers>\n        ", 
    "(Loading...)": "(Wczytywanie...)", 
    "/{weight} point (graded)": [
      "/{weight} punkt (klasyfikowany)", 
      "/{weight} punkty (klasyfikowane)", 
      "/{weight} punkt\u00f3w (klasyfikowanych)", 
      "/{weight} punkt\u00f3w (klasyfikowanych)"
    ], 
    "/{weight} point (ungraded)": [
      "/{weight} punkt (nieklasyfikowany)", 
      "/{weight} punkty (nieklasyfikowane)", 
      "/{weight} punkt\u00f3w (nieklasyfikowanych)", 
      "/{weight} punkt\u00f3w (nieklasyfikowanych)"
    ], 
    "A text which will appear after giving a correct alternative answer": "Tekst, kt\u00f3ry wy\u015bwietli si\u0119 po udzieleniu poprawnej odpowiedzi", 
    "A text which will appear after giving a correct answer": "Tekst, kt\u00f3ry wy\u015bwietli si\u0119 po udzieleniu poprawnej odpowiedzi", 
    "Add a hint": "Dodaj podpowied\u017a", 
    "Add alternative response": "Dodaj odpowied\u017a alternatywn\u0105", 
    "Alternative reponse": "Alternatywna odpowied\u017a", 
    "Alternative responses": "Odpowiedzi alternatywne", 
    "Always": "Zawsze", 
    "Answer submitted.": "Odpowied\u017a przes\u0142ana", 
    "Answered": "Odpowiedziano", 
    "Attempted": "Podj\u0119to pr\u00f3b\u0119", 
    "Beneath there is a list of hints. You can modify, add and delete them.": "Pod spodem znajduje si\u0119 lista podpowiedzi. Mo\u017cesz je dodawa\u0107, modyfikowa\u0107 i usuwa\u0107.", 
    "Beneath you have a list of words extracted from the square brackets []. You can add feedback message which will appear after giving the correct answer. You may also add alternative responses which will also be accepted (e.g. caf\u00e9 cafe)": "Pod spodem znajduje si\u0119 lista s\u0142\u00f3w wyodr\u0119bnionych w \u0107wiczeniu nawiasami kwadratowymi []. Mo\u017cesz tu doda\u0107 informacj\u0119 zwrotn\u0105, kt\u00f3ra pojawi si\u0119 po udzieleniu poprawnej odpowiedzi. Mo\u017cesz r\u00f3wnie\u017c doda\u0107 odpowiedzi alternatywne, kt\u00f3re te\u017c b\u0119d\u0105 akceptowane (np. ksiazka, ksi\u0105\u017cka).", 
    "Cancel": "Anuluj", 
    "Check": "Prze\u015blij", 
    "Closed": "Zamkni\u0119te", 
    "Correct ({progress} point).": [
      "Poprawnie ({progress} punkt).", 
      "Poprawnie ({progress} punkty).", 
      "Poprawnie ({progress} punkt\u00f3w).", 
      "Poprawnie ({progress} punkt\u00f3w)."
    ], 
    "Correct answer": "Prawid\u0142owa odpowied\u017a", 
    "Correct answers": "Prawid\u0142owe odpowiedzi", 
    "Correct or Past Due": "Prawid\u0142owo lub po terminie", 
    "Correctness of input values": "Poprawno\u015b\u0107 wprowadzonych danych", 
    "Current feedback state": "Aktualny stan informacji zwrotnej", 
    "Default question content ": "Domy\u015blna tre\u015b\u0107 pytania", 
    "Defines the number of times a student can try to answer this problem. If the value is not set, infinite attempts are allowed.": "Pozwala okre\u015bli\u0107 liczb\u0119 pr\u00f3b jak\u0105 student mo\u017ce podj\u0105\u0107 w celu wykonania \u0107wiczenia. W przypadku niewpisania warto\u015bci, dopuszcza si\u0119 nielimitowan\u0105 liczb\u0119 pr\u00f3b.", 
    "Defines when to show the answer to the problem. A default value can be set in Advanced Settings.": "Okre\u015bl, kiedy wy\u015bwietli\u0107 odpowied\u017a na \u0107wiczenie. Mo\u017cna wskaza\u0107 domy\u015bln\u0105 warto\u015b\u0107 w ustawieniach zaawansowanych.", 
    "Definition": "Definicja", 
    "Delete": "Usu\u0144", 
    "Determines whether a 'Reset' button is shown so the user may reset their answer. A default value can be set in Advanced Settings.": "Okre\u015bl, kiedy wy\u015bwietli\u0107 odpowied\u017a na \u0107wiczenie. Mo\u017cna wskaza\u0107 domy\u015bln\u0105 warto\u015b\u0107 w ustawieniach zaawansowanych.", 
    "Display Name": "Wy\u015bwietlana nazwa", 
    "Dummy": "Lorem ipsum", 
    "Editor": "Edytor", 
    "Embedded Answers": "Zadanie zagnie\u017cd\u017cone z luk\u0105", 
    "Enter a problem here. In square brackets [] enter the words, which will be changed into gaps.": "Tutaj wpisz tre\u015b\u0107 zadania. W nawiasach kwadratowych [] wpisz s\u0142owa, kt\u00f3re zmieni\u0105 si\u0119 w luki.", 
    "False": "Nie", 
    "Feedback": "Wiadomo\u015b\u0107 zwrotna", 
    "Feedback for input values": "Informacja zwrotna dla warto\u015bci wej\u015bciowych", 
    "Finished": "Uko\u0144czone", 
    "Force Save Button": "Wymuszenie przycisku zapisu", 
    "Hint": "Podpowied\u017a", 
    "Hints": "Podpowiedzi", 
    "Hints for the question": "Podpowiedzi do pytania", 
    "Incorrect ({progress} point).": [
      "B\u0142\u0119dnie ({progress} punkt).", 
      "B\u0142\u0119dnie ({progress} punkty).", 
      "B\u0142\u0119dnie ({progress} punkt\u00f3w).", 
      "B\u0142\u0119dnie ({progress} punkt\u00f3w)."
    ], 
    "Incorrect.": "B\u0142\u0119dnie", 
    "Indicates whether the learner has completed the problem at least once": "Wskazuje, czy student przynajmniej raz podszed\u0142 do \u0107wiczenia. ", 
    "Last submission time": "Data ostatniego zg\u0142oszenia", 
    "Maximum Attempts": "Maksymalna liczba pr\u00f3b", 
    "Never": "Nigdy", 
    "Number of attempts taken by the student on this problem": "Liczba pr\u00f3b podj\u0119tych przez studenta w celu rozwi\u0105zania \u0107wiczenia", 
    "Order of input_texts in body": "Kolejno\u015b\u0107 opcji w tre\u015bci", 
    "Partially correct ({progress} point).": [
      "Cz\u0119\u015bciowo poprawnie ({progress} punkt).", 
      "Cz\u0119\u015bciowo poprawnie ({progress} punkty).", 
      "Cz\u0119\u015bciowo poprawnie ({progress} punkt\u00f3w).", 
      "Cz\u0119\u015bciowo poprawnie ({progress} punkt\u00f3w)."
    ], 
    "Past Due": "Po terminie", 
    "Problem": "\u0106wiczenie", 
    "Problem closed": "\u0106wiczenie zosta\u0142o zamkni\u0119te", 
    "Reset": "Zresetuj", 
    "Save": "Zapisz", 
    "Save your answer": "Zapisz odpowied\u017a", 
    "Saved": "Zapisano", 
    "Saved student correctness values": "Zapisane poprawne wyniki studenta", 
    "Saved student input values": "Zapisane warto\u015bci wej\u015bciowe studenta", 
    "Seconds a student must wait between submissions for a problem with multiple attempts.": "Liczba sekund, kt\u00f3r\u0105 student musi odczeka\u0107 pomi\u0119dzy kolejnymi pr\u00f3bami w \u0107wiczeniach pozwalaj\u0105cych na wiele podej\u015b\u0107.", 
    "Settings": "Ustawienia", 
    "Show Answer": "Poka\u017c odpowied\u017a", 
    "Show Reset Button": "Wy\u015bwietl przycisk resetu", 
    "Show hint": "Poka\u017c podpowied\u017a", 
    "Switch to Visual editor view": "Prze\u0142\u0105cz widok do edytora Wizualnego", 
    "Switch to XML editor view": "Prze\u0142\u0105cz widok do edytora XML", 
    "Tagged word: ": "Oznaczone s\u0142owo:", 
    "The XML definition for the problem": "XML definicja problemu", 
    "This assigns an integer value representing the weight of this problem": "Przypisuje liczb\u0119 ca\u0142kowit\u0105 reprezentuj\u0105c\u0105 wag\u0119 tego problemu", 
    "This name appears in the horizontal navigation at the top of the page": "Ta nazwa wy\u015bwietli si\u0119 na poziomym pasku nawigacyjnym na g\u00f3rze strony. ", 
    "Timer Between Attempts": "Czas pomi\u0119dzy pr\u00f3bami", 
    "True": "Tak", 
    "Weight": "Waga", 
    "Whether or not the answers have been saved since last submit": "Czy odpowiedzi zosta\u0142y zapisane po ostatnim zg\u0142oszeniu", 
    "Whether to force the save button to appear on the page": "Czy wy\u015bwietla\u0107 przycisk zapisu stanu na tej stronie", 
    "You cannot select Reset for a problem that is closed.": "Nie mo\u017cesz zresetowa\u0107 \u0107wiczenia, kt\u00f3re zosta\u0142o zamkni\u0119te.", 
    "You have used {num_used} of {num_total} attempt": [
      "Wykorzystano {num_used} spo\u015br\u00f3d {num_total} mo\u017cliwej pr\u00f3by", 
      "Wykorzystano {num_used} spo\u015br\u00f3d {num_total} mo\u017cliwych pr\u00f3b", 
      "Wykorzystano {num_used} spo\u015br\u00f3d {num_total} mo\u017cliwych pr\u00f3b", 
      "Wykorzystano {num_used} spo\u015br\u00f3d {num_total} mo\u017cliwych pr\u00f3b"
    ], 
    "You haven't completed the question.": "Nie uzupe\u0142niono pytania.", 
    "You must wait at least {wait_secs} between submissions. {remaining_secs} remaining.": "Nale\u017cy odczeka\u0107 co najmniej {wait_secs} pomi\u0119dzy kolejnymi pr\u00f3bami. Pozosta\u0142o {remaining_secs}.", 
    "or": "lub", 
    "{num_hour} hour": [
      "{num_hour} godzina", 
      "{num_hour} godziny", 
      "{num_hour} godzin", 
      "{num_hour} godzin"
    ], 
    "{num_minute} minute": [
      "{num_minute} minuta", 
      "{num_minute} minuty", 
      "{num_minute} minut", 
      "{num_minute} minut"
    ], 
    "{num_second} second": [
      "{num_second} sekunda", 
      "{num_second} sekundy", 
      "{num_second} sekund", 
      "{num_second} sekund"
    ], 
    "{weight} point possible (graded)": [
      "{weight} mo\u017cliwy punkt (klasyfikowany)", 
      "{weight} mo\u017cliwe punkty (klasyfikowane)", 
      "{weight} mo\u017cliwych punkt\u00f3w (klasyfikowanych)", 
      "{weight} mo\u017cliwych punkt\u00f3w (klasyfikowanych)"
    ], 
    "{weight} point possible (graded, results hidden)": [
      "{weight} mo\u017cliwy punkt (klasyfikowany, wynik ukryty)", 
      "{weight} mo\u017cliwe punkty (klasyfikowane, wynik ukryty)", 
      "{weight} mo\u017cliwych punkt\u00f3w (klasyfikowanych, wynik ukryty)", 
      "{weight} mo\u017cliwych punkt\u00f3w (klasyfikowanych, wynik ukryty)"
    ], 
    "{weight} point possible (ungraded)": [
      "{weight} mo\u017cliwy punkt (nieklasyfikowany)", 
      "{weight} mo\u017cliwe punkty (nieklasyfikowane)", 
      "{weight} mo\u017cliwych punkt\u00f3w (nieklasyfikowanych)", 
      "{weight} mo\u017cliwych punkt\u00f3w (nieklasyfikowanych)"
    ], 
    "{weight} point possible (ungraded, results hidden)": [
      "{weight} mo\u017cliwy punkt (nieklasyfikowany, wynik ukryty)", 
      "{weight} mo\u017cliwe punkty (nieklasyfikowane, wynik ukryty)", 
      "{weight} mo\u017cliwych punkt\u00f3w (nieklasyfikowanych, wynik ukryty)", 
      "{weight} mo\u017cliwych punkt\u00f3w (nieklasyfikowanych, wynik ukryty)"
    ]
  };
  for (var key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      var value = django.catalog[msgid];
      if (typeof(value) == 'undefined') {
        return msgid;
      } else {
        return (typeof(value) == 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      var value = django.catalog[singular];
      if (typeof(value) == 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value[django.pluralidx(count)];
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      var value = django.gettext(context + '\x04' + msgid);
      if (value.indexOf('\x04') != -1) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.indexOf('\x04') != -1) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
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

    django.get_format = function(format_type) {
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

    django.jsi18n_initialized = true;
  }

}(this));


                  }
                };
                embedded_answersi18n.init();
                global.embedded_answersi18n = embedded_answersi18n;
            }(this));
        