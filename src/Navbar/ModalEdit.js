import React, { useEffect, useState } from 'react';
import Handsontable from 'handsontable';
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
  Tooltip,

} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector, useDispatch } from 'react-redux'; 
import  secureLocalStorage  from  "react-secure-storage";
import { generateRandomString } from '../Tools/Randst';
import { fetchDataUsEffect1 } from '../Tools/fetchDataUsEffect1';
import {
  last_row_after_header,
  date_format_if_english_is_not_accepted,
  use_en_time,
  usTimeZones,
  userTimeZone
} from '../initials_inputs';
import { ddatafct } from '../data';
import ReCAPTCHA from 'react-google-recaptcha';
import ModalConfirmNewTable from './ModalConfirmNewTable';
import { useNavigate } from 'react-router-dom';
import { startsWithElement } from '../Tools/startsWithElement.js';


/*
const organisme_data = [
  {val:'organisme01',label:'Organisme 01'},
  {val:'organisme02',label:'Organisme 02'},
  {val:'organisme03',label:'Organisme 03'},
  {val:'organisme04',label:'Organisme 04'},
];
*/

export const organisme_data = [
  {val:'organisme_opgi',label:'OPGI'},
  {val:'organisme_duac',label:'DUAC'},
  {val:'organisme_dep',label:'DEP'},
  {val:'organisme_dl',label:'DL'},
];

const region_data0 = [
  { region: '01-ADRAR', matriculeregion: '01', id: 1 },
  { region: '02-CHLEF', matriculeregion: '02', id: 2 },
  { region: '03-LAGHOUAT', matriculeregion: '03', id: 3 },
  { region: '04-Oum el Bouaghi', matriculeregion: '04', id: 4 },
  { region: '05-BATNA', matriculeregion: '05', id: 5 },
  { region: '06-Béjaïa', matriculeregion: '06', id: 6 },
  { region: '07-BISKRA', matriculeregion: '07', id: 7 },
  { region: '08-Béchar', matriculeregion: '08', id: 8 },
  { region: '09-BLIDA', matriculeregion: '09', id: 9 },
  { region: '10-BOUIRA', matriculeregion: '10', id: 10 },
  { region: '11-Tamanrasset', matriculeregion: '11', id: 11 },
  { region: '12-Tébessa', matriculeregion: '12', id: 12 },
  { region: '13-TLEMCEN', matriculeregion: '13', id: 13 },
  { region: '14-TIARET', matriculeregion: '14', id: 14 },
  { region: '15-TIZI OUZOU', matriculeregion: '15', id: 15 },
  { region: '16.1-ALGER HD', matriculeregion: '16.1', id: 16 },
  { region: '16.2-ALGER BMR', matriculeregion: '16.2', id: 59 },
  { region: '16.3-ALGER DEB', matriculeregion: '16.3', id: 60 },
  { region: '17-DJELFA', matriculeregion: '17', id: 17 },
  { region: '18-JIJEL', matriculeregion: '18', id: 18 },
  { region: '19-Sétif', matriculeregion: '19', id: 19 },
  { region: '20-Saïda', matriculeregion: '20', id: 20 },
  { region: '21-SKIKDA', matriculeregion: '21', id: 21 },
  { region: '22-Sidi Bel Abbès', matriculeregion: '22', id: 22 },
  { region: '23-ANNABA', matriculeregion: '23', id: 23 },
  { region: '24-GUELMA', matriculeregion: '24', id: 24 },
  { region: '25-CONSTANTINE', matriculeregion: '25', id: 25 },
  { region: '26-Médéa', matriculeregion: '26', id: 26 },
  { region: '27-MOSTAGANEM', matriculeregion: '27', id: 27 },
  { region: '28-Msila', matriculeregion: '28', id: 28 },
  { region: '29-MASCARA', matriculeregion: '29', id: 29 },
  { region: '30-OUARGLA', matriculeregion: '30', id: 30 },
  { region: '31-ORAN', matriculeregion: '31', id: 31 },
  { region: '32-EL BAYADH', matriculeregion: '32', id: 32 },
  { region: '33-ILLIZI', matriculeregion: '33', id: 33 },
  { region: '34-Bordj Bou Arréridj', matriculeregion: '34', id: 34 },
  { region: '35-Boumerdès', matriculeregion: '35', id: 35 },
  { region: '36-EL TARF', matriculeregion: '36', id: 36 },
  { region: '37-TINDOUF', matriculeregion: '37', id: 37 },
  { region: '38-TISSEMSILT', matriculeregion: '38', id: 38 },
  { region: '39-EL OUED', matriculeregion: '39', id: 39 },
  { region: '40-KHENCHELA', matriculeregion: '40', id: 40 },
  { region: '41-Souk Ahras', matriculeregion: '41', id: 41 },
  { region: '42-TIPAZA', matriculeregion: '42', id: 42 },
  { region: '43-MILA', matriculeregion: '43', id: 43 },
  { region: '44-Aïn Defla', matriculeregion: '44', id: 44 },
  { region: '45-NAAMA', matriculeregion: '45', id: 45 },
  { region: '46-Aïn Témouchent', matriculeregion: '46', id: 46 },
  { region: '47-Ghardaïa', matriculeregion: '47', id: 47 },
  { region: '48-RELIZANE', matriculeregion: '48', id: 48 },

  { region: '49-Timimoun', matriculeregion: '49', id: 49 },
  { region: '50-Bordj Badji Mokhtar', matriculeregion: '50', id: 50 },
  { region: '51-Ouled Djellal', matriculeregion: '51', id: 51 },
  { region: '52-Béni Abbès', matriculeregion: '52', id: 52 },
  { region: '53-In Salah', matriculeregion: '53', id: 53 },
  { region: '54-In Guezzam', matriculeregion: '54', id: 54 },
  { region: '55-Touggourt', matriculeregion: '55', id: 55 },
  { region: '56-Djanet', matriculeregion: '56', id: 56 },
  { region: '57-El M\'Ghair', matriculeregion: '57', id: 57 },
  { region: '58-El Meniaa', matriculeregion: '58', id: 58 },
];

