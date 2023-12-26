//import { decimalSeparator,navigator_language   } from './intials_inputs_nb.js';



  //let decimalSeparator = getValue_decimalSeparator2();
  //let userLocale = getInputValue_userLocale2();
  //let navigator_language = getInputValue_navigator_language2();


  export function beforeKeyDown_Nb_fct(event,hot,
    userLocale,
    decimalSeparator,
    navigator_language,
    //condition_split
    ) {  // editable the 2 indexx later inside 
      //alert('eventkey is : ' + event.key )
      var selectedCell = hot.getSelectedLast(); // Get selected cell object
      //var selectedRow = selectedCell[0][0]; // Get selected row index
      var selectedCol = selectedCell[1]; // Get selected column index

      if(event.key=='%' && selectedCol==7){ //editable index for percentages
        var cellpercent0 = hot.getActiveEditor().TEXTAREA; // Get the DOM element representing the cell editor
        hot.getActiveEditor().setValue(hot.getActiveEditor().getValue()+'%');
        cellpercent0.setSelectionRange(cellpercent0.value.length, cellpercent0.value.length); // Set the new cursor position
        event.stopImmediatePropagation();
        event.preventDefault();

        //alert('we typed % in percentage column')
      } else if (decimalSeparator == ',') {
          if (event.key === '.') {
    
            ////////console.log(event)


            //if(selectedCol==3 ||  selectedCol==4        || selectedCol==5 ||        selectedCol==10 ){   // editable index modify editable , it's about percentage and make comma instead of dot in european format
            if(selectedCol==7 ){   // editable index modify editable , it's about percentage and make comma instead of dot in european format

              //////console.log('we are inside selectedCol == 3')
              var cellpercent = hot.getActiveEditor().TEXTAREA; // Get the DOM element representing the cell editor
              hot.getActiveEditor().setValue(hot.getActiveEditor().getValue() + ',');
              cellpercent.setSelectionRange(cellpercent.value.length-1, cellpercent.value.length-1); // Set the new cursor position
              event.stopImmediatePropagation();
              event.preventDefault();
            } else {
            hot.getActiveEditor().setValue(hot.getActiveEditor().getValue() + ',');
            event.stopImmediatePropagation();
            event.preventDefault();
          
          }
          }
          if (event.key === '.' && event.keyCode == 190) {
            //////console.log('eventkey is . and eventkeycode is 190 : ')
            hot.getActiveEditor().setValue(hot.getActiveEditor().getValue().substring(0, hot.getActiveEditor().getValue().length - 1) + '.');
            event.stopImmediatePropagation();
            event.preventDefault();
          }
        }
  }