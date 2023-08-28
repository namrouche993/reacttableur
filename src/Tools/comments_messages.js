import { emails_length_em } from "../initials_inputs";

export function comments_messages(value,msg,language,
  userLocale2_redux,
  decimalSeparator2_redux
  ){
  
    if(msg=='error'){
      if(language=='fr-FR'){
        var mm = "la valeur '" + value + "' n'est pas valide ";
        return mm;

      } else if (language=='en-US'){
        var mm = "The value '" + value + "' is not valid.";
        return mm;
      }
    }
    else if (msg=='val_try_to_fix'){
      if(language=='fr-FR'){
        var mm = "la valeur '" + value + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres";
        return mm;
      } else if (language=='en-US'){

      }
      // ---------------- # date_correct msg # ----------------
      // ---------------- # date_correct msg # ----------------
      // ---------------- # date_correct msg # ----------------

    }
    else if (msg=='val_try_to_fix_comma_instead_dot'){
      if(language=='fr-FR'){
        var mm = "la valeur '" + value + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres  |  " + value.toString().replace(/\s+/g, '').trim().toString().replace('.', ',') + " est correct (virguale à la place du point).";
        return mm;

      } else if (language=='en-US'){
        var mm = "The value '" + value + "' is not valid. Try correcting the formatting according to your parameters. | " + value.toString().replace(/\s+/g, '').trim().toString().replace('.', ',') + " is correct (comma instead of a dot).";
        return mm;

      }
    } 
    else if (msg=='val_try_to_fix_dot_instead_comma'){
      if(language=='fr-FR'){
      var mm = "la valeur '" + value + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres  |  " + value.toString().replace(/\s+/g, '').trim().toString().replace(',', '.') + " est correct (point à la place de la virgule)";
      return mm;
      } else if (language=='en-US'){
        var mm = "The value '" + value + "' is not valid. Try correcting the formatting according to your parameters. | " + value.toString().replace(/\s+/g, '').trim().toString().replace(',', '.') + " is correct (dot instead of a comma).";
        return mm;
      }
    }
    else if (msg=='val_try_to_fix_4'){
      if(language=='fr-FR'){
        var mm = "la valeur '" + value + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres  |  " + Number(value).toLocaleString(userLocale2_redux) + " est correct";
        return mm;
      } else if (language=='en-US'){
        var mm = "The value '" + value + "' is not valid. Try correcting the formatting according to your parameters. | " + Number(value).toLocaleString(userLocale2_redux) + " is correct.";
        return mm;
      }
    }
    else if (msg=='val_try_to_fix_5'){
      if(language=='fr-FR'){
        var mm = "la valeur '" + value + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres  |  " + value.trim().toString().replace(',', '.') + " est correct";
        return mm;
      } else if (language=='en-US'){
        var mm = "The value '" + value + "' is not valid. Try correcting the formatting according to your parameters. | " + value.trim().toString().replace(',', '.') + " is correct.";
        return mm;
      }
    }
    else if (msg=='val_try_to_fix_6'){
      if(language=='fr-FR'){
        var mm =  "la valeur '" + value + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres  |  " + Number(value.toString().replace(/,/g, '')).toLocaleString(userLocale2_redux) + " est correct";
        return mm;
      } else if (language=='en-US'){
        var mm = "The value '" + value + "' is not valid. Try correcting the formatting according to your parameters. | " + Number(value.toString().replace(/,/g, '')).toLocaleString(userLocale2_redux) + " is correct.";
        return mm;
      }
    }
    else if (msg=='val_try_to_fix_fill_only_numbers'){
      if(language=='fr-FR'){
        var mm =  "la valeur '" + value + "' n'est pas valide pour cette cellule. Veuillez saisir uniquement des valeurs numériques";
        return mm;
      } else if (language=='en-US'){
        var mm = "The value '" + value + "' is not valid for this cell. Please enter only numeric values.";
        return mm;
      }
    }
    else if (msg=='val_try_to_fix_8'){
      if(language=='fr-FR'){
        var mm = "la valeur '" + value + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres  |  " + value.trim().toString().replace(/\./g, '').toString().replace(',', '.') + " est correct";
        return mm;
      } else if (language=='en-US'){
        var mm = "The value '" + value + "' is not valid. Try correcting the formatting according to your parameters. | " + value.trim().toString().replace(/./g, '').toString().replace(',', '.') + " is correct.";
        return mm;
      }
    }
    else if (msg=='date_try_to_fix') {
      if(language=='fr-FR'){
        var mm = "la date '" + value + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres  ";
        return mm;

      } else if (language=='en-US'){
        var mm = "The date '" + value + "' is not valid. Try correcting the formatting according to your parameters.";
        return mm;
      }
      // ---------------- # date_no_valid msg # ----------------
      // ---------------- # date_no_valid msg # ----------------
      // ---------------- # date_no_valid msg # ----------------
    }
    else if (msg=='date_no_valid') {
      if(language=='fr-FR'){
        var mm = "la date '" + value + "' n'est pas valide ";
        return mm;

      } else if (language=='en-US'){
        var mm = "The date '" + value + "' is not valid.";
        return mm;
      }
    }
    else if (msg=='val_no_valid') {
      if(language=='fr-FR'){
        var mm = "la valeur '" + value + "' n'est pas valide ";
        return mm;

      } else if (language=='en-US'){
        var mm = "The value '" + value + "' is not valid.";
        return mm;
      }

    }
    else if (msg=='limit_autor') {
          // ---------------- # limite_autorise msg # ----------------
      // ---------------- # limite_autorise msg # ----------------
      // ---------------- # limite_autorise msg # ----------------
      if(language=='fr-FR'){
        var mm = "La valeur que vous avez saisie dépasse la limite autorisée !!";
        return mm;

      } else if (language=='en-US'){
        var mm = "The value you entered exceeds the allowed limit!";
        return mm;
      }

    }
    else if (msg=='dropdown_included') {
      if(language=='fr-FR'){
        var mm = "Veuillez choisir une valeur incluse dans la liste";
        return mm;

      } else if (language=='en-US'){
        var mm = "Please choose a value included in the list.";
        return mm;
      }
    }
    else if (msg=='percentage_no_valid_isvalidfalse_end') {
      if(language=='fr-FR'){
        var mm = "la valeur '" + value + "' n'est pas valide, Veuillez entrer uniquement des pourcentages. ";
        return mm;

      } else if (language=='en-US'){
        var mm = "The value '" + value + "' is not valid, Please enter only percentages";
        return mm;
      }
    }
    else if (msg=='refuse_negative'){
      if(language=='fr-FR'){
        var mm = "Attention : La valeur que vous avez saisie est négative, Veuillez saisir un nombre supérieur à zéro. ";
        return mm;

      } else if (language=='en-US'){
        var mm = "Warning: The value you entered is negative. Please enter a number greater than zero.";
        return mm;
      }
    }
    else if (msg=='refuse_float'){
      if(language=='fr-FR'){
        var mm = "Veuillez saisir un nombre entier et non un nombre décimal. (pas de virgule) ";
        return mm;

      } else if (language=='en-US'){
        var mm = "Please enter an integer value, not a decimal number.";
        return mm;
      }
    }
      else if (msg=='email_invalid'){
      if(language=='fr-FR'){
        var mm = "Veuillez entrer une adresse email valide. || " + value.substring(0,Number(emails_length_em)) + "... -  n'est pas valide" ;
        return mm;

      } else if (language=='en-US'){
        var mm = "Please enter a valid email address. || " +  value.substring(0,Number(emails_length_em)) + "... -  is not valid." ;
        return mm;
      }
    }
    else if (msg=='phonenumbers_invalid'){
      if(language=='fr-FR'){
        var mm = "Veuillez entrer un numéro de téléphone valide.";
        return mm;

      } else if (language=='en-US'){
        var mm = "Please enter a valid phone number.";
        return mm;
      }
    }
    else if (msg=='onlynumbers_invalid'){
      if(language=='fr-FR'){
        var mm = "Veuillez saisir des nombres.";
        return mm;

      } else if (language=='en-US'){
        var mm = "Please enter numbers only.";
        return mm;
      }
    }  
    else if (msg=='onlynumbers_depass_length'){
      if(language=='fr-FR'){
        var mm = "La valeur " + value.substring(0,100) + " que vous avez saisie dépasse la limite autorisée !!";
        return mm;

      } else if (language=='en-US'){
        var mm = "The value you entered exceeds the allowed limit!";
        return mm;
      }
    }
    else if (msg=='text_depass_limit'){
      if(language=='fr-FR'){
        var mm = "Le texte : '"+value.substring(0,30)+"...' que vous avez saisie dépasse la limite autorisée !!";
        return mm;

      } else if (language=='en-US'){
        var mm = "The value you entered exceeds the allowed limit!";
        return mm;
      }
    
    }
    else if (msg=='tooltip_undo'){
      if(language=='fr-FR'){
        var mm = "Annuler la dernière action ( Ctrl + Z )";
        return mm;
//      } else if (language=='en-US'){
      } else {
        var mm = "Undo ( Ctrl + Z )";
        return mm;
      }
    }
    else if (msg=='tooltip_redo'){
      if(language=='fr-FR'){
        var mm = "Rétablir ( Ctrl + Y )";
        return mm;
//      } else if (language=='en-US'){
      } else {
        var mm = "Redo ( Ctrl + Y )";
        return mm;
      }
    }
    else if (msg=='tooltip_finish'){
      if(language=='fr-FR'){
        var mm = "Envoyer les données"; // ou Envoyer
        return mm;
      //} else if (language=='en-US'){
      } else {
        var mm = "Send data";
        return mm;
      }
    }
    else if (msg=='tooltip_modalformat'){
      if(language=='fr-FR'){
        var mm = "Changer les formats"; // ou Envoyer
        return mm;
      //} else if (language=='en-US'){
      } else {
        var mm = "Change Format";
        return mm;
      }
    }
    else if (msg=='tooltip_logout'){
      if(language=='fr-FR'){
        var mm = "Modifier vos renseignements préliminaires"; // ou Envoyer
        return mm;
      //} else if (language=='en-US'){
      } else {
        var mm = "Edit your preliminary information";
        return mm;
      }
    }
     
  }

  