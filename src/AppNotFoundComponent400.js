import React, { useState,useEffect } from 'react'
import LoadingComponent from './Tools/LoadingComponent';
import ModalConfirmNewTable from './Navbar/ModalConfirmNewTable';
import  secureLocalStorage  from  "react-secure-storage";
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export default function AppNotFoundComponent400() {
  const [displayeddelay,setDisplayeddelay]=useState(true);
  useEffect(() => {
    const delay = 100; // 2 seconds delay
    const timeoutId = setTimeout(() => {
      setDisplayeddelay(false);
    }, delay);
  });


  const navigate = useNavigate();

  const [open_confirmmodal,setOpen_confirmmodal]=useState(false);

  const handleOpen_confirmmodal = ()=>{
    setOpen_confirmmodal(true);
  }

  const handleConfirm_confirmmodal = async () =>{
    secureLocalStorage.removeItem("ussd74kasd75_2");
    secureLocalStorage.removeItem("email_chosen");
    secureLocalStorage.removeItem("email_chosen_to_display");
    secureLocalStorage.removeItem("phone_chosen");
    secureLocalStorage.removeItem("organismechosen");
    secureLocalStorage.removeItem("region_storage");
    secureLocalStorage.removeItem("data_localstorage_storage_2");
    secureLocalStorage.removeItem("hisownroute");
    secureLocalStorage.removeItem("role_storage");


    try {
      // Make a request to the server to clear the cookie
      const response = await fetch('http://localhost:5000/clearcookie', {
        method: 'POST',
        credentials: 'include', // Include credentials (cookies) in the request
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log('response in clearCookie :')
      console.log(response)

      if (response.ok) {
        console.log('Cookie cleared successfully');
        secureLocalStorage.removeItem("ussd74kasd75_2");
        secureLocalStorage.removeItem("email_chosen");
        secureLocalStorage.removeItem("email_chosen_to_display");
        secureLocalStorage.removeItem("phone_chosen");
        secureLocalStorage.removeItem("organismechosen");
        secureLocalStorage.removeItem("region_storage");
        secureLocalStorage.removeItem("data_localstorage_storage_2");
        secureLocalStorage.removeItem("hisownroute");
        secureLocalStorage.removeItem("role_storage");

        navigate('/');
        window.location.reload()
        setOpen_confirmmodal(false);
        // history.push('/');
        //window.location.reload()
    
      } else {
        console.error('Failed to clear cookie');
      }
    } catch (error) {
      console.error('Error while clearing cookie:', error);
    }
  }


    return (
      <div>
          {displayeddelay ? <LoadingComponent/> : 
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <p style={{fontSize:28,fontWeight:'bold'}}> 404- Not Found</p>  {/* editable language */}
                <p style={{fontSize:18}}>The page you are looking for does not exist.</p>  {/* editable language */}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <p>If you want to create a new table, Click to create a new one and refresh :</p>  {/* editable language */}
                <Button variant="outlined" size="small" onClick={() => handleOpen_confirmmodal()}> Create New Table</Button>  {/* editable language */}
                <ModalConfirmNewTable open_confirmmodal={open_confirmmodal}
                            setOpen_confirmmodal={setOpen_confirmmodal}
                            handleConfirm_confirmmodal={handleConfirm_confirmmodal}
                            />
            </div>
          
            }
      </div>
    )
  }