import React, { useState } from 'react';
//import PinInput from 'react-pin-input';
import { PinInput } from 'react-input-pin-code' // ES Module

import { useSpring, animated } from 'react-spring';
import { useNavigate } from 'react-router-dom';


import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  IconButton,
  Grid,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  FormHelperText,
  Box,
  InputAdornment,
  Input,
  Stack
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';


import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import secureLocalStorage from 'react-secure-storage';
import ReCAPTCHA from 'react-google-recaptcha';

import { createTheme, ThemeProvider, Theme, useTheme } from '@mui/material/styles';
import ModalConfirmNewTable from './Navbar/ModalConfirmNewTable';

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
  });

  const isEmptyArrayfct = (myarray) =>{
    return Array.from({ length: 8 }).every((_, index) => myarray[index] === '' || myarray[index] === null || myarray[index] == undefined);
}




function AppNotAuthorized401(props) {

  const outerTheme = useTheme();

  const [showModalBox, setShowModalBox] = useState(false);
  const [showPinCodeFields, setShowPinCodeFields] = useState(false);
  const [codemessageincorrect,setCodemessageincorrect]=useState('');
  const [emailentered, setEmailentered]=useState('')

  const onchangepincode = (value, index, values) => {
    setPinCode(values);
    setCodemessageincorrect('')
  }

  const boxAnimation = useSpring({
    // opacity: showPinCodeFields ? 0 : 1, // You can add more animated properties here
    transform: showPinCodeFields ? 'translateX(0%)' : 'translateX(100%)', // Example translation animation
  });

  //const [pinCode, setPinCode] = useState(['', '', '', '', '', '', '']);
  const [pinCode, setPinCode] = useState(['', '', '', '', '', '', '', '']);

  const [nextted, setNextted] = useState(false);

  const [email, setEmail] = useState(
    secureLocalStorage.getItem('email_chosen') == null ? '' : secureLocalStorage.getItem('email_chosen')
  );
  const [errorEmail, setErrorEmail] = useState(false);

  const isValidEmail = (value) => {
    // Simple email validation using a regular expression
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(value.toString().trim());
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    if (newEmail.length <= 254) {
      setEmail(newEmail);
      setErrorEmail(false);
    }
  };

  const [recaptchaTokenAccess, setRecaptchaTokenAccess] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleRecaptchaVerifyAccess = (token) => {
    setRecaptchaTokenAccess(token);
    setIsVerified(true);
  };

  const handleNext = async (e) => {
    e.preventDefault();

    //setShowModalBox(!showModalBox)

    if (!(isValidEmail(email))) {
      setErrorEmail(!isValidEmail(email));
      return console.log('Error Filling');
    }

    try {
      var currentrouteofurl = window.location.pathname.toString().replace('/tab/','');
      const responseem = await fetch('http://localhost:5000/acc/accessfromurlem', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          currentrouteofurl:currentrouteofurl
          //recaptchaTokenAccess: recaptchaTokenAccess,
        }),
      });
      console.log('responseem')
      console.log(responseem);
      console.log(responseem.ok)
      console.log(responseem.status)
      //var responsejson = await responseem.json();
      //console.log(responsejson)
      if (responseem.ok) {
        console.log('we are in response.ok')
        const data_response = await responseem.json();
        console.log('data_response  :')
        console.log(data_response)
        //secureLocalStorage.setItem('ussd74kasd75_2', data_response.idusername_to_client_side);
        secureLocalStorage.setItem('email_chosen', data_response.email);
        //secureLocalStorage.setItem('hisownroute', 'tab/' + data_response.hisownroute);
        setShowPinCodeFields(true);
        setEmailentered(data_response.email)
        setNextted(true)

        //props.onClose();
        console.log('Data sent successfully to the server.');
        //window.location.reload();
      } else {
        setNextted(true)
        setErrorEmail(true)
        console.error('Error ,Email is not verified.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!isVerified) {
      alert('Please complete the reCAPTCHA verification.');
      return;
    }
  
    setErrorEmail(!isValidEmail(email))
    console.log(pinCode)
    console.log(email)

    if (!isValidEmail(email) || isEmptyArrayfct(pinCode) ) {
      return console.log('Error Filling!!!!!!!!!!!!!!');
    }
  
    try {
      var currentrouteofurl = window.location.pathname.toString().replace('/tab/','');

      const responsecp = await fetch('http://localhost:5000/acc/accessfromurlcp', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          pinCode: pinCode,
          recaptchaTokenAccess: recaptchaTokenAccess,
          currentrouteofurl:currentrouteofurl
        }),
      });
  
      if (responsecp.ok) {
        const data_responsecp = await responsecp.json();
        console.log('data_responsecp')
        console.log(data_responsecp);
        console.log(data_responsecp.dataa)
        //alert('dataaa')
       // if (data_responsecp.ok) {
          // Email and pin code are verified, perform the next actions



          secureLocalStorage.setItem('ussd74kasd75_2', data_responsecp.idusername_to_client_side);
          secureLocalStorage.setItem('email_chosen', data_responsecp.email);
          secureLocalStorage.setItem('phone_chosen', data_responsecp.phoneNumber_owner);
          secureLocalStorage.setItem('organismechosen', data_responsecp.organisme);
          secureLocalStorage.setItem('region_storage', data_responsecp.region);
          secureLocalStorage.setItem('data_localstorage_storage_2', JSON.stringify(data_responsecp.dataa));
          secureLocalStorage.setItem('hisownroute', 'tab/' + data_responsecp.hisownroute);
  
          //props.onClose();
          console.log('Data sent successfully to the server.');
          window.location.reload();
       
        /*} else {
          setCodemessageincorrect('the code you entered is incorrect !') // editable language
          //alert('Email and pin code not verified. Please try again or contact the owner.');
        }
        */
        
      } else {
        setCodemessageincorrect('the code you entered is incorrect !') // editable language
        console.error('Error sending data to the server.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const navigate = useNavigate();

  const [open_confirmmodal,setOpen_confirmmodal]=useState(false);

  const handleOpen_confirmmodal = ()=>{
    setOpen_confirmmodal(true);
  }

  const handleConfirm_confirmmodal = async () =>{
    secureLocalStorage.removeItem("ussd74kasd75_2");
    secureLocalStorage.removeItem("email_chosen");
    secureLocalStorage.removeItem("phone_chosen");
    secureLocalStorage.removeItem("organismechosen");
    secureLocalStorage.removeItem("region_storage");
    secureLocalStorage.removeItem("data_localstorage_storage_2");
    secureLocalStorage.removeItem("hisownroute");

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
        secureLocalStorage.removeItem("phone_chosen");
        secureLocalStorage.removeItem("organismechosen");
        secureLocalStorage.removeItem("region_storage");
        secureLocalStorage.removeItem("data_localstorage_storage_2");
        secureLocalStorage.removeItem("hisownroute");
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
    <Dialog
      open={true}
      onClose={false}
      maxWidth="sm"
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          minWidth: 320,
          maxWidth: '50%',
          borderRadius: 2,
          //height: '103%',
        },
      }}
    >
      {/* <DialogTitle sx={{ fontFamily: 'system-ui', backgroundColor: '#f1f1f1', fontSize: '1.8rem' }}>
        Access Denied
      </DialogTitle> */}
      <DialogContent sx={{ minWidth: '400px', marginTop: 0, textAlign: 'center' }}>
{!showPinCodeFields ?       
      <Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" sx={{ margin: '20px 0' }}>
               Authorization is necessary ! {/* editable language */}
        </Typography>

        <Typography variant="body1" sx={{ margin: '20px 0' }}>
          {/* You are not authorized to visit or modify this table. */}
          You currently do not have authorization to access or modify this table.<br></br>To verify your authorization for access, please provide your email.  {/* editable language */}
        </Typography>

        <FormControl sx={{ m: 1, width: 250 }}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            error={nextted && errorEmail}
            helperText={nextted && errorEmail ? isValidEmail(email) ? 'Invalid Email' : 'Invalid email format' : ''}
          />
        </FormControl>
        <Typography variant="body2" sx={{ margin: '20px 0' }}>
          {/* You are not authorized to visit or modify this table. */}
          Or you can create a new table by Clicking the the button Create New Table.  {/* editable language */}
        </Typography>
        </Box>
        <br></br>

        <DialogActions sx={{ fontFamily: 'system-ui',justifyContent: 'space-between' }}>
        {/* <Stack spacing={2} direction="row" sx={{ justifyContent: 'flex-end' }}> */}
        <Button size="small" variant="outlined" sx={{ height: '100%',textTransform: 'none' }} onClick={() => handleOpen_confirmmodal()}>
           Create New Table' {/* editable language Suivant */}
        </Button>

        <Button size="medium" variant="contained" sx={{ height: '100%',marginLeft:'20px !important' }} onClick={handleNext}>
           Next' {/* editable language Suivant */}
        </Button>
        {/* </Stack> */}

      </DialogActions>
      <ModalConfirmNewTable open_confirmmodal={open_confirmmodal}
                  setOpen_confirmmodal={setOpen_confirmmodal}
                  handleConfirm_confirmmodal={handleConfirm_confirmmodal}
                  />

      </Box>
      
:



      <Box>
    <animated.div style={boxAnimation}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , overflowX:'hidden',overflowY:'hidden' }}>
        <Typography variant="h4" sx={{ margin: '20px 0' }}>
               Authorization is necessary ! {/* editable language */}
        </Typography>
        <FormControl variant="standard" sx={{alignItems:'center'}}>
        <ThemeProvider theme={customTheme(outerTheme)}>
