import React, { useEffect, useRef, useState } from 'react';
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
  List, ListItem, ListItemText, ListItemSecondaryAction,Tooltip,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Delete';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';


import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,styled } from '@mui/material';


import AddIcon from '@mui/icons-material/Add';

import { useSelector, useDispatch } from 'react-redux'; 
import ReCAPTCHA from 'react-google-recaptcha';
import  secureLocalStorage  from  "react-secure-storage";
import ModalConfirm from './ModalConfirm';
import ModalSuccessAdd from './ModalSuccessAdd';


const StyledTableContainer = styled(TableContainer)({
  maxWidth: 500, // Adjust the value to control the width
  margin: '0 auto', // Center the table within its container
  boxShadow:'none',
  padding:'0px'
});

const StyledTableRow = styled(TableRow)({
  '& > td, & > th': {
    padding: '8px 16px', // Adjust the padding as needed
  },
});



function ModalAdd(props) {

  const dispatch = useDispatch();
  const hotInstance_redux  = useSelector(state => state.hotInstance_redux);

  const [inputEmail, setInputEmail] = useState('');
  const [emails, setEmails] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [emailalreadyused,setEmailalreadyused]=useState(false)
  const recaptchaRef = useRef(null);


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
      setEmailalreadyused(false)
     }
  };

  const [recaptchaToken_add, setRecaptchaToken_add] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleRecaptchaaddVerify = (token) => {
    setRecaptchaToken_add(token);
    setIsVerified(true);
  }

  const [requestor_role,setRequestor_role]=useState('Viewer');

  const [emails_added_list,setEmails_added_list]=useState([])
  const [emails_added_length,setEmails_added_length]=useState(2);
  const [message_remove_email,setMessage_remove_email]=useState('Are you sure you want to remove')
  //const [emailsadded2,setEmailsadded2]=useState('')
  //const [emailsadded3,setEmailsadded3]=useState('')

  const [selectedEmailRemovedButton, setSelectedEmailRemovedButton] = useState(null);


  const [open_confirmmodal,setOpen_confirmmodal]=useState(false);
  const [emailtosend_in_modalconfirm_toremovec,setEmailtosend_in_modalconfirm_toremovec]=useState('');

  const handleOpen_confirmmodal = (BttnRmv,Role)=>{
    if(Role=='Owner'){
      setMessage_remove_email('Are you sure you want to remove')
    } else {
      setMessage_remove_email('Are you sure you want to remove')
    }
    setSelectedEmailRemovedButton(BttnRmv)
    setOpen_confirmmodal(true);
    setEmailtosend_in_modalconfirm_toremovec(BttnRmv)
  }


  const [selectedPassdButton, setSelectedPassdButton] = useState(null);

  const [test_display_codepin_user1,setTest_display_codepin_user1]=useState([true,true,true,true,true]); // editable nb users if we want to remove user4 or user5

  const handleVpnKeyClick = (Bttncodepin,index) =>{
    setSelectedPassdButton(Bttncodepin)
   // setTest_display_codepin_user1(!test_display_codepin_user1 );

    setTest_display_codepin_user1(prevState => {
      return prevState.map((value, i) => (i === index ? !value : value));
    });

    //alert("vpn clicked" + Bttncodepin)
  }

  const handleConfirm_confirmmodal = async () =>{
    try {
      var currentrouteofurl = window.location.pathname.toString().replace('/tab/','');
      const response = await fetch('http://localhost:5000/removedemail', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          },
          //body: JSON.stringify({"idusername":email,"dataa": [5,8,4,6] })//data_localstorage})
          body: JSON.stringify({
           "emailremoved":emailtosend_in_modalconfirm_toremovec,
           "idusername":secureLocalStorage.getItem('ussd74kasd75_2'),
           "currentrouteofurl":currentrouteofurl
          })
  
        });
        console.log(response)
        if (response.ok) {
          //const data_response = await response.json();
          //setEmails_added_list(prevList => prevList.filter(email => email !== emailtosend_in_modalconfirm_toremovec));
          setEmails_added_list(prevState => prevState.filter(row => row[0] !== emailtosend_in_modalconfirm_toremovec));
          setEmails_added_length(response.emailslength)
          setInputEmail('');
          setOpen_confirmmodal(false);
          window.location.reload();
    
        } else {
          console.error('Error sending data to the server.');
          setOpen_confirmmodal(false);
        }
    
      } catch (error) {
        console.error('Error:', error);
      }
  
  }



  const [open_successmodal,setOpen_successmodal]=useState(false);
  const [emailtosend_in_modalsuccess,setEmailtosend_in_modalsuccess]=useState('');
  const [codepass,setCodepass]=useState('')


  useEffect(() => {
    var currentrouteofurl = window.location.pathname.toString().replace('/tab/','');

    async function FetchListAllowedEmails(){
     try {
      const response_allowedemails = await fetch('http://localhost:5000/allowedemails', {
         method: 'POST',
         credentials: 'include',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
          "idusername":secureLocalStorage.getItem('ussd74kasd75_2'),
          "hisownroute":currentrouteofurl
        })
       });

       if (response_allowedemails.ok) {
        console.log('try to knwo how many times it renders !!!!!!!!!!!!!!!!!!!! ');
        const value_allowedemails_with_requestor = await response_allowedemails.json();
        console.log(value_allowedemails_with_requestor.user5)

        const value_allowedemails = {
        "user12":value_allowedemails_with_requestor.user12,
        "user2":value_allowedemails_with_requestor.user2 ,
        "user3":value_allowedemails_with_requestor.user3,

        "user4":value_allowedemails_with_requestor.user4, // editable nb users if we want to remove user4 or user5
        "user5":value_allowedemails_with_requestor.user5  // editable nb users if we want to remove user4 or user5

      }
        const role_of_the_requestor = value_allowedemails_with_requestor.role_of_the_requestor;
        const emailslength = value_allowedemails_with_requestor.emailslength
        console.log(value_allowedemails)

        //var emails_in_list = Object.values(value_allowedemails);
        var emails_in_list = Object.entries(value_allowedemails).map(([key, value]) => [value.useremail,value.role, value.code])
        console.log('emails_in_list ::::::::::::::::::::::::::::::::::::')
        console.log(emails_in_list)
        // Filtering out null elements from the array
        //let emails_in_list_withoutNull = emails_in_list.filter(element => element !== null);
        let emails_in_list_withoutNull = emails_in_list.filter(arr => !arr.every(el => el === null));
        console.log(emails_in_list_withoutNull)
        setEmails_added_list(emails_in_list_withoutNull)
        setEmails_added_length(emailslength)
        setRequestor_role(role_of_the_requestor)

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
      var currentrouteofurl = window.location.pathname.toString().replace('/tab/','');
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
         "role_new_user":role,
         "recaptchaToken_add":recaptchaToken_add,
         "route":currentrouteofurl
       })

      });
      console.log('response in add post :')
      console.log(recaptchaToken_add)
      console.log(response)
      if (response.ok) {
        const data_response = await response.json();
        console.log('data_response.role')
        console.log(data_response.role)
        setEmails_added_list(prevList => [...prevList, [inputEmail,data_response.role,data_response.codepass]]);
        setEmails_added_length(emails_added_length+1)
        setInputEmail('');
        setCodepass(data_response.codepass);
        setEmailtosend_in_modalsuccess(inputEmail);
        setOpen_successmodal(true);
        //props.onClose();
        
  
      } else if (response.status==500) {
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
        setErrorEmail(true)
        setEmailalreadyused(true)
        alert('email already added') // editable
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

  const [role,setRole]=useState('Admin');

  const handleChangeRole = (event) => {
    setRole(event.target.value)
    console.log('rolle')
  }

  const getHelperText = () => {
    // Add logic to determine helper text based on the selected role
    switch (role) {
      case 'Admin':
        return 'Admins have multiple access privileges. ( He can fill the table - Add new users - Submit the finished table '; {/* editable language */}
      case 'Writer':
        return 'Writers can edit contents. ( He cannot add new users, and He cannot submit )'; {/* editable language */}
      case 'Viewer':
        return 'Viewers can only view contents.'; {/* editable language */}
      default:
        return '';
    }
  };

  return (
    <Dialog open={props.open} onClose={onClosing}
    maxWidth="sm" // Adjust the maxWidth as needed
    fullWidth
    sx={{ '& .MuiDialog-paper': { minWidth: 850,borderRadius: 2 }  }} // Adjust the minWidth and maxWidth
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

      <DialogContent sx={{marginTop:0,alignSelf:'center',textAlign:'center',width:'825px',padding:'20px 11px'}}>
      <div style={{ display: 'fcontents', alignItems: 'flex-start' }}>
      <Box sx={{ display: 'contents', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h5" sx={{ margin: '20px 0' }}>
             Adding Users with Editing Permissions {/* editable language */}
        </Typography>




        <div style={{textAlign:'-webkit-center'}}>
        {emails_added_length<6 ? // editable nb users if we want to remove user4 or user5
        <div>
                <Typography variant="body1" fontWeight='normal' sx={{ margin: '20px 0' }}>
          {/* You are not authorized to visit or modify this table. */}
          <span style={{fontSize:'0.9rem'}}>Please provide the Email addresses of the users you want to grant editing access to this table and share the link with them</span><br></br>
          <span style={{fontWeight:'bold',textDecoration:'underline'}}>{document.location.href}</span> <br></br>
         {/* editable language */}
          <br></br>
      </Typography>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
      <TextField
        label="Email"
        value={inputEmail}
        //onChange={(e) => setInputEmail(e.target.value)}
        onChange={handleEmailChange}
        error={errorEmail}
        helperText={errorEmail ? (emailalreadyused ? 'Email Already used' : 'Invalid email format') : ''}

        //fullWidth
      />
      <FormControl>
  <InputLabel id="demo-simple-select-label">Role</InputLabel> {/* editable language */}
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    defaultValue="Admin"
    value={role}
    label="Role"
    onChange={handleChangeRole}
  >
    <MenuItem value={"Admin"}>Admin</MenuItem> {/* editable language */}
    <MenuItem value={"Writer"}>Writer</MenuItem> {/* editable language */}
    <MenuItem value={"Viewer"}>Viewer</MenuItem> {/* editable language */}
  </Select>
</FormControl>
</div>
<div>
{getHelperText() && (
        <div style={{ marginLeft: '10px', fontSize: 'small' }}>
          <p>{getHelperText()}</p>
        </div>
      )}
</div>
      <br></br>

      <ReCAPTCHA 
     sitekey='6LfZqc0oAAAAALYohDB07_qhlAjTh9boGWa7HDw4'
     onChange={handleRecaptchaaddVerify}
     ref={recaptchaRef}
     //size="compact"  // Change the size to compact
  />
  </div>
      :
      <div>
      <Typography variant="body1" fontWeight='bold' sx={{ margin: '20px 0' }}>
      {/* You are not authorized to visit or modify this table. */}
      05 Adresses Email ont déjà été ajoutées, vous avez atteint la limite autorisée.  {/* editable language */}
      <br></br>
  </Typography>
      <TextField
      label="Limite de 05 Emails.." // editable language
      value={inputEmail}
      //onChange={(e) => setInputEmail(e.target.value)}
      onChange={handleEmailChange}
      disabled
      variant="filled"
      //fullWidth
    />
      </div>

        }

</div>

<br></br>
<br></br>
<br></br>
<div style={{width:700, textAlign:'-webkit-center'}}>
<StyledTableContainer sx={{maxWidth:800,borderTop:'1px solid lightgrey'}} component={Paper}>
      <Table  sx={{boxShadow:'none'}}>
        <TableBody >
          {emails_added_list.map((rowofemail, index) => (
            <StyledTableRow key={index}>
              <TableCell style={{ width: '300px' }}>{rowofemail[0]}</TableCell>
              <TableCell style={{ width: '150px' }}>Role : {rowofemail[1]}</TableCell>               {/* editable language */}
              
              <TableCell style={{ width: '380px' }} align="right">
                {test_display_codepin_user1[index] ? (
                  <p style={{ display: 'inline' }}>Code d'accés : {rowofemail[2]}</p>              
                ) : (
                  <span></span>
                )}
                <Tooltip title="Show the pin code">
                  <IconButton
                    aria-label="VpnKeyIcon"
                    onClick={() => handleVpnKeyClick(rowofemail[2], index)}
                  >
                    <VpnKeyIcon />
                  </IconButton>
                </Tooltip>
                {rowofemail[1]!=='Owner' ? (
                      <Tooltip title="Remove">
                      <IconButton
                        aria-label="remove"
                        sx={{ color: 'brown' }}
                        onClick={() => handleOpen_confirmmodal(rowofemail[0],rowofemail[1])}
                      >
                        <RemoveIcon />
                      </IconButton>
                    </Tooltip>
                ) : (
                  <Tooltip title="Remove">
                  <IconButton
                    disabled
                    aria-label="remove"
                    sx={{ color: 'brown' }}
                  >
                    <RemoveIcon />
                  </IconButton>
                </Tooltip>
              )}

              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>



    <ModalConfirm open_confirmmodal={open_confirmmodal}
                  setOpen_confirmmodal={setOpen_confirmmodal}
                  handleConfirm_confirmmodal={handleConfirm_confirmmodal}
                  emailreceived_in_modalconfirm_toremove={emailtosend_in_modalconfirm_toremovec}
                  messageremoveemail={message_remove_email}
                  />
    </div>
      </Box>
    </div>

      </DialogContent>

      <DialogActions sx={{fontFamily:'system-ui',backgroundColor:'#f1f1f1'}}>
        <Button size="small" variant="outlined" onClick={onClosing}>Cancel</Button>
        <Button size="small" variant="contained" onClick={handleButtonAddClick}>Submit</Button>
      </DialogActions>
    
      <ModalSuccessAdd open_successmodal={open_successmodal}
                  setOpen_successmodal={setOpen_successmodal}
                  emailreceived_in_modalsuccess={emailtosend_in_modalsuccess}
                  codepin_in_modalsuccess={codepass}
                  setOpen_addmodal={onClosing}
                  />

    </Dialog>
  );
}

export default ModalAdd;