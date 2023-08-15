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
    if (event.key === 'Delete') {
      console.log('eventkey is delete : ')
      var selectedRange = hot.getSelectedRange();
        var startRow = selectedRange[0].from.row
        var startCol = selectedRange[0].from.col
        var endRow   = selectedRange[0].to.row
        var endCol   = selectedRange[0].to.col
        
        if(startRow+3>endRow && startCol+3>endCol){
          console.log('small cell')
          commentsPlugin.removeCommentAtCell(startRow, startCol);
        } else { 
         // setTimeout( hot.getPlugin('comments').removeCommentAtCell(cell.row, cell.col), delay);
          console.log('not removing ')
        }       
    }
    */

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