import React, { useState } from 'react'
import { Button } from '@mui/material'
import ModalConfirmNewTable from './Navbar/ModalConfirmNewTable';
import  secureLocalStorage  from  "react-secure-storage";
import { useNavigate } from 'react-router-dom';

// import { useHistory } from 'react-router-dom';



export default function App404server() {
  // const history = useHistory();
  const navigate = useNavigate();


  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <p style={{fontSize:28,fontWeight:'bold'}}> Try again</p>  {/* editable language */}
      <p style={{fontSize:18}}>Oops! Something went wrong with the connection. Please try again.</p>  {/* editable language */}
      <br></br>
  </div>
  )
  
}
