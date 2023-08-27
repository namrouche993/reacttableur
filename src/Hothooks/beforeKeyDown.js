import { beforeKeyDown_Dates_fct } from './beforeKeyDown_folder.js/beforeKeyDown_Dates'; //is_date_exist==false
import { beforeKeyDown_Nb_fct } from './beforeKeyDown_folder.js/beforeKeyDown_Nb';

// import { decimalSeparator,navigator_language   } from './intials_inputs_nb.js';

export function beforeKeyDownfct(event,hot,
  userLocale2,
  decimalSeparator2,
  navigator_language2,
  commentsPlugin
  //condition_split2
  ) {  // editable the 2 indexx later inside 
    console.log('beforekeydown : ')


    var selected = hot.getSelected();
    var selectedRange = hot.getSelectedRange();
    
    var currentColIndex = selected ? selected[0][1] : null;
    var currentRowIndex = selected ? selected[0][0] : null;
    
    /*
  ################################################################################"
  ################################################################################
  ####################### beforeKeyDown_Dates_fct : ##############################
  ################################################################################"
  ################################################################################"
*/



   //if(currentColIndex==14 && currentRowIndex>5) {  //  //is_date_exist==false editable index (about dates)  //is_date_exist==false edit it later changeable , modify it later , change it later
   if(currentColIndex==6 && currentRowIndex>5) {  //  //is_date_exist==false editable index (about dates)  //is_date_exist==false edit it later changeable , modify it later , change it later
    beforeKeyDown_Dates_fct(event, hot,
         userLocale2.current,
         decimalSeparator2.current,
         navigator_language2.current,
         //condition_split2
         ) // about dates
      }


    //if(currentColIndex!=1 && currentColIndex!=9 &&  currentColIndex!=14  ) { // editable index and adding other text columns || dont equal to  
    if(currentColIndex==7 || currentColIndex==8 || currentColIndex==10 ) { // editable index and adding other text columns || dont equal to  
      beforeKeyDown_Nb_fct(event, hot,
        userLocale2.current,
        decimalSeparator2.current,
        navigator_language2.current,
 //       condition_split2     
        ) // about Amounts and Nb
  }
}