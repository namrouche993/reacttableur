import React, { useState } from 'react';
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
  FormHelperText
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';

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

  const [submitted, setSubmitted] = useState(false);

  const [organisme, setOrganisme] = useState('');
  const [errorOrganisme, setErrorOrganisme] = useState(false);

  const handleOrganismeChange = (event) => {
    const newValue = event.target.value;
    setOrganisme(newValue);
    setErrorOrganisme(newValue === ''); // Set error if value is empty
  };

  
  const [region, setRegion] = useState('');
  const [errorRegion, setErrorRegion] = useState(false);

  const handleRegionChange = (event) => {
    const newValue = event.target.value;
    setRegion(newValue);
    setErrorRegion(newValue === ''); // Set error if value is empty
  };



  const [email, setEmail] = useState('');
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



  const [phoneNumber, setPhoneNumber] = useState('');
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




  const handleSubmit = () => {
    setSubmitted(true);
    setErrorPN(!isValidPhoneNumber(phoneNumber));
    setErrorEmail(!isValidEmail(email));

    setErrorOrganisme(organisme==='');
    setErrorRegion(region==='');

    if (isValidEmail(email)) {
      // Do something with the valid email
      //console.log('Valid email:', email);
    } else {
      // Display error or handle invalid email
      //console.log('Invalid email:', email);
    }

    if (isValidPhoneNumber(phoneNumber)) {
      // Do something with the valid phone number
      //console.log('Valid phone number:', phoneNumber);
    } else {
      // Display error or handle invalid phone number
      //console.log('Invalid phone number:', phoneNumber);
    }


    if (organisme!=='' && region!=='' && isValidEmail(email) && isValidPhoneNumber(phoneNumber)){
        
        var getcellmeta_of_31 = hotInstance_redux.getCellMeta(3, 1); // editable index
        
        getcellmeta_of_31.renderer= function(instance, td, row, col, prop, value, cellProperties) {
          Handsontable.renderers.TextRenderer.apply(this, arguments); // Use the TextRenderer for those cells
        };
        getcellmeta_of_31.validator=undefined;
        
        hotInstance_redux.setCellMeta(3,1,'readOnly',false);  // editable index
        

        
        var organismechosen = organisme_data.find(item => item.val === organisme).label;
        var regionchosen = region_data.find(item => item.matriculeregion === region).region;

        hotInstance_redux.setDataAtCell(3,1,organismechosen + ' | ' + regionchosen) // editable index

        localStorage.setItem('organismechosen', organisme);
        localStorage.setItem('region_storage', region);
        localStorage.setItem('email_chosen', email);
        localStorage.setItem('phone_chosen', phoneNumber);
        
        props.onClose();
    }
    
  };

  return (
    <Dialog open={props.open} onClose={props.onClose}
    maxWidth="sm" // Adjust the maxWidth as needed
    fullWidth
    sx={{ '& .MuiDialog-paper': { minWidth: 320, maxWidth: '36%',borderRadius: 2 }  }} // Adjust the minWidth and maxWidth
>
      <DialogTitle sx={{fontFamily:'system-ui',backgroundColor:'#f1f1f1',fontSize:'1.8rem'}}>Choose Format</DialogTitle>
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
   <InputLabel id="demo-simple-select-label">Organisme</InputLabel>
   <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={organisme}
    label="Organisme"
    onChange={handleOrganismeChange}
    error={submitted && errorOrganisme}

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
   <InputLabel id="demo-simple-select-label">Wilaya</InputLabel>
   <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={region}
    label="Wilaya"
    onChange={handleRegionChange}
    error={submitted && errorRegion}

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
      />
  </FormControl>
<br></br>
<br></br>

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

      />
  </FormControl>


      </DialogContent>

      <DialogActions sx={{fontFamily:'system-ui',backgroundColor:'#f1f1f1'}}>
        <Button size="small" variant="outlined" onClick={props.onClose}>Cancel</Button>
        <Button size="small" variant="contained" onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ModalEdit;