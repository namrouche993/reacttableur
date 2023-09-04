import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function LoadingSpinner({ open }) {
    return (
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 10 ,backgroundColor: 'rgba(0, 0, 0, 0.5)'}} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }