import { beforeKeyDown_Dates_fct } from './beforeKeyDown_folder.js/beforeKeyDown_Dates'; //is_date_exist==false
import { beforeKeyDown_Nb_fct } from './beforeKeyDown_folder.js/beforeKeyDown_Nb';

// import { decimalSeparator,navigator_language   } from './intials_inputs_nb.js';

export function beforeKeyDownfct(event,hot,
  userLocale2,
  decimalSeparator2,
  navigator_language2,
  //condition_split2
  ) {  // editable the 2 indexx later inside 
    console.log('hot :')
    console.log(hot)
    var selected = hot.getSelected();
    var currentColIndex = selected ? selected[0][1] : null;
    var currentRowIndex = selected ? selected[0][0] : null;

    

   /*
   
  ################################################################################"
  ################################################################################
  ####################### beforeKeyDown_Dates_fct : ##############################
  ################################################################################"
  ################################################################################"


   if(currentColIndex==14 && currentRowIndex>5) {  //  //is_date_exist==false editable (about dates)  //is_date_exist==false edit it later changeable , modify it later , change it later
      beforeKeyDown_Dates_fct(event, hot,
         userLocale2,
         decimalSeparator2,
         navigator_language2,
         //condition_split2
         ) // about dates
      }
  */

    if(currentColIndex!=1 && currentColIndex!=9 &&  currentColIndex!=14  ) { // editable and adding other text columns || dont equal to  
      beforeKeyDown_Nb_fct(event, hot,
        userLocale2,
        decimalSeparator2,
        navigator_language2,
 //       condition_split2     
        ) // about Amounts and Nb
  }
}