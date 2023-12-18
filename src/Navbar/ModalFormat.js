import React, { useEffect, useState } from 'react';
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
  Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import  secureLocalStorage  from  "react-secure-storage";

import { useSelector, useDispatch } from 'react-redux'; 

import { userlocale2_bydefault_ifnotexist,
        decimalseparator2_bydefault_ifnotexist,
        navigator_language2_bydefault_ifnotexist,

        convertDateFormat,
        all_european_formal_are_test,
        all_european_formal_are,

        getInputValue_hot_undone2,
        setInputValue_hot_undone2,

        usTimeZones,
        userTimeZone,
        use_en_time,

        date_format_if_english_is_not_accepted
       } from '../initials_inputs.js'
import _ from 'lodash';
import {Columns_data_for_Validator_renders} from '../Hothooks/Columns_data_for_Validator_renders.js'
import { startsWithElement } from '../Tools/startsWithElement.js';

const my_array = ['val1', 'val2', 'val3', 'val4'];


function ModalFormat(props) {
  const dispatch = useDispatch();

  const userLocale2_redux  = useSelector(state => state.userLocale2);
  const decimalSeparator2_redux  = useSelector(state => state.decimalSeparator2);
  const navigator_language2_redux  = useSelector(state => state.navigator_language2);
  //alert('before navigator_language2_redux is : ' + navigator_language2_redux)

  const [selectedNumericFormat, setSelectedNumericFormat] = useState(decimalSeparator2_redux);
  const [selectedDateFormat, setSelectedDateFormat] = useState(navigator_language2_redux);
  //alert('after navigator_language2_redux is : ' + navigator_language2_redux)
  const [selectedNumericFormatsaved, setSelectedNumericFormatsaved] = useState(decimalSeparator2_redux);
  const [selectedDateFormatsaved, setSelectedDateFormatsaved] = useState(navigator_language2_redux);

  const [selectedVal, setSelectedVal] = useState('val1');
  const hotInstance_redux  = useSelector(state => state.hotInstance_redux);
  const navigator_language2_avant_modify = useSelector(state => state.navigator_language2_avant_modify);
  // const hot_undone2 = useSelector(state => state.hot_undone2);

  const ds_haschanged = useSelector(state => state.ds_haschanged);
  const use_english_date_by_user_himeself_in_modal = useSelector(state => state.use_english_date_by_user_himeself_in_modal);
  const use_english_date_by_user_himeself_in_modal_withoutfct = useSelector(state => state.use_english_date_by_user_himeself_in_modal_withoutfct);
  
  const [selected_use_english_manually,setSelected_use_english_manually]=useState(use_english_date_by_user_himeself_in_modal)

  const handleFormatChange = (event) => {
    setSelectedNumericFormat(event.target.value);
  };

  const handleDateFormatChange = (event) => {
    setSelectedDateFormat(event.target.value);
  };

  useEffect(() => {
  if(use_english_date_by_user_himeself_in_modal==false){
    if( (navigator_language2_redux=='en-US' && !startsWithElement(usTimeZones,userTimeZone)) || (navigator_language2_redux=='en-US' && !use_en_time==true)) {
      
      dispatch({ type: 'SET_navigator_language2', payload: date_format_if_english_is_not_accepted });  // WITH REDUX
      //secureLocalStorage.setItem('aaaaaa', 55555555);
      secureLocalStorage.setItem('navigator_language2_storage', date_format_if_english_is_not_accepted);
      setSelectedDateFormat(date_format_if_english_is_not_accepted);

    }
  }
  
  }, [navigator_language2_redux])
  

  const handleSubmit = async () => {
    console.log('we are in handleSubmit of modalFormat !!!!!!!!!!!!!!!')
    try {
      
    // Handle form submission here if needed
    var new_selectedNumericFormat = selectedNumericFormat;
    var new_selectedDateFormat = selectedDateFormat;

    dispatch({ type: 'SET_decimalSeparator2', payload: new_selectedNumericFormat });  // WITH REDUX
    dispatch({ type: 'SET_navigator_language2', payload: new_selectedDateFormat });  // WITH REDUX

    secureLocalStorage.setItem('decimalSeparator2_storage', new_selectedNumericFormat);
    secureLocalStorage.setItem('navigator_language2_storage', new_selectedDateFormat);
    
    setSelectedNumericFormatsaved(new_selectedNumericFormat);
    setSelectedDateFormatsaved(new_selectedDateFormat);


    var data_to_convert = hotInstance_redux.getData(); // Get the data from the Handsontable  
    
    const NumColumnsToConvert = [7,8]; // editable index numeric Specify the indices of the columns to convert
    const startRowIndex = 5; // editable Specify the starting row index for conversion
    const DateColumnsToConvert = [6]; // editable index date //is_date_exist==false
    const changesdata_numeric = [];
    const changesdata_date = []; //is_date_exist==false

  if(new_selectedDateFormat!==navigator_language2_redux){ //is_date_exist==false
    data_to_convert.forEach((row, rowIndex) => {
      if (rowIndex > startRowIndex) {
        DateColumnsToConvert.forEach(columnIndex => {
          const cellValueDate = row[columnIndex];
          if(cellValueDate!==null && cellValueDate!=='' && cellValueDate!==' ' && cellValueDate!==undefined){     
               outerLoop: for (const lang of dateValues) {
                  for (const lang2 of dateValues) {
                    if(navigator_language2_redux==lang && new_selectedDateFormat==lang2){
                      ////console.log('before convertdateformat :')
                      ////console.log(cellValueDate)
                      ////console.log(lang)
                      ////console.log(lang2)
                      var convertedDate = convertDateFormat(cellValueDate, lang, lang2);
                         if(convertedDate!=cellValueDate){
                             var changeonedata = [rowIndex, columnIndex, convertedDate];
                             changesdata_date.push(changeonedata);
                         }
                        break outerLoop;
                      }
                   }
               }

          }
        })
      }
       })

  for (let index = 0; index<hotInstance_redux.undoRedo.doneActions.length; index++) {
        //console.log('index : ')
        //console.log(index) 
        hotInstance_redux.undoRedo.doneActions[index].changes.forEach((x,y)=>{
          //console.log('x of foreach : ')
          //console.log(x)
          if(x[1]==6) {  // editable index
            if(x[2]!==null && x[2]!=='' && x[2]!==' '){
              x[2]=convertDateFormat(x[2], navigator_language2_redux, new_selectedDateFormat) 
            }
            if(x[3]!==null && x[3]!=='' && x[3]!==' '){
              x[3]=convertDateFormat(x[3], navigator_language2_redux, new_selectedDateFormat) 
            }
            }
        })
      }

for (let index = 0; index<hotInstance_redux.undoRedo.undoneActions.length; index++) {
  //console.log('index : ')
  //console.log(index) 
  hotInstance_redux.undoRedo.undoneActions[index].changes.forEach((x,y)=>{
    //console.log('x of foreach : ')
    //console.log(x)
    if(x[1]==6) {  // editable index
      if(x[2]!==null && x[2]!=='' && x[2]!==' '){
        x[2]=convertDateFormat(x[2], navigator_language2_redux, new_selectedDateFormat) 
      }
      if(x[3]!==null && x[3]!=='' && x[3]!==' '){
        x[3]=convertDateFormat(x[3], navigator_language2_redux, new_selectedDateFormat) 
      }
      }
  })
}
        if(new_selectedDateFormat=='en-US'){
          //alert('we will change to en-US')
          dispatch({ type: 'SET_use_english_date_by_user_himeself_in_modal', payload: true });  // WITH REDUX
          
          secureLocalStorage.setItem('use_english_date_by_user_himeself_in_modal_storage', true);
          setSelected_use_english_manually(true);
          //setInputValue_use_english_date_by_user_himeself_in_modal(true)
        } else {
          dispatch({ type: 'SET_use_english_date_by_user_himeself_in_modal', payload: false });  // WITH REDUX
          secureLocalStorage.setItem('use_english_date_by_user_himeself_in_modal_storage', false);
          //setInputValue_use_english_date_by_user_himeself_in_modal(false)
        }
        

        dispatch({ type: 'SET_navigator_language2_avant_modify', payload: navigator_language2_redux });  // WITH REDUX
        secureLocalStorage.setItem('navigator_language2_avant_modify_storage', navigator_language2_redux);

        dispatch({ type: 'SET_navigator_language2', payload: selectedDateFormat });  // WITH REDUX
        secureLocalStorage.setItem('navigator_language2_storage', selectedDateFormat);

        //dispatch({ type: 'SET_hot_undone2', payload: _.cloneDeep(hotInstance_redux.undoRedo.undoneActions) });  // WITH REDUX
        
        setInputValue_hot_undone2(_.cloneDeep(hotInstance_redux.undoRedo.undoneActions))


        hotInstance_redux.setDataAtRowProp(changesdata_date,'dataatrowprop_convert_date');

        //alert('we called getinput hotundone2')

  }

console.log('we will use modalformat with numbers now :')
console.log(decimalSeparator2_redux)
console.log(new_selectedNumericFormat)

if(decimalSeparator2_redux!=new_selectedNumericFormat){
  if(new_selectedNumericFormat==','){
    if(all_european_formal_are_test==true && all_european_formal_are=='fr'){ // editable 'fr the change it if the previous is true'
      // when we set the numeric format always be in fr 1 234 567.89  and modal language is in fr
      console.log('test 1 to ,')
      dispatch({ type: 'SET_userLocale2', payload: 'fr' });  // // editable if it's necessary
      secureLocalStorage.setItem('userLocale2_storage', 'fr');

      //setTitlemodalformat('fr'); // editable LATEEEEEEEEEEEEEEEERR if it's necessary

    } else if( (1234567.73).toLocaleString(Intl.DateTimeFormat().resolvedOptions().locale, { style: 'decimal' }).substring(9, 10).toString()==','){
      console.log('test 2 to ,')

      dispatch({ type: 'SET_userLocale2', payload: Intl.DateTimeFormat().resolvedOptions().locale });  // // editable if it's necessary
      secureLocalStorage.setItem('userLocale2_storage', Intl.DateTimeFormat().resolvedOptions().locale );

      //setTitlemodalformat(Intl.DateTimeFormat().resolvedOptions().locale);

      } else {
        console.log('test 3 to ,')
        //alert('i think we will be here ')
        dispatch({ type: 'SET_userLocale2', payload: 'fr' });  // // editable if it's necessary
        secureLocalStorage.setItem('userLocale2_storage', 'fr');

        //setTitlemodalformat('en')  editabler LATEEEEEEEEEEEEEEEEEEEEER
      }
      console.log('whatever 4 to decimalstorage_storage ,')
      dispatch({ type: 'SET_decimalSeparator2', payload: ',' });  // WITH REDUX
      secureLocalStorage.setItem('decimalSeparator2_storage', ',');

      console.log('we will cal data_to_convert for each to change the values')
      data_to_convert.forEach((row, rowIndex) => {
            if (rowIndex > startRowIndex) {
                NumColumnsToConvert.forEach(columnIndex => {
                     const cellValue = row[columnIndex];
                     if(cellValue!==null & cellValue!==undefined){
                       const convertedNumber = cellValue.toString().replace(/\./g, ',');
                       if(convertedNumber!=cellValue){
                         //////console.log('convert dontequal to cellvalue : ')
                         //////console.log(convertedNumber)
                         //////console.log(cellValue)
                         var changeonedata = [rowIndex, columnIndex, convertedNumber];
                         changesdata_numeric.push(changeonedata);
                    }
                  }
                });
              }
          });

          console.log('we will change previous by undoredo for each to change the values')

for (let index = 0; index<hotInstance_redux.undoRedo.undoneActions.length; index++) {
hotInstance_redux.undoRedo.undoneActions[index].changes.forEach((x,y)=>{
  //////console.log('x in foreach :')
  if( // editable index
    x[1] == 7 || x[1] == 8
    ){
      if(x[2]!==null && x[2]!=='' && x[2]!==' '){
        x[2]=x[2].toString().replace(/\./g, ',');
      }
      if(x[3]!==null && x[3]!=='' && x[3]!==' '){
        x[3]=x[3].toString().replace(/\./g, ',');
      }
    }
})
}
          dispatch({ type: 'SET_ds_haschanged', payload: true });  // WITH REDUX
          secureLocalStorage.setItem('ds_haschanged_storage', true);

          //dispatch({ type: 'SET_hot_undone2', payload: _.cloneDeep(hotInstance_redux.undoRedo.undoneActions) });  // WITH REDUX
          setInputValue_hot_undone2(_.cloneDeep(hotInstance_redux.undoRedo.undoneActions))

                     
          hotInstance_redux.setDataAtRowProp(changesdata_numeric,'dataatrowprop_convert_to_fr');
          //console.log('changesdata_numeric : ')
          //console.log(changesdata_numeric)
          //alert('we made setDataatrowprop of changesdata_numeric')
  } else {
    dispatch({ type: 'SET_userLocale2', payload: 'en' });  // WITH REDUX
    secureLocalStorage.setItem('userLocale2_storage', 'en');

    dispatch({ type: 'SET_decimalSeparator2', payload: '.' });  // WITH REDUX
    secureLocalStorage.setItem('decimalSeparator2_storage', '.');

      data_to_convert.forEach((row, rowIndex) => {
            if (rowIndex > startRowIndex) {
              //console.log('----------------')
                NumColumnsToConvert.forEach(columnIndex => {
                     const cellValue = row[columnIndex];
                   if(cellValue!==null & cellValue!==undefined){
                     const convertedNumber = cellValue.toString().replace(/,/g, '.');
                     if(convertedNumber!=cellValue){
                       ////console.log('convert dontequal to cellvalue : ')
                       ////console.log(convertedNumber)
                       ////console.log(cellValue)
                       var changeonedata = [rowIndex, columnIndex, convertedNumber];
                       changesdata_numeric.push(changeonedata);
                    }
                  }
                });
              }
          });

          for (let index = 0; index<hotInstance_redux.undoRedo.undoneActions.length; index++) {
hotInstance_redux.undoRedo.undoneActions[index].changes.forEach((x,y)=>{
  ////console.log('x in foreach :')
  if( // editable
    x[1] == 7 || x[1] == 8    ){
      if(x[2]!==null && x[2]!=='' && x[2]!==' '){
         x[2]=x[2].toString().replace(/,/g, '.');
      }
      if(x[3]!==null && x[3]!=='' && x[3]!==' '){
           x[3]=x[3].toString().replace(/,/g, '.');
      }
    }
})
}

dispatch({ type: 'SET_ds_haschanged', payload: true });  // WITH REDUX
secureLocalStorage.setItem('ds_haschanged_storage', true);

//dispatch({ type: 'SET_hot_undone2', payload: _.cloneDeep(hotInstance_redux.undoRedo.undoneActions) });  // WITH REDUX
setInputValue_hot_undone2(_.cloneDeep(hotInstance_redux.undoRedo.undoneActions))
//secureLocalStorage.setItem('hot_undone2_storage', _.cloneDeep(hotInstance_redux.undoRedo.undoneActions)); // editable if we save the undoredo

hotInstance_redux.setDataAtRowProp(changesdata_numeric,'dataatrowprop_convert_to_en');
  }

}



if(decimalSeparator2_redux!=new_selectedNumericFormat || new_selectedDateFormat!==navigator_language2_redux ){

  var currentrouteofurl = window.location.pathname.toString().replace('/tab/',''); // editable later , in the finished webpage , maybe the webpage url would be www.thewebsiteclient.com/theapplication/tab/ownroute
  
  //var sec_ls_nav_lang2_sto = secureLocalStorage.getItem("navigator_language2_storage") ? secureLocalStorage.getItem("navigator_language2_storage") : navigator.language; // editable if we set always navigator.language
  if(secureLocalStorage.getItem("navigator_language2_storage")){
    var sec_ls_nav_lang2_sto =secureLocalStorage.getItem("navigator_language2_storage");
  } else {
    if((navigator_language2_redux=='en-US' && startsWithElement(usTimeZones,userTimeZone) && use_en_time==true) || use_english_date_by_user_himeself_in_modal==false) {
      var sec_ls_nav_lang2_sto = 'en-US';
      dispatch({ type: 'SET_use_english_date_by_user_himeself_in_modal', payload: true });  // WITH REDUX
      secureLocalStorage.setItem("use_english_date_by_user_himeself_in_modal_storage",true)

    } else {
      var sec_ls_nav_lang2_sto = date_format_if_english_is_not_accepted;
      dispatch({ type: 'SET_use_english_date_by_user_himeself_in_modal', payload: false });  // WITH REDUX
      secureLocalStorage.setItem("use_english_date_by_user_himeself_in_modal_storage",false)


    }
  }

var sec_ls_useloc_sto = secureLocalStorage.getItem("userLocale2_storage") ? secureLocalStorage.getItem("userLocale2_storage") : Intl.DateTimeFormat().resolvedOptions().locale  // editable if we set always userlocale
var sec_ls_decim_sep_sto = secureLocalStorage.getItem("decimalSeparator2_storage") ? secureLocalStorage.getItem("decimalSeparator2_storage") : (1234567.73).toLocaleString(sec_ls_useloc_sto, { style: 'decimal' }).substring(9, 10).toString();  // editable if we set always separtor

console.log('we will cal changeformat request to en')
console.log(sec_ls_decim_sep_sto)
//alert('we will change use_english_date_by_user_himeself_in_mo dal_storage to : '  + secureLocalStorage.getItem("use_english_date_by_user_himeself_in_modal_storage"))
var response_chfo = await fetch('http://localhost:5000/changeformat', {
  method: 'POST',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    currentrouteofurl: currentrouteofurl,
    username:secureLocalStorage.getItem("ussd74kasd75_2"),
    "navigator_laguage_of_browser":sec_ls_nav_lang2_sto, //navigator_language2 in initials_inputs
    "userlocale_of_browser":sec_ls_useloc_sto, //userLocale2 in initials_inputs
    "decimalseparator_of_browser":sec_ls_decim_sep_sto, //decimalSeparator2 in initials_inputs
    "use_english_date_by_user_himeself_in_modal_of_browser":secureLocalStorage.getItem("use_english_date_by_user_himeself_in_modal_storage")
  })
})
console.log('response_chfo')
console.log(response_chfo)

if (response_chfo.ok) {
  console.log('response.ok true in modalformat changeformat request')
} else {
  console.log('response. not ok')
}

props.sendnewformatparameters([new_selectedNumericFormat,new_selectedDateFormat])
}
    props.onClose();
    setTimeout(() => {
        //window.location.reload();
    }, 2000);
} catch (error) {
   console.log('Error in handleSubmit of ModalFormat !!!!!!!!!!!!!! : ' + error)   
}
  }

  

  
  const onClosing = () =>{
   //alert('we ar einside onclosing')
   setSelectedNumericFormat(selectedNumericFormatsaved)
   setSelectedDateFormat(selectedDateFormatsaved)
   props.senddata(props.onClose())
  }

  const dateFormats0 = [
    {val:'fr-FR',name:'European Date Format',example:'31/12/1990'},
    {val:'en-US',name:'American Date Format',example:'12/31/1990'},
    {val:'de-DE',name:'Deutchland Date Format',example:'31.12.1990'},
    {val:'en-CA',name:'Canadian Date Format',example:'1990-12-31'},
    {val:'ja-JP',name:'Japanese Date Format',example:'1990/12/31'},
    {val:'ko-KR',name:'Korean Date Format',example:'1990.12.31'}
  ];

  const dateValues = [  // editable if it is necessary
    'fr-FR',
    'en-US',
    'de-DE',
    'en-CA',
    'ja-JP',
    'ko-KR'
  ]; 

  const numericValues = [
    ',',
    '.'
  ]

  useEffect(() => {
    if (!numericValues.includes((1234567.73).toLocaleString(userLocale2_redux, { style: 'decimal' }).substring(9, 10))){
      dispatch({ type: 'SET_userLocale2', payload: userlocale2_bydefault_ifnotexist });  // WITH REDUX
      dispatch({ type: 'SET_decimalSeparator2', payload: decimalseparator2_bydefault_ifnotexist });  // WITH REDUX
      
      secureLocalStorage.setItem('userLocale2_storage', userlocale2_bydefault_ifnotexist);
      secureLocalStorage.setItem('decimalSeparator2_storage', decimalseparator2_bydefault_ifnotexist);

      //setInputValue_userLocale2(userlocale2_bydefault_ifnotexist);      
      //setInputValue_decimalSeparator2(decimalseparator2_bydefault_ifnotexist)      
      }

      if (!dateValues.includes(navigator_language2_redux)){ //is_date_exist==false
          dispatch({ type: 'SET_navigator_language2', payload: navigator_language2_bydefault_ifnotexist });  // WITH REDUX
          secureLocalStorage.setItem('navigator_language2_storage', navigator_language2_bydefault_ifnotexist);
          // editable later for russian and turkey and some others
        }
    
  
  })
  

  return (
    <Dialog open={props.open} onClose={onClosing}
    maxWidth="sm" // Adjust the maxWidth as needed
    fullWidth
    sx={{ '& .MuiDialog-paper': { minWidth: 320, maxWidth: '60%',borderRadius: 2 }  }} // Adjust the minWidth and maxWidth
>
      <DialogTitle sx={{fontFamily:'system-ui',backgroundColor:'#f1f1f1',fontSize:'1.8rem'}}>Choose Format</DialogTitle>
      <IconButton
          edge="end"
          color="inherit"
          onClick={onClosing}
          aria-label="close"
          sx={{ position: 'absolute', right: 20, top: 8 }}
        >
          <CloseIcon />
        </IconButton>

      <DialogContent sx={{minWidth:'400px',marginTop:0}}>
        
        {/* <DialogContentText >
          Choose Format
        </DialogContentText> */}
        <Grid container spacing={1}> {/* Use Grid container */}
          <Grid item xs={6}> {/* Divide the space for two RadioGroups */}
        <FormControl component="fieldset">
          <FormLabel component="legend">Choose the numeric format : </FormLabel>
          <RadioGroup
            name="numeric_format"
            value={selectedNumericFormat}
            onChange={handleFormatChange}
          >
            <FormControlLabel
              value=","
              control={<Radio />}
              label={
                <Typography sx={{lineHeight:1,marginTop:'10px'}}>
                  European Numeric Format (<span style={{ fontWeight: 'bold' }}>1500,2</span>)
                  <br></br>
                  <span style={{fontSize:'11px'}}>(comma , as Decimal Separator)</span>
                </Typography>
              }
            />
            <FormControlLabel
              value="."
              control={<Radio />}
              label={
                <Typography sx={{lineHeight:1,marginTop:'12px'}}>
                  American Numeric Format (<span style={{ fontWeight: 'bold' }}>1500.2</span>)
                  <br></br>
                  <span style={{fontSize:'11px'}}>(dot . as Decimal Separator)</span>
                </Typography>
              }
            />
          </RadioGroup>
        </FormControl>
        </Grid>
          <Grid item xs={6}> {/* Divide the space for two RadioGroups */}
        <FormControl component="fieldset">
          <FormLabel component="legend">Choose the date format:</FormLabel>
          <RadioGroup
            name="date_format"
            value={selectedDateFormat}
            onChange={handleDateFormatChange}
          >
            <FormControlLabel
              value="fr-FR"
              control={<Radio />}
              label={
                <Typography>
                  European Date Format (<span style={{ fontWeight: 'bold' }}>31/12/1990</span>)
                </Typography>
              }
              //label="European Date Format (31/12/1990)"
            />
            <FormControlLabel
              value="en-US"
              control={<Radio />}
              label={
                <Typography>
                  American Date Format (<span style={{ fontWeight: 'bold' }}>12/31/1990</span>)
                </Typography>
              }
            />
            <FormControlLabel
              value="de-DE"
              control={<Radio />}
              label={
                <Typography>
                  Deutschland Date Format (<span style={{ fontWeight: 'bold' }}>31.12.1990</span>)
                </Typography>
              }
            />
            <FormControlLabel
              value="en-CA"
              control={<Radio />}
              label={
                <Typography>
                  Canadian Date Format (<span style={{ fontWeight: 'bold' }}>1990-12-31</span>)
                </Typography>
              }
            />
            <FormControlLabel
              value="ja-JP"
              control={<Radio />}
              label={
                <Typography>
                  Japanese Date Format (<span style={{ fontWeight: 'bold' }}>1990/12/31</span>)
                </Typography>
              }
            />
            <FormControlLabel
              value="ko-KR"
              control={<Radio />}
              label={
                <Typography>
                  Korean Date Format (<span style={{ fontWeight: 'bold' }}>1990.12.31</span>)
                </Typography>
              }
            />

          </RadioGroup>
        </FormControl>
        </Grid>
        </Grid>
        
      </DialogContent>

      <DialogActions sx={{fontFamily:'system-ui',backgroundColor:'#f1f1f1'}}>
        <Button size="small" variant="outlined" onClick={onClosing}>Cancel</Button>
        <Button size="small" variant="contained" onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ModalFormat;