    import _ from 'lodash';
    import { mergecellsarray,mycellmergedfct } from '../Tools/mergecells';
    import { getInputValue_hot_undone2,
      getInputValue_srcautofillactivated,
      setInputValue_srcautofillactivated,

      setInputValue_copypastelength,
      getInputValue_copypastelength


    } from '../initials_inputs';

    let lastelement_supthan1=0;    
    export function afterChangeHandler(changes,src,hot,data22,array_of_notmerged_cells_2,commentsPlugin){

      console.log('afterChange Handler')
      ////console.log(src)
      ////console.log(changes)
      ////console.log(hot.undoRedo.doneActions)
      //alert('afterchange')
      ////console.log(src)
      ////console.log(changes)
      //alert('start of afterChangeHandler')
      
      // var allValuesEqualtonull = changes.every(function(row) {
      //   return row[3] === null;
      // });

      //if (allValuesEqualtonull) {

        
        // setTimeout(() => {
        //   changes.map((x,index)=>{
        //     //console.log('removing comments')
        //     //console.log(x)
        //     commentsPlugin.removeCommentAtCell(x[0], x[1]);
        //   })
        //   }, 2000);
        
      //  } else {

      
      
      
      //const hot = otherArgs[otherArgs.length - 1];
        ////console.log('AFTER CHANGE ::::::::::::::::::')
        ////console.log(src)    
        if(hot.undoRedo.isUndoAvailable()){
           hot.undoRedo.doneActions[hot.undoRedo.doneActions.length-1].src=src;
         }
     if( (src=='Autofill.fill' && changes.length>1) || (src=='CopyPaste.paste' && changes.length>1) ){
      ////console.log('afterchange src autofill && changes.length sup 1 : ')
      
      if(getInputValue_copypastelength()==true){
        //alert('it will be back to false now ')
        setInputValue_copypastelength(false)
      }

      lastelement_supthan1=hot.undoRedo.doneActions.length
      setInputValue_srcautofillactivated(true)
      //alert('src==autofil.fill')
    } else if (src=='edit' && changes.length>1 && changes.every(row => row[3] === null) ){
      //////console.log('we are incase afterchange where src==edit and changes.length>1')
      //alert('edit and changes>1')
      lastelement_supthan1=hot.undoRedo.doneActions.length
     }

     if(src=='changeorganismesrc') {
      ////console.log('we will remove changeorganisme src')
      hot.undoRedo.doneActions.pop()
     }
    
    
     if(src=='my_source' || src=='my_source_removewhitespacesign' || src=='my_source_removewhitespacesign_percentage' || src=='my_source_removegreaterdecimalnumbers_percentage' || src=='my_source_convertitto_0' || src=='my_source_removewhitespacesign_date' || src=='my_source_date'){
      var shouldBreak = false;
      ////////console.log('before entering loop , lastelement_supthan1 is : ' + lastelement_supthan1)
      for (let index = hot.undoRedo.doneActions.length-1; index >lastelement_supthan1 && !shouldBreak; index--) {
        const element = hot.undoRedo.doneActions[index].changes.length;
        //////console.log('****** WE ARE INSIDE LOOP UNTIL lastelement_supthan1 ****** index :' + index + ' *** and element : ' + element)
        if(element>1){
          //////console.log('we enter element>1 condition')
          hot.undoRedo.doneActions[index].changes.forEach((x,y)=>{
            //////console.log('we are inside foreach in renderer')
                  if (x[0] == changes[0][0] && x[1] == changes[0][1]) {
                  //////console.log('we are inside condition renderer')
                  x[3] = changes[0][3]
                  lastelement_supthan1=index;
                  //////console.log('lastelement_supthan1 is ' + lastelement_supthan1)
                  hot.undoRedo.doneActions.pop()
                  shouldBreak = true;
                  return;    
              }
          })
        }
        //////console.log(element)
      }
    }
    //////console.log('shouldbreak is : ' + shouldBreak )
    //////console.log(shouldBreak==false)
    ////////console.log('index after the end of loop part : ' + typeof index==undefined ? 'a' : index)
        if ( ( src == 'my_source' || src=='my_source_removewhitespacesign' || src=='my_source_removewhitespacesign_percentage' || src=='my_source_removegreaterdecimalnumbers_percentage' || src=='my_source_convertitto_0' || src=='my_source_removewhitespacesign_date' || src=='my_source_date') && !shouldBreak) {
          //////console.log('afterchange mysource62 and we will pop it')

          hot.undoRedo.doneActions[hot.undoRedo.doneActions.length - 2].changes.forEach((x, y) => {
                    //////console.log('we are inside foreach in renderer')
                     if (x[0] == changes[0][0] && x[1] == changes[0][1]) {
                    //////console.log('we are inside condition renderer')
                    x[3] = changes[0][3]
                    lastelement_supthan1=hot.undoRedo.doneActions.length-2
                    hot.undoRedo.doneActions.pop()
                    shouldBreak=true;
                  }
                  })
        }
      
      if( (src == 'my_source_empty' && changes[0][2]!='')  || (src=='my_source_empty_percentage' && changes[0][2]!='' ) || (src=='my_source_empty_date' && changes[0][2]!='' ) || (src=='my_source_empty_dropdown' && changes[0][2]!=' ' ) || (src=='my_source_empty_email' && changes[0][2]!='' ) || (src=='my_source_empty_phonenumbers' && changes[0][2]!='' ) || (src=='my_source_empty_onlynumbers' && changes[0][2]!='' ) ){    
          //////console.log('when src == my_source_empty and changes[0][2]!= "" ')
          //hot.undoRedo.doneActions[hot.undoRedo.doneActions.length - 2].changes[0][3]=''
          hot.undoRedo.doneActions[hot.undoRedo.doneActions.length - 2].changes.forEach((x, y) => {
                     ////console.log('if mysourceempty and changes02 !== "" ')
                     ////console.log(x)
                     ////console.log(changes)
                     //alert('ifmysourceempty and changes02 !== ""')
                    //////console.log('3-we are inside foreach in renderer')
                     if (x[0] == changes[0][0] && x[1] == changes[0][1]) {
                    //////console.log('3-we are inside condition renderer')
                    ////console.log('x before in mysourceempty and cahnges02!==""')
                    ////console.log(x)
                    x[3] = '';
                    ////console.log('x after in mysourceempty and cahnges02!==""')
                    ////console.log(x)

                    hot.undoRedo.doneActions.pop()
                    //shouldBreak=true;
                  }
                  })
    
        }

        if( getInputValue_srcautofillactivated()==true && ( (src == 'my_source_empty')  || (src=='my_source_empty_percentage') || (src=='my_source_empty_date') || (src=='my_source_empty_dropdown') || (src=='my_source_empty_email') || (src=='my_source_empty_phonenumbers') || (src=='my_source_empty_onlynumbers') ) ){
          ////console.log('we enter to autofilactivated and one of sourceempty : ')
          ////console.log(changes)
          ////console.log(src)
          ////console.log(hot.undoRedo.doneActions[0].changes)
          ////console.log(hot.undoRedo.doneActions[1].changes)

          //alert('we enter to getautofillactived== true and source empty')

          hot.undoRedo.doneActions[hot.undoRedo.doneActions.length - 1].changes.forEach((x, y) => {
            if (x[0] == changes[0][0] && x[1] == changes[0][1]) {
              ////console.log('test ifget')
              ////console.log(x)
              ////console.log(changes)
               x[3]='';
               ////console.log(x)
               ////console.log(changes)
               //hot.undoRedo.doneActions.pop();
               //alert('see now')
            }
          })
        } else if (src!=='Autofill.fill' && src!=='CopyPaste.paste') {
          //alert('we will exit from autoffill ctivated')
          setInputValue_srcautofillactivated(false)
        }

        /*
        if(getInputValue_srcautofillactivated()==true){
          hot.undoRedo.doneActions[hot.undoRedo.doneActions.length - 1].changes.forEach((x, y) => {
          //console.log(changes)
          //console.log(src)
          //console.log('x before : ')
          //console.log(x)  
          x[3]=''
          //console.log('x after : ')
          //console.log(x)
          alert('x')
          })
          setInputValue_srcautofillactivated(false)
        }
        */

        if(src!=='loadData'){
          changes.forEach((x,y)=>{
          //////console.log(y)
          ////console.log('cellgetcell : ')
        

          var cellgetcell = hot.getCell(x[0],x[1]);


          ////console.log(cellgetcell.childNodes)
          ////console.log(cellgetcell.childNodes[cellgetcell.children.length])
          //alert('cellget')
          //////console.log(cellgetcell.innerHTML) 
          if(cellgetcell!==null && cellgetcell.childNodes[cellgetcell.children.length]!==undefined){
            data22[x[0]][x[1]]=cellgetcell.childNodes[cellgetcell.children.length].textContent.toString().trim().replace(/[\s\u00A0]/g, ' ') 
          } else {
            data22[x[0]][x[1]]='';
          }
        })
        //alert('data22 triggered')
        //////console.log(' ----------------------------- ---------------------------- ------')
      }
      if(src=='dataatrowprop_convert_to_en'){
        
        hot.undoRedo.doneActions.pop();
        //////console.log(hot.undoRedo.doneActions)
        for (let index = 0; index<hot.undoRedo.doneActions.length; index++) {
          //////console.log('we are inside index dataatrowprop_convert_to_en')
          //////console.log(index)
            hot.undoRedo.doneActions[index].changes.forEach((x,y)=>{
              if( // editable index
              x[1] == 7 || x[1] == 8

              /*  x[1] == 2 || x[1] == 3 || x[1] == 4  || x[1] == 5  || x[1] == 6  ||
                x[1] == 7 || x[1] == 8 || x[1] == 10 || x[1] == 11 || x[1] == 12 || 
                x[1] == 13
              */
                ){
                  if(x[2]!==null && x[2]!=='' && x[2]!==' '){
                    x[2]=x[2].toString().replace(/,/g, '.');
                  }
                  if(x[3]!==null && x[3]!=='' && x[3]!==' '){
                     x[3]=x[3].toString().replace(/,/g, '.');
                  }
                    }
            })      
        }
        //hot.undoRedo.undoneActions=_.cloneDeep(hot_undone2.current)
        hot.undoRedo.undoneActions=_.cloneDeep(getInputValue_hot_undone2())  

    } else if (src=='dataatrowprop_convert_to_fr'){
    
      hot.undoRedo.doneActions.pop();
    //  //////console.log(hot.undoRedo.doneActions)
      for (let index = 0; index<hot.undoRedo.doneActions.length; index++) {
          hot.undoRedo.doneActions[index].changes.forEach((x,y)=>{
            if( // editable index
            x[1] == 7 || x[1] == 8
            /*  x[1] == 2 || x[1] == 3 || x[1] == 4  || x[1] == 5  || x[1] == 6  ||
                x[1] == 7 || x[1] == 8 || x[1] == 10 || x[1] == 11 || x[1] == 12 || 
                x[1] == 13
            */
              ){
                if(x[2]!==null && x[2]!=='' && x[2]!==' '){
                   x[2]=x[2].toString().replace(/\./g, ',');
                }
                if(x[3]!==null && x[3]!=='' && x[3]!==' '){
                   x[3]=x[3].toString().replace(/\./g, ',');
                }
                  }
          })      
      }
      //hot.undoRedo.undoneActions=_.cloneDeep(hot_undone2.current)
      hot.undoRedo.undoneActions=_.cloneDeep(getInputValue_hot_undone2())

    }

    
    else if (src == 'dataatrowprop_convert_date'){
      hot.undoRedo.doneActions.pop();
      hot.undoRedo.undoneActions=_.cloneDeep(getInputValue_hot_undone2())
    }

    // place of else datepart
    
       // }
    }
      //)
    