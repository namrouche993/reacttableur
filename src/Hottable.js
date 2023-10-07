import React, { useRef, useState,useEffect } from 'react'
import 'handsontable/dist/handsontable.full.css'; // Import Handsontable CSS
import Handsontable from 'handsontable';
import  secureLocalStorage  from  "react-secure-storage";

import { 
  last_row_after_header,
  getInputValue_hot_undone2,
  setInputValue_hot_undone2,

  getInputValue_spinnerf,
  setInputValue_spinnerf

} from './initials_inputs.js';

import { ddatafct,data22fct,data_localstorage,

  getLast_row_to_use_for_dropdown_issue,
  setLast_row_to_use_for_dropdown_issue,
} from './data.js';
import { cellscells,normalcellloop,cells_with_readonly } from './Tools/normalcellloop';

import { beforeKeyDownfct } from './Hothooks/beforeKeyDown';
import { afterChangeHandler } from './Hothooks/afterChangeHandler';
import Essaitest from './Hothooks/Essaitest';
import { useSelector, useDispatch } from 'react-redux'; 

import { Columns_data_for_Validator_renders } from './Hothooks/Columns_data_for_Validator_renders';
import { mergecellsarray,mycellmergedfct,getCellsBetweenRanges,myoldmergedcells_fct,hasCommonPair } from './Tools/mergecells';

import { afterValidatefct} from './Hothooks/afterValidatefct'
// import { beforeValidatefct } from './Hothooks/beforeValidate';

import { beforeChangeFct } from './Hothooks/beforeChange';


import { organisme_data, region_data } from './Navbar/ModalEdit';
import LoadingSpinner from './LoadingSpinner.js';
import { encryptOnServer,decryptOnServer } from './Tools/crypto.js';
import { generateRandomString } from './Tools/Randst.js';
// import { saveDataToServer } from './Tools/DataToFromServer.js';

import { fetchDataUsEffect1 } from './Tools/fetchDataUsEffect1.js';


