import React, { useState } from 'react'
import { Button } from '@mui/material'
import ModalConfirmNewTable from './Navbar/ModalConfirmNewTable';
import  secureLocalStorage  from  "react-secure-storage";
import { useNavigate } from 'react-router-dom';

// import { useHistory } from 'react-router-dom';



export default function AppErrorRequestComponent() {
  // const history = useHistory();
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

    secureLocalStorage.removeItem("navigator_language2_storage");
    secureLocalStorage.removeItem("userLocale2_storage");
    secureLocalStorage.removeItem("decimalSeparator2_storage");
    secureLocalStorage.removeItem("navigator_laguage_of_owner");
    secureLocalStorage.removeItem("ds_haschanged_storage");
    secureLocalStorage.removeItem("use_english_date_by_user_himeself_in_modal_storage");
    secureLocalStorage.removeItem("navigator_language2_avant_modify_storage");   
    secureLocalStorage.removeItem("userTimeZone_storage");   

     

    

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

        secureLocalStorage.removeItem("navigator_language2_storage");
        secureLocalStorage.removeItem("userLocale2_storage");
        secureLocalStorage.removeItem("decimalSeparator2_storage");
        secureLocalStorage.removeItem("navigator_laguage_of_owner");
        secureLocalStorage.removeItem("ds_haschanged_storage");
        secureLocalStorage.removeItem("use_english_date_by_user_himeself_in_modal_storage");
        secureLocalStorage.removeItem("navigator_language2_avant_modify_storage");    
        secureLocalStorage.removeItem("userTimeZone_storage"); 
    
    

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
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <p style={{fontSize:28,fontWeight:'bold'}}> Try again</p>  {/* editable language */}
      <p style={{fontSize:18}}>Oops! Something went wrong with the connection. Please try again.</p>  {/* editable language */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>If problems persist, try resetting the table by creating a new one :</p>  {/* editable language */}
      <Button variant="outlined" size="small" onClick={() => handleOpen_confirmmodal()}> Create New Table</Button>  {/* editable language */}
      <ModalConfirmNewTable open_confirmmodal={open_confirmmodal}
                  setOpen_confirmmodal={setOpen_confirmmodal}
                  handleConfirm_confirmmodal={handleConfirm_confirmmodal}
                  />
  </div>
  )
  
}