<TextField
id="input-with-icon-adornment"
variant="standard" // Set the input to outlined mode
defaultValue={emailentered}
fullWidth
InputProps={{
  style: { width: `${emailentered.length * 13}px` }, // Adjust the multiplier as needed for desired spacing

//readOnly: true,
startAdornment: (
  <InputAdornment position="start">
    <AccountCircle />
  </InputAdornment>
),
}}
sx={{
  '& div': {
    borderRadius: 'none', // Set the border-radius to create a circle
  },
'& input': { fontWeight: 'bold',  borderBottom: 'none', // Remove the bottom border line
   '&.Mui-disabled': { // Target the input element in the disabled state
  '-webkit-text-fill-color': 'black', // Change the text color to black
},
},
// '& .MuiInput-root': {
//   borderBottom: 'none', // Remove the bottom border line
// },

}} // Set the input style to bold

disabled
//disabled // Set the disabled prop to true if you want it initially disabled
/>
</ThemeProvider>
</FormControl>

        <Typography variant="body1" sx={{ margin: '20px 0' }}>
          {/* You are not authorized to visit or modify this table. */}
          Please provide the code that was sent to you from the owner of this table :  {/* editable language */}
        </Typography>

        <FormControl sx={{ m: 1, width: 400,alignItems:'center' }}>
    <PinInput
      values={pinCode}
      onChange={onchangepincode}
      type='number'
      autoFocus='true'
      autoTab='true'
      validBorderColor='rgb(204,204,204)'
      placeholder='.'
    />
    <p style={{color:'red'}}>{codemessageincorrect}</p>
</FormControl>
            <ReCAPTCHA
              sitekey="6LcPEtIoAAAAAFT_7t4pjHElX8YeiPrFDLEI9WKU"
              onChange={handleRecaptchaVerifyAccess}
            />
      </Box>
      <DialogActions sx={{ fontFamily: 'system-ui' }}>
        <Button size="small" variant="contained" onClick={handleSubmit}>
        Next {/* editable language Suivant */}
     </Button>
      </DialogActions>
      </animated.div>
      </Box>
}

      </DialogContent>
    </Dialog>
  );
}

export default AppNotAuthorized401;
