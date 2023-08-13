import React, { useState } from 'react'
import 'handsontable/dist/handsontable.full.css'; // Import Handsontable CSS
import Handsontable from 'handsontable';
import { beforeKeyDownfct } from './Hothooks/beforeKeyDown';
import { afterChangeHandler } from './Hothooks/afterChangeHandler';
import Essaitest from './Hothooks/Essaitest';
import { useSelector, useDispatch } from 'react-redux'; 

import { ddatafct,data22fct } from './data.js';
import { Columns_data_for_Validator_renders } from './Hothooks/Columns_data_for_Validator_renders';
import { cellscells,normalcellloop } from './Tools/normalcellloop';
import { mergecellsarray,mycellmergedfct,getCellsBetweenRanges,myoldmergedcells_fct,hasCommonPair } from './Tools/mergecells';

import {afterValidatefct} from './Hothooks/afterValidatefct'
import { beforeChangeFct } from './Hothooks/beforeChange';

function Hottable() {
  
  const userLocale2_redux  = useSelector(state => state.userLocale2);
  const decimalSeparator2_redux  = useSelector(state => state.decimalSeparator2);
  const navigator_language2_redux  = useSelector(state => state.navigator_language2);

  const navigator_language2_avant_modify_redux  = useSelector(state => state.navigator_language2_avant_modify);
  //const condition_split2_redux  = useSelector(state => state.condition_split2);
  const ds_haschanged_redux  = useSelector(state => state.ds_haschanged);
  const use_english_date_by_user_himeself_in_modal_redux  = useSelector(state => state.use_english_date_by_user_himeself_in_modal);
  const use_english_date_by_user_himeself_in_modal_withoutfct_redux = useSelector(state => state.use_english_date_by_user_himeself_in_modal_withoutfct);
  const hot_undone2_redux  = useSelector(state => state.hot_undone2);

  const unmerged_cells_to_unmerge_redux  = useSelector(state => state.unmerged_cells_to_unmerge);


  const dispatch = useDispatch();

  var data = ddatafct();
  var data22 = data22fct()
  const array_of_notmerged_cells = [];

  const hotTableComponent = React.useRef(null);
  // const [hotInstance, setHotInstance] = useState(null);  WITHOUT REDUX
  
  React.useEffect(() => {
    const hot  = new Handsontable(hotTableComponent.current, {
      data,
      rowHeaders: true,
      wordWrap: true,
      colHeaders: true,
      comments: true,
      manualColumnResize: true,
      manualRowResize: true,
      colWidths: [50,200,100,120,120, 120,120,120,120,100,  120,120,120,120,100,    20 ], // editable of course
      undo: true,
      columns: Columns_data_for_Validator_renders(0,16, // editable of course
        userLocale2_redux,
        decimalSeparator2_redux,
        navigator_language2_redux,
      
        navigator_language2_avant_modify_redux,
        //condition_split2_redux,
        ds_haschanged_redux,
        use_english_date_by_user_himeself_in_modal_redux,
        use_english_date_by_user_himeself_in_modal_withoutfct_redux,
        hot_undone2_redux        
        ),

        contextMenu: {
          items:{
            "copy":{name:"Copier"},
            "cut":{name:'Couper'},
            "paste":{
              name: 'Coller (Utiliser <b>Ctrl + V</b> avec le clavier)',
              disabled:true
           }
          }
        },
        startRows: 6, //maybe editable , i see later what does it mean
        startCols: 5, //maybe editable , i see later what does it mean
        cells:(row,column) => {
          return cellscells(row,column);
        },
       
        mergeCells: mergecellsarray,
        
        beforeAutofill: (selectionData, sourceRange, targetRange, direction) => {
          var cellsToAutofill = getCellsBetweenRanges(sourceRange.from, targetRange.to);
          var myoldmergedcells = myoldmergedcells_fct();
          const commonPairExists = hasCommonPair(cellsToAutofill, myoldmergedcells);
      
          if (commonPairExists) {
            hot.updateSettings({mergeCells:mycellmergedfct(mergecellsarray)})
            /*
            const unmerged_cells_to_unmerge = cellsToAutofill.filter(newPair => {
              return !myoldmergedcells.some(oldPair => oldPair.row === newPair.row && oldPair.col === newPair.col);
            });
            console.log('unmerged in beforeautofill : ')
            console.log(unmerged_cells_to_unmerge)            
            array_of_notmerged_cells.push(unmerged_cells_to_unmerge)

            dispatch({ type: 'SET_UNMERGEDCELLS', payload: unmerged_cells_to_unmerge });  // WITH REDUX

            unmerged_cells_to_unmerge.map((x,index)=>{
              //hot.getPlugin('MergeCells').unmerge(6,4,7,4)
              hot.getPlugin('MergeCells').unmerge(x.row ,x.col,x.row,x.col)
           })
           */

            //hot.updateSettings({ mergeCells: mycellmergedfct(mergecellsarray) });
            //alert("Common pair exists in both ar rays.");
          } else {
            //alert("No common pair exists in both arrays.");
          }

      },
        
        
        cell: normalcellloop(),
        hiddenColumns: {columns:[15]},  // editable of course
        DragToScroll: true,
        copyPaste: true,

        afterValidate: (isValid, value, row, prop, source) => {
          afterValidatefct(isValid, value, row, prop, source, hot,userLocale2_redux,decimalSeparator2_redux,navigator_language2_redux,use_english_date_by_user_himeself_in_modal_withoutfct_redux);
        },

        beforeKeyDown: (event) => {
          beforeKeyDownfct(event,hot,
            userLocale2_redux,decimalSeparator2_redux,navigator_language2_redux
            //,condition_split2_redux
            );
        },
        afterCreateRow: function(index, amount) {
          data22.push(['','','','','','',''])
        },
        
       afterSelection: (r1, c1, r2, c2) => {
        var comment = hot.getCellMeta(r1, c1).comment;
        if (comment !== undefined) {
           var commentsPlugin = hot.getPlugin('comments');
          commentsPlugin.showAtCell(r1, c1);
          //return comment;
        } else {
           var commentsPlugin = hot.getPlugin('comments');
          commentsPlugin.hide();
        }
      },

    });

    hot.addHook('beforeChange', function(changes, source) {
      //const hotInstance = hot; // Store the hot instance
      //beforeChangeFct(changes,source, ...otherArgs, hotInstance)
    
      beforeChangeFct(changes,source,hot)
    });

      hot.addHook('afterChange', (changes, source) => {
        var array_of_notmerged_cells_2 = [].concat(...array_of_notmerged_cells)
        afterChangeHandler(changes, source, hot,data22,hot_undone2_redux,array_of_notmerged_cells_2); // Now hotInstance is available
      });
    
      //setHotInstance(hot);  WITHOUT REDUX
      dispatch({ type: 'SET_HOT', payload: hot });  // WITH REDUX

    return () => {
      console.log('unmount handsontable ')
      hot.destroy();
    };
  }, []);

  const [input1text1,setInputtext1] = useState('')

  const onchangeinputfct1 = (e) => {
    setInputtext1(e.target.value)
  }

  return (
    <>
    {/* <Essaitest/>  WITH REDUX : */}
    <div>
      <div ref={hotTableComponent} />
    </div>
    </>
  );
}

export default Hottable