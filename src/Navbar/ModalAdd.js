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
  Typography,
  List, ListItem, ListItemText, ListItemSecondaryAction,Tooltip
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Delete';

import AddIcon from '@mui/icons-material/Add';

import { useSelector, useDispatch } from 'react-redux'; 
import ReCAPTCHA from 'react-google-recaptcha';
import  secureLocalStorage  from  "react-secure-storage";




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

  const [recaptchaToken_add, setRecaptchaToken_add] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleRecaptchaaddVerify = (token) => {
    setRecaptchaToken_add(token);
    setIsVerified(true);
  }

  const [emails_added_list,setEmails_added_list]=useState([])
  //const [emailsadded2,setEmailsadded2]=useState('')
  //const [emailsadded3,setEmailsadded3]=useState('')





  useEffect(() => {
  
    async function FetchListAllowedEmails(){
     try {
      const response_allowedemails = await fetch('http://localhost:5000/allowedemails', {
         method: 'POST',
         credentials: 'include',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
          "idusername":secureLocalStorage.getItem('ussd74kasd75_2')
        })
       });

       if (response_allowedemails.ok) {
        console.log('try to knwo how many times it renders !!! ');

        const value_allowedemails = await response_allowedemails.json();
        var emails_in_list = Object.values(value_allowedemails);
        
        // Filtering out null elements from the array
        let emails_in_list_withoutNull = emails_in_list.filter(element => element !== null);


        setEmails_added_list(emails_in_list_withoutNull)

        //setEmailsadded2(value_allowedemails.user2email)
        //setEmailsadded3(value_allowedemails.user3email)
        
        console.log('Data sent successfully to the server.');
       } else {
          console.error('Error sending data to the server.');
       }
     } catch (error) {
       console.error('Error:', error);
       //alert('we are in error')
     }
    }

    FetchListAllowedEmails();
  
  }, [])
  


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
      const response = await fetch('http://localhost:5000/add', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        //body: JSON.stringify({"idusername":email,"dataa": [5,8,4,6] })//data_localstorage})
        body: JSON.stringify({
         "email_owner":secureLocalStorage.getItem('email_chosen'),
         "username_owner":secureLocalStorage.getItem('ussd74kasd75_2'),
         "new_email_added":inputEmail,
         "recaptchaToken_add":recaptchaToken_add
       })

      });
      console.log('response in add post :')
      console.log(recaptchaToken_add)
      console.log(response)
      if (response.ok) {
        const data_response = await response.json();
        setEmails_added_list(prevList => [...prevList, inputEmail]);
        setInputEmail('');
        props.onClose();
  
      } else {
        console.error('Error sending data to the server.');
        props.onClose();
      }



    } catch (error) {
      console.error('Error:', error);
    }


  };


  const handleSubmit = () => {
    props.onClose();
  };

  
  const onClosing = () =>{
    console.log('emails_added_list');
    console.log(emails_added_list);

    props.onClose()
   //props.senddata(props.onClose())
  }
  

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
          <br></br>
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

      <ReCAPTCHA 
     sitekey='6LfZqc0oAAAAALYohDB07_qhlAjTh9boGWa7HDw4'
     onChange={handleRecaptchaaddVerify}
     //size="compact"  // Change the size to compact
  />
</div>

<br></br>
<br></br>
<div style={{textAlign:'-webkit-center'}}>
      <List sx={{maxWidth:320,alignContent:'center',borderTop:'ridge'}}>

      {emails_added_list.map((email, index) => (
                <Box
                key={index}
                sx={{
                  '&:hover': {
                    backgroundColor: '#f0f0f0',
                  },
                  transition: 'background-color 0.3s',
                  borderBottom: '1px solid #ccc', // Add the underline
                }}
              >
        <ListItem key={index}>
          <ListItemText primary={email} />
          <ListItemSecondaryAction>
            <Tooltip title="Remove">
               <IconButton edge="end" aria-label="remove"  sx={{ color: 'brown' }} >  {/* onClick={() => handleRemove(index)}> */}
                   <RemoveIcon />
               </IconButton>
             </Tooltip>
          </ListItemSecondaryAction>
        </ListItem>
      </Box>
      ))}
    </List>
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