export const region_data = region_data0.map(item => ({
  ...item,
  region2: item.region.substring(3)
}));



function ModalEdit(props) {
  const hotInstance_redux  = useSelector(state => state.hotInstance_redux);
  const use_english_date_by_user_himeself_in_modal = useSelector(state => state.use_english_date_by_user_himeself_in_modal);
  const navigator_language2_redux  = useSelector(state => state.navigator_language2);
  const display_create_new_table_redux = useSelector(state => state.display_create_new_table);

  const dispatch = useDispatch();

  const [submitted, setSubmitted] = useState(false);

  const [organisme, setOrganisme] = useState(secureLocalStorage.getItem('organismechosen')==null ? '' : secureLocalStorage.getItem('organismechosen'));
  const [errorOrganisme, setErrorOrganisme] = useState(false);

  const handleOrganismeChange = (event) => {
    const newValue = event.target.value;
    setOrganisme(newValue);
    setErrorOrganisme(newValue === ''); // Set error if value is empty
  };

  
  const [region, setRegion] = useState(secureLocalStorage.getItem('region_storage') == null ? '' : secureLocalStorage.getItem('region_storage'));
  
  const [errorRegion, setErrorRegion] = useState(false);

  const handleRegionChange = (event) => {
    const newValue = event.target.value;
    setRegion(newValue);
    setErrorRegion(newValue === ''); // Set error if value is empty
  };


  const [email, setEmail] = useState(secureLocalStorage.getItem('email_chosen') == null ? '' : secureLocalStorage.getItem('email_chosen') );
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
      setErrorEmail(false)
     }
  };



  const [phoneNumber, setPhoneNumber] = useState( secureLocalStorage.getItem('phone_chosen') == null ? '' : secureLocalStorage.getItem('phone_chosen') );
  const [errorPN, setErrorPN] = useState(false);

  const handlePhoneNumberChange = (event) => {
    const newPhoneNumber = event.target.value;
    if (newPhoneNumber.length <= 30) {
       setPhoneNumber(newPhoneNumber);
       setErrorPN(false);
    }
    
  };

  const isValidPhoneNumber = (value) => {
    // Simple phone number validation using a regular expression
    const phonePattern = /^\+?[\d\/\s()+\-_:]+$/;
    return phonePattern.test(value.toString().trim());
  };

  const [recaptchaToken, setRecaptchaToken] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleRecaptchaVerify = (token) =>{
    setRecaptchaToken(token);
    setIsVerified(true);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    if (!isVerified) {
      alert('Please complete the reCAPTCHA verification.');
      return;
    }
    console.log('isVerified')
    console.log(!isVerified)
    console.log(recaptchaToken);
    
    setSubmitted(true);
    setErrorPN(!isValidPhoneNumber(phoneNumber));
    setErrorEmail(!isValidEmail(email));

    setErrorOrganisme(organisme==='');
    setErrorRegion(region==='');

    if( !(!errorOrganisme && !errorRegion && isValidEmail(email) && isValidPhoneNumber(phoneNumber)) ){
      return console.log("Error Filling");
    }
    try {
      //var sec_ls_nav_lang2_sto = secureLocalStorage.getItem("navigator_language2_storage") ? secureLocalStorage.getItem("navigator_language2_storage") : (navigator.language); // editable if we set always navigator.language
      
      if(secureLocalStorage.getItem("navigator_language2_storage")){
        var sec_ls_nav_lang2_sto =secureLocalStorage.getItem("navigator_language2_storage");
        secureLocalStorage.setItem("use_english_date_by_user_himeself_in_modal_storage",false);
        dispatch({ type: 'SET_use_english_date_by_user_himeself_in_modal', payload: false });  // WITH REDUX


      } else {
        if((navigator_language2_redux=='en-US' && startsWithElement(usTimeZones,userTimeZone) && use_en_time==true) || use_english_date_by_user_himeself_in_modal==true && use_en_time==true) {
          var sec_ls_nav_lang2_sto = 'en-US';
          dispatch({ type: 'SET_use_english_date_by_user_himeself_in_modal', payload: true });  // WITH REDUX
          secureLocalStorage.setItem("use_english_date_by_user_himeself_in_modal_storage",true)


        } else {
          var sec_ls_nav_lang2_sto = date_format_if_english_is_not_accepted
          dispatch({ type: 'SET_use_english_date_by_user_himeself_in_modal', payload: false });  // WITH REDUX
          secureLocalStorage.setItem("use_english_date_by_user_himeself_in_modal_storage",false)

        }
      }
      
      var sec_ls_useloc_sto = secureLocalStorage.getItem("userLocale2_storage") ? secureLocalStorage.getItem("userLocale2_storage") : Intl.DateTimeFormat().resolvedOptions().locale  // editable if we set always userlocale
      var sec_ls_decim_sep_sto = secureLocalStorage.getItem("decimalSeparator2_storage") ? secureLocalStorage.getItem("decimalSeparator2_storage") : (1234567.73).toLocaleString(sec_ls_useloc_sto, { style: 'decimal' }).substring(9, 10).toString();  // editable if we set always separtor
       

      console.log('use_english_date_by_user_himeself_in_modal_storage ************** : ')
      console.log(secureLocalStorage.getItem("use_english_date_by_user_himeself_in_modal_storage"))

      const response = await fetch('http://localhost:5000/tab/login', {
         method: 'POST',
         credentials: 'include',
         headers: {
           'Content-Type': 'application/json'
         },
         //body: JSON.stringify({"idusername":email,"dataa": [5,8,4,6] })//data_localstorage})
         body: JSON.stringify({
          "organisme":organisme,
          "email":email,
          "region":region,
          "phoneNumber":phoneNumber,
        
          "recaptchaToken":recaptchaToken,

          "navigator_laguage_of_browser":sec_ls_nav_lang2_sto, //navigator_language2 in initials_inputs
          "userlocale_of_browser":sec_ls_useloc_sto, //userLocale2 in initials_inputs
          "decimalseparator_of_browser":sec_ls_decim_sep_sto, //decimalSeparator2 in initials_inputs
          "use_english_date_by_user_himeself_of_browser": secureLocalStorage.getItem("use_english_date_by_user_himeself_in_modal_storage"),//use_english_date_by_user_himeself_in_modal,

          "userTimeZone": Intl.DateTimeFormat().resolvedOptions().timeZone // 'America/New_York' //
           })//data_localstorage})
       });
 
       if (response.ok) {
         const data_response = await response.json();
         
         secureLocalStorage.setItem("ussd74kasd75_2", data_response.idusername_to_client_side);

         secureLocalStorage.setItem('organismechosen', organisme);
         secureLocalStorage.setItem('region_storage', region);
         secureLocalStorage.setItem('email_chosen', email);
         secureLocalStorage.setItem('phone_chosen', phoneNumber);
         secureLocalStorage.setItem('hisownroute', 'tab/'+data_response.hisownroute);
         secureLocalStorage.setItem('role_storage', "Owner");
         secureLocalStorage.setItem('email_chosen_to_display', email);

         secureLocalStorage.setItem('navigator_language2_storage', sec_ls_nav_lang2_sto);
         secureLocalStorage.setItem('userLocale2_storage', sec_ls_useloc_sto);
         secureLocalStorage.setItem('decimalSeparator2_storage', sec_ls_decim_sep_sto);
         secureLocalStorage.setItem('userTimeZone_storage', Intl.DateTimeFormat().resolvedOptions().timeZone); // 'America/New_York');


         //alert('data_response emailtodisplay : ' + data_response.emailtodisplay)



         // Successful registration, redir ect to the main page
         //window.location.href = '/main-page';

         props.onClose();
         console.log('Data sent successfully to the server.');
         console.log('before doing window.location.href :')
         console.log(secureLocalStorage.getItem('hisownroute'))
         window.location.href = '/tab/'+data_response.hisownroute; //secureLocalStorage.getItem('hisownroute')
         //window.location.reload();
         
         //const datajj = await response.json();
         //secureLocalStorage.setItem('token', datajj.token);
         //return datajj.token; // Return the JWT token

       } else {
         console.error('Error sending data to the server.');
       }
     } catch (error) {
       console.error('Error:', error);
     }


      /*
    try {
      const response = await fetch('http://localhost:5000/register',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "organisme":organisme,
          "region":region,
          "email":email,
          "phoneNumber":phoneNumber
        }
          )

      });
      
      if (response.status === 201) {
        // Successful registration, redir ect to the main page
        //window.location.href = '/main-page';

        var getcellmeta_of_31 = hotInstance_redux.getCellMeta(3, 1); // editable index      
        getcellmeta_of_31.renderer= function(instance, td, row, col, prop, value, cellProperties) {
          Handsontable.renderers.TextRenderer.apply(this, arguments); // Use the TextRenderer for those cells
        };
        getcellmeta_of_31.validator=undefined;
        hotInstance_redux.setCellMeta(3,1,'readOnly',false);  // editable index

        var organismechosen = organisme_data.find(item => item.val === organisme).label;
        var regionchosen = region_data.find(item => item.matriculeregion === region).region;

        hotInstance_redux.setDataAtCell(3,1,organismechosen + ' | ' + regionchosen,'changeorganismesrc') // editable index

        secureLocalStorage.setItem('organismechosen', organisme);
        secureLocalStorage.setItem('region_storage', region);
        secureLocalStorage.setItem('email_chosen', email);
        secureLocalStorage.setItem('phone_chosen', phoneNumber);
        
        var randstr=generateRandomString(14);
        secureLocalStorage.setItem("ussd74kasd75_2", randstr);
        fetchDataUsEffect1(randstr,ddatafct(last_row_after_header)); // post to /api/login

        props.onClose();

        //alert('registration successufly')
      
      } else {
        // Handle registration error
        console.log('registration failed')
      }

    } catch (error) {
      console.error('Error during registration:', error);
    }
*/
    
  };

  const [display_CreateNewTable_button,setDisplay_CreateNewTable_button]=useState(false);
  useEffect(() => {
    if(
      secureLocalStorage.getItem("ussd74kasd75_2") &&
      secureLocalStorage.getItem("email_chosen") &&
      secureLocalStorage.getItem("email_chosen_to_display") &&
      secureLocalStorage.getItem("phone_chosen") &&
      secureLocalStorage.getItem("organismechosen") &&
      secureLocalStorage.getItem("region_storage") &&
      secureLocalStorage.getItem("data_localstorage_storage_2") &&
      secureLocalStorage.getItem("hisownroute")
    ) {
      //alert('securelocalstorage items are existing')
      setDisplay_CreateNewTable_button(true);
      dispatch({ type: 'SET_DISPLAY_CREATE_NEW_TABLE', payload: true });
    } else {
      //alert('securelocalstorage items are not existing')
      dispatch({ type: 'SET_DISPLAY_CREATE_NEW_TABLE', payload: false });
      setDisplay_CreateNewTable_button(false);
    }
  }, [])
  
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
    //dispatch({ type: 'SET_DISPLAY_CREATE_NEW_TABLE', payload: false })





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
        //dispatch({ type: 'SET_DISPLAY_CREATE_NEW_TABLE', payload: false })


        //navigate('/');
        setTimeout(() => {
          //navigate('/')
          window.location.href = '/';

        }, 1000);
        //window.location.reload()
        
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
    <Dialog open={props.open} onClose={props.onClose}
    maxWidth="sm" // Adjust the maxWidth as needed
    fullWidth
    sx={{ '& .MuiDialog-paper': { minWidth: 320, maxWidth: '36%',borderRadius: 2,height:'103%' }  }} // Adjust the minWidth and maxWidth
