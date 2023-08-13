    import _ from 'lodash';
    import { mergecellsarray,mycellmergedfct } from '../Tools/mergecells';

    let lastelement_supthan1=0;    
    export function afterChangeHandler(changes,src,hot,data22,hot_undone2,array_of_notmerged_cells_2){
        //const hot = otherArgs[otherArgs.length - 1];
        console.log('AFTER CHANGE ::::::::::::::::::')
        console.log(src)    
        if(hot.undoRedo.isUndoAvailable()){
           hot.undoRedo.doneActions[hot.undoRedo.doneActions.length-1].src=src;
         }
     if(src=='Autofill.fill' && changes.length>1){
      console.log('we will use hotupdatesetting : ')
      console.log('afterchange src autofill && changes.length sup 1 : ')
      console.log(changes)

      //hot.getPlugin('MergeCells').unmerge(6,4,7,4)
/*
      console.log(array_of_notmerged_cells_2)

      let minRow = Infinity;
      let maxRow = -Infinity;
      let minCol = Infinity;
      let maxCol = -Infinity;

for (const cell of array_of_notmerged_cells_2) {
  minRow = Math.min(minRow, cell.row);
  maxRow = Math.max(maxRow, cell.row);
  minCol = Math.min(minCol, cell.col);
  maxCol = Math.max(maxCol, cell.col);
}
console.log('unmerge plugin : ')
console.log(hot.getPlugin('MergeCells'))
hot.getPlugin('MergeCells').unmerge(minRow ,minCol,maxRow,maxCol)
*/

      lastelement_supthan1=hot.undoRedo.doneActions.length
     } else if (src=='edit' && changes.length>1 && changes.every(row => row[3] === null) ){
      //console.log('we are incase afterchange where src==edit and changes.length>1')
      //alert('edit and changes>1')
      lastelement_supthan1=hot.undoRedo.doneActions.length
     }
    
    
     if(src=='my_source' || src=='my_source_removewhitespacesign' || src=='my_source_removewhitespacesign_percentage' || src=='my_source_removegreaterdecimalnumbers_percentage' || src=='my_source_convertitto_0' || src=='my_source_removewhitespacesign_date' || src=='my_source_date'){
      var shouldBreak = false;
      //console.log('before entering loop , lastelement_supthan1 is : ' + lastelement_supthan1)
      for (let index = hot.undoRedo.doneActions.length-1; index >lastelement_supthan1 && !shouldBreak; index--) {
        const element = hot.undoRedo.doneActions[index].changes.length;
        //console.log('****** WE ARE INSIDE LOOP UNTIL lastelement_supthan1 ****** index :' + index + ' *** and element : ' + element)
        if(element>1){
          //console.log('we enter element>1 condition')
          hot.undoRedo.doneActions[index].changes.forEach((x,y)=>{
            //console.log('we are inside foreach in renderer')
                  if (x[0] == changes[0][0] && x[1] == changes[0][1]) {
                  //console.log('we are inside condition renderer')
                  x[3] = changes[0][3]
                  lastelement_supthan1=index;
                  //console.log('lastelement_supthan1 is ' + lastelement_supthan1)
                  hot.undoRedo.doneActions.pop()
                  shouldBreak = true;
                  return;
    
              }
          })
        }
        //console.log(element)
      }
    }
    //console.log('shouldbreak is : ' + shouldBreak )
    //console.log(shouldBreak==false)
    ////console.log('index after the end of loop part : ' + typeof index==undefined ? 'a' : index)
        if ( (src == 'my_source' || src=='my_source_removewhitespacesign' || src=='my_source_removewhitespacesign_percentage' || src=='my_source_removegreaterdecimalnumbers_percentage' || src=='my_source_convertitto_0' || src=='my_source_removewhitespacesign_date' || src=='my_source_date') && !shouldBreak) {
          //console.log('afterchange mysource62 and we will pop it')
          hot.undoRedo.doneActions[hot.undoRedo.doneActions.length - 2].changes.forEach((x, y) => {
                    //console.log('we are inside foreach in renderer')
                     if (x[0] == changes[0][0] && x[1] == changes[0][1]) {
                    //console.log('we are inside condition renderer')
                    x[3] = changes[0][3]
                    lastelement_supthan1=hot.undoRedo.doneActions.length-2
                    hot.undoRedo.doneActions.pop()
                    shouldBreak=true;
                  }
                  })
        }
        if( (src == 'my_source_empty' && changes[0][2]!='')  || (src=='my_source_empty_percentage' && changes[0][2]!='' ) || (src=='my_source_empty_date' && changes[0][2]!='' ) || (src=='my_source_empty_dropdown' && changes[0][2]!=' ' ) || (src=='my_source_empty_email' && changes[0][2]!='' ) || (src=='my_source_empty_phonenumbers' && changes[0][2]!='' ) || (src=='my_source_empty_onlynumbers' && changes[0][2]!='' ) ){
          //console.log('when src == my_source_empty and changes[0][2]!= "" ')
          //hot.undoRedo.doneActions[hot.undoRedo.doneActions.length - 2].changes[0][3]=''
          hot.undoRedo.doneActions[hot.undoRedo.doneActions.length - 2].changes.forEach((x, y) => {
                    //console.log('3-we are inside foreach in renderer')
                     if (x[0] == changes[0][0] && x[1] == changes[0][1]) {
                    //console.log('3-we are inside condition renderer')
                    x[3] = ''
                    hot.undoRedo.doneActions.pop()
                    //shouldBreak=true;
                  }
                  })
    
        }
        if(src!=='loadData'){
        changes.forEach((x,y)=>{
          //console.log(y)
          var cellgetcell = hot.getCell(x[0],x[1]);
          //console.log(cellgetcell.innerHTML) 
          if(cellgetcell.childNodes[cellgetcell.children.length]!==undefined){
            data22[x[0]][x[1]]=cellgetcell.childNodes[cellgetcell.children.length].textContent.trim()
          } else {
            data22[x[0]][x[1]]=''
          }
        })
        //console.log(' ----------------------------- ---------------------------- ------')
      }
      if(src=='dataatrowprop_convert_to_en'){
        
        hot.undoRedo.doneActions.pop();
        //console.log(hot.undoRedo.doneActions)
        for (let index = 0; index<hot.undoRedo.doneActions.length; index++) {
          //console.log('we are inside index dataatrowprop_convert_to_en')
          //console.log(index)
            hot.undoRedo.doneActions[index].changes.forEach((x,y)=>{
              if( // editable
                x[1] == 2 || x[1] == 3 || x[1] == 4  || x[1] == 5  || x[1] == 6  ||
                x[1] == 7 || x[1] == 8 || x[1] == 10 || x[1] == 11 || x[1] == 12 || 
                x[1] == 13
                ){
                  x[2]=x[2].replace(/,/g, '.');
                  x[3]=x[3].replace(/,/g, '.');
                    }
            })      
        }
        hot.undoRedo.undoneActions=_.cloneDeep(hot_undone2)  
    } else if (src=='dataatrowprop_convert_to_fr'){
    
      hot.undoRedo.doneActions.pop();
    //  //console.log(hot.undoRedo.doneActions)
      for (let index = 0; index<hot.undoRedo.doneActions.length; index++) {
          hot.undoRedo.doneActions[index].changes.forEach((x,y)=>{
            if( // editable
              x[1] == 2 || x[1] == 3 || x[1] == 4  || x[1] == 5  || x[1] == 6  ||
              x[1] == 7 || x[1] == 8 || x[1] == 10 || x[1] == 11 || x[1] == 12 || 
              x[1] == 13
              ){
                x[2]=x[2].replace(/\./g, ',');
                x[3]=x[3].replace(/\./g, ',');
                  }
          })      
      }
      hot.undoRedo.undoneActions=_.cloneDeep(hot_undone2)
      
    } 
    // place of else datepart
    
    
    
    
    }
      //)
    