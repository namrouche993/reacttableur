import React, { useState } from 'react';
import PinInput from 'react-pin-input';
import { useSpring, animated } from 'react-spring';

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
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import secureLocalStorage from 'react-secure-storage';
import ReCAPTCHA from 'react-google-recaptcha';

function AppNotAuthorized401(props) {
  const [showModalBox, setShowModalBox] = useState(false);
  const [showPinCodeFields, setShowPinCodeFields] = useState(false);

  const boxAnimation = useSpring({
    // opacity: showPinCodeFields ? 0 : 1, // You can add more animated properties here
    transform: showPinCodeFields ? 'translateX(0%)' : 'translateX(100%)', // Example translation animation
  });

  const [pinCode, setPinCode] = useState('');

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

    setErrorEmail(!isValidEmail(email));
    //setShowModalBox(!showModalBox)

    if (!(isValidEmail(email))) {
      return console.log('Error Filling');
    }

    try {
      const responseem = await fetch('http://localhost:5000/acc/accessfromurlem', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
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
        secureLocalStorage.setItem('ussd74kasd75_2', data_response.idusername_to_client_side);
        secureLocalStorage.setItem('email_chosen', data_response.email);
        //secureLocalStorage.setItem('hisownroute', 'tab/' + data_response.hisownroute);
        setShowPinCodeFields(true);
        setNextted(true)

        //props.onClose();
        console.log('Data sent successfully to the server.');
        //window.location.reload();
      } else {
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
  
    setErrorEmail(!isValidEmail(email));
  
    if (!isValidEmail(email) || pinCode === '') {
      return console.log('Error Filling');
    }
  
    try {
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
        }),
      });
  
      if (responsecp.ok) {
        const data_responsecp = await responsecp.json();
  
        if (data_responsecp.ok) {
          // Email and pin code are verified, perform the next actions
          //secureLocalStorage.setItem('ussd74kasd75_2', data_responsecp.idusername_to_client_side);
          //secureLocalStorage.setItem('email_chosen', email);
          
          secureLocalStorage.setItem('hisownroute', 'tab/' + data_responsecp.hisownroute);
  
          //props.onClose();
          console.log('Data sent successfully to the server.');
          window.location.reload();
        } else {
          alert('Email and pin code not verified. Please try again or contact the owner.');
        }
      } else {
        console.error('Error sending data to the server.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

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
          You currently do not have authorization to access or modify this table. To request authorization, please provide your email.
        </Typography>

        <FormControl sx={{ m: 1, width: 250 }}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            error={nextted && errorEmail}
            helperText={nextted && errorEmail ? 'Invalid email format' : ''}
          />
        </FormControl>
        </Box>

        <DialogActions sx={{ fontFamily: 'system-ui' }}>
        <Button size="small" variant="contained" onClick={handleNext}>
           Next' {/* editable language Suivant */}
        </Button>
      </DialogActions>
      </Box>
:

      <Box>
    <animated.div style={boxAnimation}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , overflowX:'hidden',overflowY:'hidden' }}>
        <Typography variant="h4" sx={{ margin: '20px 0' }}>
               Authorization is necessary ! {/* editable language */}
        </Typography>

        <Typography variant="body1" sx={{ margin: '20px 0' }}>
          {/* You are not authorized to visit or modify this table. */}
          You currently do not have authorization to access or modify this table. To request authorization, please provide your email.
        </Typography>


        <FormControl sx={{ m: 1, width: 400 }}>
        <PinInput 
  length={6} 
  initialValue=""
  //secret
  //secretDelay={100} 
  onChange={(e) => setPinCode(e.target.value)} 
  type="custom" //numeric 
  //inputMode="number"
  style={{padding: '10px'}}  
  inputStyle={{borderColor: 'black'}}
  inputFocusStyle={{borderColor: 'blue'}}
  //onComplete={(value, index) => {}}
  autoSelect={true}
  regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
/>
</FormControl>
            <ReCAPTCHA
              sitekey="6LfIgpAoAAAAAEz3uqm3v5E-sCmkKrzMW6-sS48r"
              onChange={handleRecaptchaVerifyAccess}
            />
      </Box>
      <DialogActions sx={{ fontFamily: 'system-ui' }}>
        <Button size="small" variant="contained" onClick={handleSubmit}>
        Submit {/* editable language Suivant */}
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
