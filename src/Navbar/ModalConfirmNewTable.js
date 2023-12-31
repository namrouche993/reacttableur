import React, { useState } from 'react';

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,

    DialogTitle,
    DialogContentText,

  } from '@mui/material';

export default function ModalConfirmNewTable(props) {

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
        <DialogTitle id="alert-dialog-title">Create New Table</DialogTitle> {/* editable language */}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.role_of_user_component ? (props.role_of_user_component!='Owner' ? 
                       <span> Are you sure you want to create your own new table </span>
                       :
                       <span> Are you sure you want to reset and create a new table </span>
            ) :
            <span> Are you sure you want to reset and to create your own new table </span>
          }
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
