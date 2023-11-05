import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Slide,
  Typography,
  Box,
  IconButton,
  Zoom
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function ModalSuccessAdd(props) {
  const handleClose = () => {
    props.setOpen_successmodal(false);
    props.setOpen_addmodal(false);
  };

  const Transition = React.forwardRef(function Transition(props, ref) {
    //return <Slide direction="up" ref={ref} {...props} />;
    return <Zoom direction="up" ref={ref} {...props} />;

  });

  return (
    <Dialog
      open={props.open_successmodal}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">
        <Box display="flex" justifyContent="center" alignItems="center">
          <CheckCircleOutlineIcon style={{ color: '#4CAF50', fontSize: 40, marginRight: '10px' }} />
          <Typography variant="h6">Email Added Successfully!</Typography> {/* editable language */}
        </Box>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description" align="center" color="black">
          <Typography variant="body1">
             Veuillez informer votre collégue '{props.emailreceived_in_modalsuccess}' que son code d'accès (code PIN) est : <b>{props.codepin_in_modalsuccess}</b> <br></br>
            comme il peut étre informé aussi par un message sur son email.<br></br><br></br>
            le code de pin est à un usage unique (il peut étre utiliser sur un seul appareil)
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions style={{ justifyContent: 'center' }}>
        <Button onClick={handleClose} variant="contained" color="success">
          Ok!
        </Button>
      </DialogActions>
    </Dialog>
  );
}