function Hottable(props) {
  
  const userLocale2_redux  = useSelector(state => state.userLocale2);
  const userLocale2_ref = useRef(userLocale2_redux);
 
  const decimalSeparator2_redux  = useSelector(state => state.decimalSeparator2);
  const decimalSeparator2_ref = useRef(decimalSeparator2_redux);
  

  const navigator_language2_redux  = useSelector(state => state.navigator_language2);
  const navigator_language2_ref = useRef(navigator_language2_redux);
  

  const navigator_language2_avant_modify_redux  = useSelector(state => state.navigator_language2_avant_modify);
  const navigator_language2_avant_modify_ref = useRef(navigator_language2_avant_modify_redux);
  
  
  //const condition_split2_redux  = useSelector(state => state.condition_split2);
  const ds_haschanged_redux  = useSelector(state => state.ds_haschanged);
  const ds_haschanged_ref = useRef(ds_haschanged_redux);
  

  const use_english_date_by_user_himeself_in_modal_redux  = useSelector(state => state.use_english_date_by_user_himeself_in_modal);
  const use_english_date_by_user_himeself_in_modal_ref = useRef(use_english_date_by_user_himeself_in_modal_redux);
  

  const use_english_date_by_user_himeself_in_modal_withoutfct_redux = useSelector(state => state.use_english_date_by_user_himeself_in_modal_withoutfct);
  const use_english_date_by_user_himeself_in_modal_withoutfct_ref = useRef(use_english_date_by_user_himeself_in_modal_withoutfct_redux);
  

  
  // const hot_undone2_redux  = useSelector(state => state.hot_undone2);
  // const hot_undone2_ref = useRef(hot_undone2_redux);

  
  const unmerged_cells_to_unmerge_redux  = useSelector(state => state.unmerged_cells_to_unmerge);
  const unmerged_cells_to_unmerge_ref = useRef(unmerged_cells_to_unmerge_redux);
  

  const hotInstance_redux  = useSelector(state => state.hotInstance_redux);
  const data22 = useSelector(state => state.data22);  //data22_redux

  const [savedData,setSavedData]=useState(data_localstorage);
  const [csrftoken,setCSRFToken]=useState('');

  const dispatch = useDispatch();
  let changeTimer;

  var data = savedData //data_localstorage //savedData // data_localstorage //JSON.parse(data_localstorage) //ddatafct(last_row_after_header);
  
  const array_of_notmerged_cells = [];

  const hotTableComponent = React.useRef(null);
  // const [hotInstance, setHotInstance] = useState(null);  WITHOUT REDUX
  //const [skipAfterValidate,setSkipAfterValidate]=useState(false)

  const [isLoading, setIsLoading] = useState(false);

  // Function to show the spinner
  const showSpinner = () => {
    setIsLoading(true);
  };

  // Function to hide the spinner
  const hideSpinner = () => {
    setIsLoading(false);
  };

  const [readonlyhot,setReadonlyhot] = useState(false);
  
  const [numbval,setNumbval]=useState('aa') //useState(secureLocalStorage.getItem("numb"))
  const [idusername00,setIdusername00]=useState(secureLocalStorage.getItem('ussd74kasd75_2'));
  
  
  React.useEffect(() => {
  //alert('read_only would be : ' + props.read_only)
    if(secureLocalStorage.getItem('ussd74kasd75_2')!==null){ 
      // after the first time the user open the webpage : 
      // until now do nothing , maybe editable

    } else {
      // the first time the user open the webpage : 
      
      //var randstr=generateRandomString(14);

      //secureLocalStorage.setItem("ussd74kasd75_2", randstr);
      //setIdusername00(randstr)
      // sending data as post request in the server :


      //fetchDataUsEffect1(randstr,ddatafct(last_row_after_header)); // post to /api/login
      
    }


    //alert('userlocal2_redix just before setting hot = newhandsontable will be : '  + userLocale2_redux + ' and decimalSeparator2_redux : ' + decimalSeparator2_redux)
    //var data22 = data22fct(last_row_after_header)

    //fetchDataFromServer();

    const hot  = new Handsontable(hotTableComponent.current, {
      data,
      readOnly: readonlyhot,
      rowHeaders: true,
      wordWrap: true,
      colHeaders: true,
      comments: true,
      manualColumnResize: true,
      manualRowResize: true,
      persistentState: true,
      colWidths: [50,200,100,120,120, 120,120,120,120,100,  120,120,120,120,100,    20 ], // editable of course
      undo: true,
      //maxRows: data.length, // editable if we set it maxRows:data.length (that means we don't want to add new rows)
      columns: Columns_data_for_Validator_renders(0,16, // editable of course
        userLocale2_ref, //userLocale2_ref.current,
        decimalSeparator2_ref, //decimalSeparator2_ref.current,
        navigator_language2_ref,
      
        navigator_language2_avant_modify_ref,
        //condition_split2_redux,
        ds_haschanged_ref,
        use_english_date_by_user_himeself_in_modal_ref,
        use_english_date_by_user_himeself_in_modal_withoutfct_ref,
        getInputValue_hot_undone2(),

        data22 //data22_redux
        //,data22
        
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
          //console.log('hot in beforeautofill : ')
          //console.log(hot)
          var cells_with_readonly0 = cells_with_readonly(hot)
          //console.log(cells_with_readonly0)

          //const commonPairExists = hasCommonPair(cellsToAutofill, myoldmergedcells);
          const commonPairExists = hasCommonPair(cellsToAutofill, cells_with_readonly0);

          if (commonPairExists) {
            //alert('yes inside')
            hot.updateSettings({mergeCells:mycellmergedfct(mergecellsarray)})
          } else {
            ////alert("No common pair exists in both arrays.");
          }

      },
        
        
        cell: normalcellloop(),
        hiddenColumns: {columns:[15]},  // editable of course
        DragToScroll: true,
        copyPaste: true,

        afterValidate: (isValid, value, row, prop, source) => {
          if(prop==2 && value==null & isValid==true){ // editable index , 2 means dropdown 
          setTimeout(() => {
            if(!isLoading){
              hideSpinner()
            }
          }, 1000);
        }
          afterValidatefct(isValid, value, row, prop, source, hot,userLocale2_ref,decimalSeparator2_ref,navigator_language2_ref,use_english_date_by_user_himeself_in_modal_ref,commentsPlugin,isLoading);
        },
        beforeKeyDown: (event) => {

          beforeKeyDownfct(event,hot,
            userLocale2_ref,decimalSeparator2_ref,navigator_language2_ref,commentsPlugin
            //,condition_split2_redux
            );
        },
        beforeCreateRow: function(index,amout,source) {
          //console.log('beforeCreateRow HOOOK')

          data22[data22.length]= ['','','','','','','','','','','','','','','','','',   ''] // editable the nb 
          dispatch({ type: 'SET_DATA22', payload: data22 });  // WITH REDUX
          console.log(' data 22 beforeCreateRow')
          console.log(data22)
        },

      
        
       afterSelection: (r1, c1, r2, c2) => {
        if(r1>0 & c1>0 & r2>0 & c2>0){
        var comment = hot.getCellMeta(r1, c1).comment;
        if (comment !== undefined) {
           var commentsPlugin = hot.getPlugin('comments');
          commentsPlugin.showAtCell(r1, c1);
          //return comment;
        } else {
           var commentsPlugin = hot.getPlugin('comments');
          commentsPlugin.hide();
        }
      }
    },


    
  });

    hot.addHook('beforeChange', function(changes, source) {
      //const hotInstance = hot; // Store the hot instance
      //beforeChangeFct(changes,source, ...otherArgs, hotInstance)
      //console.log('beforeChange triggered')
      
      //if( (source=='CopyPaste.paste' && changes.length>30) || (source=='edit' && changes.length>30) || (source=='Autofill.fill' && changes.length>30) || (source=='UndoRedo.redo' && changes.length>30) ){
     if (changes.length>30){
        //console.log('show showspinner : ')
        //console.log(source)
        //console.log(changes)
        showSpinner();
        //setInputValue_spinnerf(true);
      }
      beforeChangeFct(changes,source,hot,commentsPlugin)

    });

      hot.addHook('afterChange', (changes, source) => {
        console.log('afterChange : ')

        var array_of_notmerged_cells_2 = [].concat(...array_of_notmerged_cells)
        afterChangeHandler(changes, source, hot,data22,array_of_notmerged_cells_2,commentsPlugin); // Now hotInstance is available

        if (changeTimer) {
          clearTimeout(changeTimer);
        }
    
        // Set a new timer to trigger something after 1 second
        changeTimer = setTimeout(function () {
          // Perform the action you want to trigger here
          var my_actual_getdata = JSON.stringify(hot.getData());
//          dispatch({ type: 'SET_DATA22', payload: data22 });  // WITH REDUX
          
          dispatch({ type: 'SET_DATA22', payload: data22 });  // WITH REDUX
                   


          secureLocalStorage.setItem("data_localstorage_storage_2", my_actual_getdata);

          //saveDataToServer(JSON.parse(my_actual_getdata)); // editable when we want to synchronise the data for each change

          if(!isLoading){
            hideSpinner()
          }
          //alert('Triggered after the last afterChange event within 1 second.');
        }, 1000);
        
        //dispatch({ type: 'SET_DATA22', payload: data22 });  // WITH REDUX

      });
    
      //setHotInstance(hot);  WITHOUT REDUX
      dispatch({ type: 'SET_HOT', payload: hot });  // WITH REDUX
      
      const commentsPlugin = hot.getPlugin('comments');


      if(
        secureLocalStorage.getItem('organismechosen') !== null &&
        secureLocalStorage.getItem('region_storage') !== null &&
        secureLocalStorage.getItem('email_chosen') !== null &&
        secureLocalStorage.getItem('phone_chosen') !== null
        //localStorage.length>0
        ){
            const stored_organisme = secureLocalStorage.getItem('organismechosen');
            const stored_region = secureLocalStorage.getItem('region_storage');
            const stored_email = secureLocalStorage.getItem('email_chosen');
            const stored_phonenumber = secureLocalStorage.getItem('phone_chosen');

            var getcellmeta_of_31_0 = hot.getCellMeta(3, 1); // editable index
            getcellmeta_of_31_0.renderer= function(instance, td, row, col, prop, value, cellProperties) {
               Handsontable.renderers.TextRenderer.apply(this, arguments); // Use the TextRenderer for those cells
            };
            getcellmeta_of_31_0.validator=undefined;
            hot.setCellMeta(3,1,'readOnly',false);  // editable index

            var organismechosen = organisme_data.find(item => item.val === stored_organisme).label;
            var regionchosen = region_data.find(item => item.matriculeregion === stored_region).region;
    
            hot.setDataAtCell(3,1,organismechosen + ' | ' + regionchosen,'changeorganismesrc') // editable index
          }


          const handleVisibilityChange = () => {
            console.log('we call handleVisibilityChange')
            console.log(document.visibilityState);

            if (document.visibilityState === 'hidden') {
              console.log('handleVisibilityChange and document.vibisiltystate == hidden ')
              // Page is being hidden, send the data to the server
              //const mydata_whenclosed = hot.getData(); // Obtain the data from Handsontable
              const jsonData_whenclosed = JSON.stringify(hot.getData());
              //const jsonData_whenclosed = mydata_whenclosed;
              //console.log(jsonData_whenclosed)
              //const serverUrl = 'http://localhost:5000/beacondata';;
              //const idusername = secureLocalStorage.getItem('ussd74kasd75_2');
              // Send the data to the server using sendBeacon

              //idusername00 is from usestate 
              //const requestData = JSON.stringify({ jsonData_whenclosed, idusername00 });
              const blobData = new Blob([JSON.stringify({ jsonData_whenclosed, idusername00 })], { type: 'application/json' });
              
              navigator.sendBeacon('http://localhost:5000/beacondata',blobData);
            }
          };
      
          document.addEventListener('visibilitychange', handleVisibilityChange);
        
      
    return () => {
      //alert('unmout return() ')   
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      hot.destroy();
      //window.removeEventListener('beforeunload', handlebeforeunloadfct(hot));

    };
  }, []);


  
  useEffect(() => {
    //alert('use effect of hottable i think will be here (userlocale2_redux) - userLocale2_redux: ' +  userLocale2_redux )
    userLocale2_ref.current = userLocale2_redux; // Update the ref whenever value11 changes
  }, [userLocale2_redux]);

  useEffect(() => {
    //alert('use effect of hottable i think will be here (decimalSeparator2_redux) - decimalSeparator2_redux: ' +  decimalSeparator2_redux )
    decimalSeparator2_ref.current = decimalSeparator2_redux; // Update the ref whenever value11 changes
  }, [decimalSeparator2_redux]);
  
  useEffect(() => {
    navigator_language2_ref.current = navigator_language2_redux; // Update the ref whenever value11 changes
  }, [navigator_language2_redux]);
  
  useEffect(() => {
    navigator_language2_avant_modify_ref.current = navigator_language2_avant_modify_redux; // Update the ref whenever value11 changes
  }, [navigator_language2_avant_modify_redux]);
  
  useEffect(() => {
    ds_haschanged_ref.current = ds_haschanged_redux; // Update the ref whenever value11 changes
  }, [ds_haschanged_redux]);
  
  useEffect(() => {
    use_english_date_by_user_himeself_in_modal_ref.current = use_english_date_by_user_himeself_in_modal_redux; // Update the ref whenever value11 changes
    //alert('use_english_date_by_user_himeself_in_modal_redux is triggered : ' + use_english_date_by_user_himeself_in_modal_redux )
  }, [use_english_date_by_user_himeself_in_modal_redux]);
  
  useEffect(() => {
    use_english_date_by_user_himeself_in_modal_withoutfct_ref.current = use_english_date_by_user_himeself_in_modal_withoutfct_redux; // Update the ref whenever value11 changes
  //alert('use_english_date_by_user_himeself_in_modal_withoutfct_redux is triggered')
  }, [use_english_date_by_user_himeself_in_modal_withoutfct_redux]);
  
  // useEffect(() => {
  //   hot_undone2_ref.current = hot_undone2_redux; // Update the ref whenever value11 changes
  // }, [hot_undone2_redux]);
  
  useEffect(() => {
    unmerged_cells_to_unmerge_ref.current = unmerged_cells_to_unmerge_redux; // Update the ref whenever value11 changes
  }, [unmerged_cells_to_unmerge_redux]);
  
  useEffect(() => {
    console.log('we are inside if useEffect getInputValue_spinnerf ')
    setIsLoading(getInputValue_spinnerf()); // Update the ref whenever value11 changes
  }, [getInputValue_spinnerf()]);
  



  return (
    <>
    {/* <Essaitest/>  WITH REDUX : */}
    <div>
      {/* <button onClick={showSpinner}>Show Spinner</button>
      <button onClick={hideSpinner}>Hide Spinner</button> */}
      <LoadingSpinner open={isLoading} />
      <div ref={hotTableComponent} />
    </div>
    </>
  );
}

export default Hottable