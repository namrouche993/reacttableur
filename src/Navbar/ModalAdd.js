import React, { useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  TextField,
  Box,
  DialogTitle,
  DialogContentText,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Grid,
  Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

import { useSelector, useDispatch } from 'react-redux'; 
import ReCAPTCHA from 'react-google-recaptcha';



function ModalAdd(props) {
  const dispatch = useDispatch();
  const hotInstance_redux  = useSelector(state => state.hotInstance_redux);

  const [inputEmail, setInputEmail] = useState('');
  const [emails, setEmails] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);

  const isValidEmail = (value) => {
    // Simple email validation using a regular expression
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(value.toString().trim());
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    if (newEmail.length <= 254) {
      setInputEmail(newEmail);
      setErrorEmail(false)
     }
  };

  const [recaptchaToken, setRecaptchaToken] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleRecaptchaVerify = (token) => {
    setRecaptchaToken(token);
    setIsVerified(true);
  }


  const handleButtonAddClick = async(e) => {
    
    e.preventDefault();
        
    if (!isVerified) {
      alert('Please complete the reCAPTCHA verification.');
      return;
    }

    setErrorEmail(!isValidEmail(inputEmail));

    if( !isValidEmail(inputEmail)){
      return console.log("Error Filling");
    }
    try {
      const response = await fetch('http://localhost:5000/tab/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        //body: JSON.stringify({"idusername":email,"dataa": [5,8,4,6] })//data_localstorage})
        body: JSON.stringify({
         "email":inputEmail, 
         "recaptchaToken":recaptchaToken
       })

      });
      if (response.ok) {
        const data_response = await response.json();

       window.location.reload();

        setEmails(inputEmail);
        setInputEmail('');
        props.onClose();
  
      } else {
        console.error('Error sending data to the server.');
      }



    } catch (error) {
      console.error('Error:', error);
    }


  };


  const handleSubmit = () => {
    props.onClose();
  };

  
  const onClosing = () =>{
    props.onClose()
   //props.senddata(props.onClose())
  }

  useEffect(() => {

})
  

  return (
    <Dialog open={props.open} onClose={onClosing}
    maxWidth="sm" // Adjust the maxWidth as needed
    fullWidth
    sx={{ '& .MuiDialog-paper': { minWidth: 350,borderRadius: 2 }  }} // Adjust the minWidth and maxWidth
>
      {/* <DialogTitle sx={{fontFamily:'system-ui',backgroundColor:'#f1f1f1',fontSize:'1.8rem'}}>Add Users</DialogTitle> */}
      <IconButton
          edge="end"
          color="inherit"
          onClick={onClosing}
          aria-label="close"
          sx={{ position: 'absolute', right: 20, top: 8 }}
        >
          <CloseIcon />
        </IconButton>

      <DialogContent sx={{marginTop:0,alignSelf:'center',textAlign:'center'}}>
      <div style={{ display: 'fcontents', alignItems: 'flex-start' }}>
      <Box sx={{ display: 'contents', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h5" sx={{ margin: '20px 0' }}>
             Adding Users with Editing Permissions {/* editable language */}
        </Typography>


      <Typography variant="body1" fontWeight='bold' sx={{ margin: '20px 0' }}>
          {/* You are not authorized to visit or modify this table. */}
          If you want to give a user editing access to this table.<br></br>Please provide his email address.  {/* editable language */}
        </Typography>


        <div style={{textAlign:'-webkit-center'}}>
      <TextField
        label="Email"
        value={inputEmail}
        onChange={(e) => setInputEmail(e.target.value)}
        //fullWidth
      />
      <br></br>
      <br></br>

    {/* 
    <div style={{ height: '100%', display: 'contents', alignItems: 'center' }}>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleButtonAddClick}
        startIcon={<AddIcon />}
        style={{
        height: '55px',
        color: 'black',
        borderColor: 'black',
        paddingRight: '5px',
        backgroundColor: 'lightsteelblue',
    }}
      >
      </Button>
      </div>
    
    */}

      <ReCAPTCHA 
     sitekey='6LfIgpAoAAAAAEz3uqm3v5E-sCmkKrzMW6-sS48r'
     onChange={handleRecaptchaVerify}
     //size="compact"  // Change the size to compact
  />
</div>
      </Box>
    </div>

      </DialogContent>

      <DialogActions sx={{fontFamily:'system-ui',backgroundColor:'#f1f1f1'}}>
        <Button size="small" variant="outlined" onClick={onClosing}>Cancel</Button>
        <Button size="small" variant="contained" onClick={handleButtonAddClick}>Submit</Button>
      </DialogActions>
      
    </Dialog>
  );
}

export default ModalAdd;