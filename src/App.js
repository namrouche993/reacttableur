import './App.css';
import Navbar from './Navbar/Navbar';
import Hottable from './Hottable';
import { useState,useEffect,useRef } from 'react';
import { last_row_after_header } from './initials_inputs.js';
import { useSelector } from 'react-redux';
import  secureLocalStorage  from  "react-secure-storage";
import HotEmpty from './Tools/HotEmpty';
import { BrowserRouter, Routes, Route,useParams } from "react-router-dom";
import Handsontable from 'handsontable';

import LoadingComponent from './Tools/LoadingComponent';
import NotAuthorized401 from './NotAuthorized401';
import NotFoundComponent400 from './NotFoundComponent400';


function AppComponent() {
  const hotInstance_redux  = useSelector(state => state.hotInstance_redux);
  const hotInstance_existed = hotInstance_redux!==undefined && hotInstance_redux!==null ? hotInstance_redux.getData() : [] ;
  const [alreadylogin,setAlreadylogin]=useState(false);
  const alreadylogin_ref = useRef(false);
  


  useEffect(() => {
    //console.log('hotinstance_redux :');
    //console.log(hotInstance_redux);
    //console.log(hotInstance_existed);

    async function FetchAppEnter(){
     try {
      const response = await fetch('http://localhost:5000/api/enter', {
         method: 'POST',
         credentials: 'include',
         headers: {
           'Content-Type': 'application/json'
         },
         //body: JSON.stringify({"idusername":email,"dataa": [5,8,4,6] })//data_localstorage})
         body: JSON.stringify({
          //"act_data":hotInstance_existed,
          "idusername":secureLocalStorage.getItem('ussd74kasd75_2')
          //,"data_now":secureLocalStorage.getItem('data_localstorage_storage_2')        
        })//data_localstorage})
       });
       //console.log('response : ');
       //console.log(response);
       
       if (response.ok) {
        console.log('try to knwo how many times it renders !!! ');
         //props.onClose();
         setAlreadylogin(false);
         const value_ownroute = await response.json();
         console.log('value_ownroute :')
         console.log(value_ownroute)

         window.location.href = value_ownroute.hisownroute;
         //alert('already entered')
         console.log('Data sent successfully to the server.');
         //const datajj = await response.json();
         //localStorage.setItem('token', datajj.token);
         //return datajj.token; // Return the JWT token
  
       } else {
          setAlreadylogin(true);
          console.error('Error sending data to the server.');
       }
     } catch (error) {
       console.error('Error:', error);
     }
    }

    // console.log(secureLocalStorage.getItem('ussd74kasd75_2'))
    // console.log(secureLocalStorage.getItem('hisownroute'))

    if(secureLocalStorage.getItem('hisownroute')!==undefined && secureLocalStorage.getItem('hisownroute')!==null ){
      console.log(secureLocalStorage.getItem('hisownroute'));
      //alert('we are hisownroute securelocalstorage exist :')
      window.location.href = secureLocalStorage.getItem('hisownroute');
    } else {
      FetchAppEnter();
    }
  
  }, [])
  
  
  const [displayed, setDisplayed] = useState(false);

  useEffect(() => {
    const delay = 100; // 2 seconds delay
    const timeoutId = setTimeout(() => {
      setDisplayed(true);
    }, delay);

    // Clear the timeout if the component is unmounted or if the delay changes
    return () => clearTimeout(timeoutId);
  }, []);


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





function OwnAppComponent(){

  const hotInstance_redux  = useSelector(state => state.hotInstance_redux);
  console.log('hotInstance_redux')
  console.log(hotInstance_redux);
  let ownRoute = useParams();
  console.log(ownRoute.ownroute)
  const [displayHot,setDisplayHot]=useState(false);
  const [displayHot401,setDisplayHot401]=useState(false);

  
  async function FetchAppOwnEnter(){
    try {
     const response = await fetch('http://localhost:5000/api/ownenter', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        //body: JSON.stringify({"idusername":email,"dataa": [5,8,4,6] })//data_localstorage})
        body: JSON.stringify({
         //"act_data":hotInstance_existed,
         "ownroute":ownRoute.ownroute
       }) //data_localstorage})
      });
      console.log('response : ');
      console.log(response);
      
      if (response.ok) {
        setDisplayHot(true);
        console.log('response.ok true in ownenter request')
        //props.onClose();
        const values_ownroute = await response.json();
        console.log('values_ownroute :')
        console.log(values_ownroute)

        var getcellmeta_of_31 = hotInstance_redux.getCellMeta(3, 1); // editable index      
        getcellmeta_of_31.renderer= function(instance, td, row, col, prop, value, cellProperties) {
          Handsontable.renderers.TextRenderer.apply(this, arguments); // Use the TextRenderer for those cells
        };
        getcellmeta_of_31.validator=undefined;
        //setTimeout(() => {
          //hotInstance_redux.setCellMeta(3,1,'readOnly',false);  // editable index        
          //hotInstance_redux.setDataAtCell(3,1,values_ownroute.organisme + ' | ' + values_ownroute.region,'changeorganismesrc') // editable index      
        //}, 5000);
      
        //window.location.href = value_ownroute.hisownroute;
        //alert('already entered')
        
        console.log('Data sent successfully to the server.');
        
        //const datajj = await response.json();
        //localStorage.setItem('token', datajj.token);
        //return datajj.token; // Return the JWT token///
 
      } else if(response.status==401) {
        setDisplayHot401(true);
      } else {

        console.error('Error sending data to the server.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
   }

   FetchAppOwnEnter();
  // if(displayed==true){
  //   return <p>404 Error</p>
  // }

  const [displayeddelay, setDisplayeddelay] = useState(true);

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
      {/* {displayHot ? <AppHotableFinal/> : displayHot401 ? <NotAuthorized401/> : displayeddelay ? <LoadingComponent/> : <NotFoundComponent400/> }      */}
      {displayHot ? <AppHotableFinal/> : displayHot401 ? <NotAuthorized401/> : displayeddelay ? <LoadingComponent/> : <NotFoundComponent400/> }     
    
    </div>
  )

}


const AppHotableFinal = () => {
  return (
    <div>
     <Navbar display_modaledit={false} displayed_pr={false} />
     <br></br>
     <div style={{marginTop:43}}>
       <Hottable/>
      </div>
  </div>
  )
}

const App = () => {
  return (
    <>
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<AppComponent/>}>        </Route>
          <Route path="/tab/:ownroute" element={<OwnAppComponent/>}>        </Route>
          <Route path="*" element={<NotFoundComponent400/>}>        </Route>
          
       </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
