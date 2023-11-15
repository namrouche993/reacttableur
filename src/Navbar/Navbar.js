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
import GroupAddIcon from '@mui/icons-material/GroupAdd';

import { Modal } from '@mui/base';

import ModalFormat from './ModalFormat';
import ModalEdit from './ModalEdit';
import ModalAdd from './ModalAdd';

import { useSelector, useDispatch } from 'react-redux'; 
import { downloadfile } from '../Download/downloadfile';
import { socket } from '../socket';
import IconButton from '@mui/material/IconButton';
//import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import  secureLocalStorage  from  "react-secure-storage";


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
            backgroundColor:'darkgrey',
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


function Navbar(props) {
  
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
    console.log('handleCloseModaledit :')
    console.log(props.display_modaledit)
    console.log(props.displayed_pr);
    
    props.display_modaledit ? setModalOpenedit(true) : props.displayed_pr ? setModalOpenedit(false) : setModalOpenedit(true)
    //setModalOpenedit(true)
  };


  const [modalOpenadd, setModalOpenadd] = useState(false);
  const handleOpenModalAddUser = () => {
    setModalOpenadd(true);
  }
const handleCloseModaladd = () => {
    console.log('handleCloseModaladd :')
    setModalOpenadd(false);
  };
  

  useEffect(() => {
    console.log('we are in useeffect because props.dispaly_modaledit changed')
    setModalOpenedit(props.display_modaledit);
    //window.location.reload();
  }, [props.display_modaledit])
  
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
  const [showinUser1connecting,setShowinUser1connecting]=useState(false);
  const [list_users_conncting,setList_users_connecting]=useState([]);

  useEffect(() => {
    socket.on('received_userconncted_msg',(data) =>{
      //alert('data in received_userconncted_msg is : ' + data)
      setShowinUser1connecting(data)
    })

    socket.on('list_userconncted',(data)=>{
      console.log('-------------------------------------------------------------!!!-')
      console.log(data)
      var data2_without_own_username = data.filter(element => element !== secureLocalStorage.getItem('ussd74kasd75_2'));
      setList_users_connecting(data2_without_own_username)
      console.log(data2_without_own_username)
      console.log(list_users_conncting)
    })
    console.log('list_users_conncting :')
    console.log(list_users_conncting)
  }, [])
  
  return (
        <ThemeProvider theme={appTheme}>
         <AppBar position="fixed" sx={{height:50}}>
         {!props.display_modaledit ? 
         <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
            <div id='idfor2buttons'>
            
            <Tooltip title={<span style={{fontSize:16}}>Undo (Ctrl+Z)</span>} > {/* editable langauge */}
              <Button onClick={undoclickfct} color="inherit" sx={{...buttonStyles,marginRight:0.6}} > <UndoIcon sx={{ fontSize: 30 }} />  </Button>
            </Tooltip>:

            <Tooltip title={<span style={{fontSize:16}}>Redo (Ctrl+Y)</span>} > {/* editable langauge */}
              <Button onClick={redoclickfct} color="inherit" sx={{...buttonStyles}} > <RedoIcon sx={{ fontSize: 30 }} />  </Button>
            </Tooltip>

            </div>
            {list_users_conncting.map((x,index)=>{ 
              return (
                          <div>
                          <Tooltip title="User1 is connecting now .. "> {/* editable langauge */}
                             <IconButton style={{cursor:'default',borderTop:'double' }}>
                               {/* <AccountCircleIcon/> */}
                               <PersonIcon/>
                             </IconButton >
                             </Tooltip>
               
                           </div>
              )
            })
            }

            <div>

            <Tooltip title={<span style={{fontSize:12}}>Change format</span>} > {/* editable langauge */}
                <Button onClick={handleOpenModalformat} color="inherit" sx={{...buttonchangeformatStyles,marginRight: isSmallScreen?'0':'70px'}}> <LanguageIcon sx={{fontSize:25}}/> </Button>
              </Tooltip>

            <Tooltip title={<span style={{fontSize:14}}>
              <div style={{textAlign:'center'}}>
                Términer <br></br>et Envoyer les données {/* editable langauge */}
              </div>
              </span>} >
                <Button onClick={submitdata} variant="contained" sx={{marginRight: isSmallScreen?'0':'40px'}} endIcon={<SendIcon sx={{fontSize:32}}/> }> Send </Button> {/* editable langauge */}
            </Tooltip>

            <Tooltip title={<span style={{fontSize:12}}>
            <div style={{textAlign:'center'}}>
              Travail collaboratif<br></br>Ajouter des utilisateurs <br></br>avec des droits de modifications
            </div>
              </span>} > {/* editable langauge */}
              <Button onClick={handleOpenModalAddUser} color="inherit" sx={{color:'black'}}> <GroupAddIcon sx={{fontSize:26}}/> </Button>
            </Tooltip>
              

            <Tooltip title={<span style={{fontSize:12}}>Modifier les informations <br></br>préliminaires</span>} > {/* editable langauge */}
              <Button onClick={handleOpenModaledit} color="inherit" sx={{color:'black'}}> <AutorenewIcon sx={{fontSize:26}}/> </Button>
            </Tooltip>
              
            </div>
           </Toolbar>
           : <a></a> }

         </AppBar>
         <ModalFormat open={modalOpenformat} onClose={handleCloseModalformat} senddata={handlesending}/>
         <ModalEdit open={modalOpenedit} onClose={handleCloseModaledit}/>
         <ModalAdd open={modalOpenadd} onClose={handleCloseModaladd}/>

        </ThemeProvider>

      );
    }

export default Navbar