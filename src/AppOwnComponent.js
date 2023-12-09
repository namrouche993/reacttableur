import React from 'react'
import './App.css';
import { useState,useEffect,useRef } from 'react';

import { useSelector } from 'react-redux';
import Handsontable from 'handsontable';

import LoadingComponent from './Tools/LoadingComponent';
import AppNotAuthorized401 from './AppNotAuthorized401';
import AppNotFoundComponent400 from './AppNotFoundComponent400';
import AppHotableFinal from './AppHotableFinal';
import App404server from './App404server';
import {useParams}  from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage';
import AppErrorRequestComponent from './AppErrorRequestComponent';



export default function AppOwnComponent() {

    const hotInstance_redux  = useSelector(state => state.hotInstance_redux);

    const userLocale2_redux  = useSelector(state => state.userLocale2);
    const decimalSeparator2_redux  = useSelector(state => state.decimalSeparator2);
    const navigator_language2_redux  = useSelector(state => state.navigator_language2);
  
    console.log('hotInstance_redux')
    console.log(hotInstance_redux);
    let ownRoute = useParams();

    const [displayHot,setDisplayHot]=useState(false);
    const [displayHot401,setDisplayHot401]=useState(false);
    const [displayeddelay, setDisplayeddelay] = useState(true);
    const [display404server,setDisplay404server]=useState(false);
    
    async function FetchAppOwnEnter(){
      try {
        console.log(ownRoute.ownroute)
       const response = await fetch('http://localhost:5000/tab/ownenter', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          },
          //body: JSON.stringify({"idusername":email,"dataa": [5,8,4,6] })//data_localstorage})
          body: JSON.stringify({
           //"act_data":hotInstance_existed,
           "ownroute":ownRoute.ownroute,
           
           "navigator_laguage_of_browser":navigator.language, //navigator_language2 in initials_inputs
           "userlocale_of_browser":Intl.DateTimeFormat().resolvedOptions().locale, //userLocale2 in initials_inputs
           "decimalseparator_of_browser":(1234567.73).toLocaleString(Intl.DateTimeFormat().resolvedOptions().locale, { style: 'decimal' }).substring(9, 10).toString(), //decimalSeparator2 in initials_inputs
           
           "navigator_laguage_updated":navigator_language2_redux,
           "userlocale_updated":userLocale2_redux,
           "decimalseparator_updated":decimalSeparator2_redux


        }) //data_localstorage})
        });
        console.log('response : ');
        console.log(response);
        
        if (response.ok) {
          console.log('response.ok true in ownenter request')
          //props.onClose();
          const values_ownroute = await response.json();
          console.log('values_ownroute :')
          console.log(values_ownroute.dataa[6])
          secureLocalStorage.setItem('data_localstorage_storage_2', JSON.stringify(values_ownroute.dataa));
          setDisplayHot(true);
          
          
          /*
          var getcellmeta_of_31 = hotInstance_redux.getCellMeta(3, 1); // editable index      
          getcellmeta_of_31.renderer= function(instance, td, row, col, prop, value, cellProperties) {
            Handsontable.renderers.TextRenderer.apply(this, arguments); // Use the TextRenderer for those cells
          };
          getcellmeta_of_31.validator=undefined;
          */


          //setTimeout(() => {
            //hotInstance_redux.setCellMeta(3,1,'readOnly',false);  // editable index        
            //hotInstance_redux.setDataAtCell(3,1,values_ownroute.organisme + ' | ' + values_ownroute.region,'changeorganismesrc') // editable index      
          //}, 5000);
        
          //window.location.href = value_ownroute.hisownroute;
          //alert('already entered')
          
          console.log('Data sent successfully to the server.!!!!!!!!!!!! ownenter !!!!!!!!!');
          
          //const datajj = await response.json();
          //localStorage.setItem('token', datajj.token);
          //return datajj.token; // Return the JWT token///
   
        } else if(response.status==401) {
          setDisplayHot401(true);
        } else {
  
          console.error('Error sending data to the server.');
        }
      } catch (error) {
        console.error('Error ownenter:', error);
        setDisplay404server(true)
      }
     }
  
     if(!displayeddelay && !displayHot){
      FetchAppOwnEnter();
     }
    
     // if(displayed==true){
    //   return <p>404 Error</p>
    // }
  
  
    useEffect(() => {
      const delay = 100; // 2 seconds delay
      const timeoutId = setTimeout(() => {
        setDisplayeddelay(false);
      }, delay);
  
      // Clear the timeout if the component is unmounted or if the delay changes
      return () => clearTimeout(timeoutId);
    }, []);
   
    return (  
      <div>
        {/* {displayHot ? <AppHotableFinal/> : displayHot401 ? <AppNotAuthorized401/> : displayeddelay ? <LoadingComponent/> : <NotFoundComponent400/> }      */}
        {display404server ? <App404server/> : displayHot ? <AppHotableFinal/> : displayHot401 ? <AppNotAuthorized401/> : displayeddelay ? <LoadingComponent/> : <AppNotFoundComponent400/> }     
      
      </div>
    )
  
  }