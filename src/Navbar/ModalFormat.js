import React, { useState } from 'react';
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

const my_array = ['val1', 'val2', 'val3', 'val4'];

function ModalFormat(props) {
  const [selectedNumericFormat, setSelectedNumericFormat] = useState('eu_numeric_format');
  const [selectedDateFormat, setSelectedDateFormat] = useState('us_date_format');
  const [selectedVal, setSelectedVal] = useState('val1');

  const handleFormatChange = (event) => {
    setSelectedNumericFormat(event.target.value);
  };

  const handleDateFormatChange = (event) => {
    setSelectedDateFormat(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission here if needed
    props.onClose();
  };

  return (
    <Dialog open={props.open} onClose={props.onClose}
    maxWidth="sm" // Adjust the maxWidth as needed
    fullWidth
    sx={{ '& .MuiDialog-paper': { minWidth: 320, maxWidth: '60%',borderRadius: 2 }  }} // Adjust the minWidth and maxWidth
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
              value="eu_numeric_format"
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
              value="us_numeric_format"
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
              value="eu_date_format"
              control={<Radio />}
              label={
                <Typography>
                  European Date Format (<span style={{ fontWeight: 'bold' }}>31/12/1990</span>)
                </Typography>
              }
              //label="European Date Format (31/12/1990)"
            />
            <FormControlLabel
              value="us_date_format"
              control={<Radio />}
              label={
                <Typography>
                  American Date Format (<span style={{ fontWeight: 'bold' }}>12/31/1990</span>)
                </Typography>
              }
            />
            <FormControlLabel
              value="de_date_format"
              control={<Radio />}
              label={
                <Typography>
                  Deutschland Date Format (<span style={{ fontWeight: 'bold' }}>31.12.1990</span>)
                </Typography>
              }
            />
            <FormControlLabel
              value="ca_date_format"
              control={<Radio />}
              label={
                <Typography>
                  Canadian Date Format (<span style={{ fontWeight: 'bold' }}>1990-12-31</span>)
                </Typography>
              }
            />
            <FormControlLabel
              value="jp_date_format"
              control={<Radio />}
              label={
                <Typography>
                  Japanese Date Format (<span style={{ fontWeight: 'bold' }}>1990/12/31</span>)
                </Typography>
              }
            />
            <FormControlLabel
              value="kr_date_format"
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
        <Button size="small" variant="outlined" onClick={props.onClose}>Cancel</Button>
        <Button size="small" variant="contained" onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ModalFormat;