>
      <DialogTitle sx={{fontFamily:'system-ui',backgroundColor:'#f1f1f1',fontSize:'1.8rem'}}>Données Préliminaires</DialogTitle> {/* editable langauge */}
      <IconButton
          edge="end"
          color="inherit"
          onClick={props.onClose}
          aria-label="close"
          sx={{ position: 'absolute', right: 20, top: 8 }}
        >
          <CloseIcon />
        </IconButton>

      <DialogContent sx={{minWidth:'400px',marginTop:0,textAlign:'center'}}>
        
 <FormControl 
    sx={{ m: 1, minWidth: 200 }}
    //fullWidth
   >
   <InputLabel id="demo-simple-select-label">Organisme</InputLabel> {/*May editablE */}
   <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={organisme}
    label="Organisme"
    onChange={handleOrganismeChange}
    error={submitted && errorOrganisme}
    disabled={ (props.role_of_user_component=='Owner') ? false : true}
  >
    {organisme_data.map(({val,label},index)=>{
      return (
      <MenuItem key={index} value={val}>{label}</MenuItem>
      )
    })
    }
  </Select>
</FormControl>
<br></br>
<br></br>

<FormControl 
    sx={{ m: 1, minWidth: 200 }}
    //fullWidth
   >
   <InputLabel id="demo-simple-select-label">Wilaya</InputLabel> {/* editable */}
   <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={region}
    label="Wilaya"
    onChange={handleRegionChange}
    error={submitted && errorRegion}
    disabled={ (props.role_of_user_component=='Owner') ? false : true}

    MenuProps={{
      PaperProps: {
       style: {
         maxHeight: 250, // Adjust the max height as needed
       },
    }
   }}

  >
    {region_data.map(({region,matriculeregion},index)=>{
      return (
      <MenuItem key={index} value={matriculeregion}>{region}</MenuItem>
      )
    })
    }
  </Select>
