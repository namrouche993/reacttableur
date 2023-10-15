import React from 'react'
import './App.css';
import Navbar from './Navbar/Navbar';
import Hottable from './Hottable';
import { useState,useEffect,useRef } from 'react';
import { useSelector } from 'react-redux';
import  secureLocalStorage  from  "react-secure-storage";
import HotEmpty from './Tools/HotEmpty';

export default function AppComponent() {
    const hotInstance_redux  = useSelector(state => state.hotInstance_redux);
    const hotInstance_existed = hotInstance_redux!==undefined && hotInstance_redux!==null ? hotInstance_redux.getData() : [] ;
    const [alreadylogin,setAlreadylogin]=useState(false);
    const alreadylogin_ref = useRef(false);

    const [displayed, setDisplayed] = useState(false);
  
  
  
    useEffect(() => {
  
      async function FetchAppEnter(){
       try {
        const response = await fetch('http://localhost:5000/api/enter', {
           method: 'POST',
           credentials: 'include',
           headers: {
             'Content-Type': 'application/json'
           },
           body: JSON.stringify({
            "idusername":secureLocalStorage.getItem('ussd74kasd75_2')
          })
         });
         
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
       }
      }

      const delay = 100; // 2 seconds delay
      const timeoutId = setTimeout(() => {
        setDisplayed(true);
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
         <Navbar display_modaledit={alreadylogin} displayed_pr={displayed} />
         <br></br>
         <div style={{marginTop:43}}>
            {alreadylogin ? <HotEmpty/> : displayed ? <Hottable/> : <HotEmpty/> }
         </div>
  
      </>
    );
  }
  