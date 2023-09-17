import React, { useEffect, useState } from 'react'
import { AppBar, Toolbar, Button,Tooltip, Typography, Container, useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';

import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import LanguageIcon from '@mui/icons-material/Language';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';

import SendIcon from '@mui/icons-material/Send';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { Modal } from '@mui/base';

import ModalFormat from './ModalFormat';
import ModalEdit from './ModalEdit';

import { useSelector, useDispatch } from 'react-redux'; 
import { downloadfile } from '../Download/downloadfile';

const appTheme = createTheme({
    components: {
      MuiToolbar: {
        styleOverrides: {
          root: {
            minHeight: '48px !important', // Set your desired minHeight value
            backgroundColor:'#f2f2f2',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor:'darkgrey'
          },
        },
      },
    },
  
  });

  const buttonStyles = {
    padding: 0.8, // Adjust padding as needed
    minWidth: 'auto', // Allow button to be as small as the icon
    transition: 'background-color 0.3s ease', // Transition animation
    color: 'black',
    '&:hover': {
      backgroundColor: 'darkslategray', // Hover effect
      color: 'white',
    },  
  };
  
  const buttonchangeformatStyles = {
    color:'slategray',
    '&:hover': {
      color: 'teal',
    }, 
  }


function Navbar() {
  
  const hotInstance_redux  = useSelector(state => state.hotInstance_redux);
  const data22_redux = useSelector(state => state.data22)
  
  const [modalOpenformat, setModalOpenformat] = useState(false);
  const handleOpenModalformat = () => {
    setModalOpenformat(true);
  };
  const handleCloseModalformat = () => {
    setModalOpenformat(false);
  };

  const handlesending = (input) => {
    setModalOpenformat(input)
  }


  const [modalOpenedit, setModalOpenedit] = useState(false);
  const handleOpenModaledit = () => {
    setModalOpenedit(true);
  };

 
  
  const handleCloseModaledit = () => {
    setModalOpenedit(false);
  };

  const submitdata = () => {
    //console.log('data22_redux : ')
    //console.log(data22_redux)
    alert('submitdata triggered')
    ////console.log('submitting data ')
    downloadfile(hotInstance_redux,data22_redux)
  }

  const undoclickfct = () =>{
    hotInstance_redux.undo(true)
  }

  
  const redoclickfct = () =>{
    hotInstance_redux.redo(true)
  }

  const isSmallScreen = useMediaQuery(appTheme.breakpoints.down('sm')); // Adjust the breakpoint as needed

  return (
        <ThemeProvider theme={appTheme}>
         <AppBar position="fixed" sx={{height:50}}>
         <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
            <div id='idfor2buttons'>
            <Tooltip title={<span style={{fontSize:16}}>Undo (Ctrl+Z)</span>} >
              <Button onClick={undoclickfct} color="inherit" sx={{...buttonStyles,marginRight:0.6}} > <UndoIcon sx={{ fontSize: 30 }} />  </Button>
            </Tooltip>

            <Tooltip title={<span style={{fontSize:16}}>Redo (Ctrl+Y)</span>} >
              <Button onClick={redoclickfct} color="inherit" sx={{...buttonStyles}} > <RedoIcon sx={{ fontSize: 30 }} />  </Button>
            </Tooltip>

            </div>

                 
            <div>
            <Tooltip title={<span style={{fontSize:12}}>Change format</span>} >
                <Button onClick={handleOpenModalformat} color="inherit" sx={{...buttonchangeformatStyles,marginRight: isSmallScreen?'0':'70px'}}> <LanguageIcon sx={{fontSize:25}}/> </Button>
              </Tooltip>

            <Tooltip title={<span style={{fontSize:14}}>
              <div style={{textAlign:'center'}}>
                Términer <br></br>et Envoyer les données
              </div>
              </span>} >
                <Button onClick={submitdata} variant="contained" sx={{marginRight: isSmallScreen?'0':'40px'}} endIcon={<SendIcon sx={{fontSize:32}}/> }> Send </Button>
            </Tooltip>


            <Tooltip title={<span style={{fontSize:12}}>Modifier les informations <br></br>préliminaires</span>} >
              <Button onClick={handleOpenModaledit} color="inherit" sx={{color:'black'}}> <AutorenewIcon sx={{fontSize:26}}/> </Button>
            </Tooltip>
              
            </div>
           </Toolbar>
         </AppBar>
         <ModalFormat open={modalOpenformat} onClose={handleCloseModalformat} senddata={handlesending}/>
         <ModalEdit open={modalOpenedit} onClose={handleCloseModaledit} />

        </ThemeProvider>

      );
    }

export default Navbar