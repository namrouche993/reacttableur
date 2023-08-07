import React from 'react'
import { AppBar, Toolbar, Button,Tooltip, Typography, Container } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';

import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import LanguageIcon from '@mui/icons-material/Language';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';


const appTheme = createTheme({
    palette: {
    //   mode: 'dark',
      primary: {
        main: '#f2f2f2',
      },
    },
  });

  const buttonStyles = {
    padding: 0.8, // Adjust padding as needed
    minWidth: 'auto', // Allow button to be as small as the icon
    transition: 'background-color 0.3s ease', // Transition animation
    '&:hover': {
      backgroundColor: 'darkslategray', // Hover effect
      color: 'white',
    },  
  };


function Navbar() {
    return (
        <ThemeProvider theme={appTheme}>
         <AppBar position="static">
         <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <div id='idfor2buttons'>
            <Tooltip title={<span style={{fontSize:16}}>Undo (Ctrl+Z)</span>} >
              <Button color="inherit" sx={{...buttonStyles,marginRight:0.6}} > <UndoIcon sx={{ fontSize: 32 }} />  </Button>
            </Tooltip>

            <Tooltip title={<span style={{fontSize:16}}>Redo (Ctrl+Y)</span>} >
              <Button color="inherit" sx={{...buttonStyles}} > <RedoIcon sx={{ fontSize: 32 }} />  </Button>
            </Tooltip>

            </div>

            <div>
            <Tooltip title={<span style={{fontSize:16}}>Change format</span>} >
              <Button color="inherit"> <LanguageIcon sx={{fontSize:32}}/> </Button>
            </Tooltip>

            <Tooltip title={<span style={{fontSize:16}}>Change format</span>} >
              <Button color="inherit"> <LanguageOutlinedIcon sx={{fontSize:32}}/> </Button>
            </Tooltip>

            <Tooltip title={<span style={{fontSize:16}}>Change format</span>} >
              <Button color="inherit"> <LanguageRoundedIcon sx={{fontSize:32}}/> </Button>
            </Tooltip>
              
            </div>
           </Toolbar>
         </AppBar>
        </ThemeProvider>
      );
    }

export default Navbar