</FormControl>
<br></br>
<br></br>
<FormControl 
    sx={{ m: 1, width: 200 }}
    >
 <TextField
        label="Email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        error={submitted && errorEmail}
        helperText={submitted && errorEmail ? 'Invalid email format' : ''}
        disabled={ (props.role_of_user_component=='Owner') ? false : true}
      />
  </FormControl>
<br></br>
<br></br>
{props.role_of_user_component=='Owner' &&
  <FormControl 
    sx={{ m: 1, width: 200 }}
    >
  <TextField
        label="Phone Number"
        type="tel"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        error={submitted && errorPN}
        helperText={submitted && errorPN ? 'Invalid phone number format' : ''}
        disabled={ (props.role_of_user_component=='Owner') ? false : true}
      />
  </FormControl>
}

<br></br>
{props.role_of_user_component=='Owner' ?

<FormControl 
    sx={{ m: 1, width: 200,marginLeft:"-80px" }}
    >
  <ReCAPTCHA 
     sitekey='6LfIgpAoAAAAAEz3uqm3v5E-sCmkKrzMW6-sS48r'
     onChange={handleRecaptchaVerify}
     //size="compact"  // Change the size to compact
  />

</FormControl> :
        <DialogContentText id="alert-dialog-slide-description" align="center" color="black">
        <Typography variant="body1" color='slategrey'>
          Only the Owner who can edit these informations
        </Typography>
      </DialogContentText>

}
  
      </DialogContent>

      <DialogActions sx={{fontFamily:'system-ui',backgroundColor:'#f1f1f1',display: 'flex', justifyContent: 'space-between' }}>
      { display_create_new_table_redux ? //display_CreateNewTable_button ? //display_create_new_table_redux ? 
      <div>
      {props.role_of_user_component=='Owner' ? 
      <Tooltip>
      <Button size="small" variant="outlined" sx={{ height: '100%',textTransform: 'none' }} onClick={() => handleOpen_confirmmodal()}>
      {/* editable language Suivant */}
           <span>Create New Table</span>       
        </Button>
      </Tooltip>
       :
       <Tooltip title='Create your Own Table' placement="top">
       <Button size="small" variant="outlined" sx={{ height: '100%',textTransform: 'none' }} onClick={() => handleOpen_confirmmodal()}>
       {/* editable language Suivant */}
            <span>Create New Table</span>       
         </Button>
       </Tooltip>
 }

      </div> :
      <p>.</p>
     }
        <div>
         <Button size="small" variant="outlined" onClick={props.onClose}>Cancel</Button> {/* editable langauge */}
         <Button size="small" variant="contained" disabled={!isVerified} onClick={handleSubmit}>Submit</Button> {/* editable langauge */}
        </div>
      </DialogActions>
      <ModalConfirmNewTable open_confirmmodal={open_confirmmodal}
                  setOpen_confirmmodal={setOpen_confirmmodal}
                  handleConfirm_confirmmodal={handleConfirm_confirmmodal}
                  role_of_user_component={props.role_of_user_component}
                  />

    </Dialog>
  );
}

export default ModalEdit;