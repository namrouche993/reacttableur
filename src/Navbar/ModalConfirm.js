import React, { useState } from 'react';

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,

    DialogTitle,
    DialogContentText,

  } from '@mui/material';

export default function ModalConfirm(props) {

  const handleClose = () => {
    props.setOpen_confirmmodal(false)
  }

  return (
    <div>
    <Dialog
        open={props.open_confirmmodal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirm Removal</DialogTitle> {/* editable language */}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.messageremoveemail} <b>{props.emailreceived_in_modalconfirm_toremove}</b> {/* editable language */}
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant='outlined'>
            Cancel {/* editable language */}
          </Button>
          <Button onClick={props.handleConfirm_confirmmodal}  variant="contained" color="primary" autoFocus>
            Confirm {/* editable language */}
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  )
}
