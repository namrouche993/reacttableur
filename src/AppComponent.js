import React from 'react'
import './App.css';
import Navbar from './Navbar/Navbar';
import Hottable from './Hottable';
import { useState,useEffect,useRef } from 'react';
import { useSelector } from 'react-redux';
import  secureLocalStorage  from  "react-secure-storage";
import HotEmpty from './Tools/HotEmpty';
import AppErrorRequestComponent from './AppErrorRequestComponent';

export default function AppComponent() {
    const hotInstance_redux  = useSelector(state => state.hotInstance_redux);
    const hotInstance_existed = hotInstance_redux!==undefined && hotInstance_redux!==null ? hotInstance_redux.getData() : [] ;
    const [alreadylogin,setAlreadylogin]=useState(false);
    const alreadylogin_ref = useRef(false);

    const [displayed, setDisplayed] = useState(false);
    const value_to_use_in_error = useRef(true);
    const [errorComponent,setErrorComponent]=useState(false);
  
  
    useEffect(() => {
  
      async function FetchAppEnter(){
       try {
        const response = await fetch('http://localhost:5000/tab/enter', {
           method: 'POST',
           credentials: 'include',
           headers: {
             'Content-Type': 'application/json'
           },
           body: JSON.stringify({
            "idusername":secureLocalStorage.getItem('ussd74kasd75_2')
          })
         });
         console.log('response of fetchAppenter in frontend :')
         console.log(response)
         if (response.ok) {
          console.log('try to knwo how many times it renders !!! ');
           //props.onClose();
           setAlreadylogin(false);
           const value_ownroute = await response.json();
  
           window.location.href = value_ownroute.hisownroute;
  
           console.log('Data sent successfully to the server.');
    
         } else {
            setAlreadylogin(true);
            console.error('Error sending data to the server.');
         }
       } catch (error) {
         console.error('Error:', error);
         //alert('we are in error')
         value_to_use_in_error.current=false;
       }
      }

      const delay = 3000; // 2 seconds delay!!
      const timeoutId = setTimeout(() => {
        //alert('value_to_use_in_error is ' + value_to_use_in_error.current)
        if(value_to_use_in_error.current){
          setDisplayed(true);
        } else {
          setErrorComponent(true);
        }
      }, delay);
  
  
      if(secureLocalStorage.getItem('hisownroute')!==undefined && secureLocalStorage.getItem('hisownroute')!==null ){
        console.log(secureLocalStorage.getItem('hisownroute'));

        window.location.href = secureLocalStorage.getItem('hisownroute');
      } else {
        FetchAppEnter();
      }
      
      return () => clearTimeout(timeoutId);

    }, [])
    
    
  
    return (
    <>
         {errorComponent ? <p>.</p> : 
         <div>
               <Navbar display_modaledit={alreadylogin} displayed_pr={displayed} />
            <br></br>
         </div>
         }

         <div style={{marginTop:43}}>
            {errorComponent? <AppErrorRequestComponent/> : alreadylogin ? <HotEmpty/> : displayed ? <Hottable/> : <HotEmpty/> }
         </div>
  
      </>

    );
  }
  