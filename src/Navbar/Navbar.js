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
  


  const mynamespace0 = secureLocalStorage.getItem('hisownroute')
  if(!mynamespace0){
    var mynamespace = mynamespace0;
  } else {
    var mynamespace = mynamespace0.toString().replace('tab/','');
  }  

  socket.emit('join', mynamespace);


  socket.on('reconnect', () => {
    console.log('Reconnected to the server');
//    alert('reconnect')
    // Re-subscribe to the 'listingusers' event after reconnection
    
    socket.emit('join', mynamespace);
    socket.emit('subscribeToListingUsers');
  
    // Perform any other necessary setup after reconnection
  });

  //alert('useeffect ')
  socket.on('listingusers',(users)=>{
    //alert('listinguers')
    console.log('we are in listingusers :')
    console.log(users)
    //alert('listingusers :  ' + users)
    var uniqueSet = new Set(users);
    // Convert the Set back to an array
    var uniqueArray = Array.from(uniqueSet);
    const uniqueArraywithoutnull = uniqueArray.filter(user => user !== 'null').filter(user => user !== secureLocalStorage.getItem('email_chosen'));
    //console.log('**************ssssssssssssssssssssssOOOOOOOOOOOOOOOOOOOOOOOsss*')
    //console.log(uniqueArray)
    console.log(uniqueArraywithoutnull)

    setList_users_connecting(uniqueArraywithoutnull);
  })

  useEffect(() => {

    
    //socket.emit('join', mynamespace);
    socket.emit('subscribeToListingUsers');

    return () => {
      socket.off('reconnect');
      socket.off('listingusers');
    };
    
  }, [])

  const [role_of_user_component,setRole_of_user_component]=useState('Viewer');

  useEffect( async () => {
    try {
      var currentrouteofurl = window.location.pathname.toString().replace('/tab/','');
      const response = await fetch('http://localhost:5000/users_roles_navbar', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: secureLocalStorage.getItem('ussd74kasd75_2'),
          hisownroute:currentrouteofurl
        })
      });
      //var responsejson = await responseem.json();
      //console.log(responsejson)
      if (response.ok) {
        console.log('we are in response.ok')
        const data_response = await response.json();
        console.log('data_response  :')
        console.log(data_response)
        var role_of_user = data_response.role;
        if(role_of_user=='Owner'){
          setRole_of_user_component('Owner')

        } else if(role_of_user=='Admin'){
          setRole_of_user_component('Admin')

        } else if (role_of_user=='Writer'){
          setRole_of_user_component('Writer')

        } else if (role_of_user=='Viewer'){
          setRole_of_user_component('Viewer')
        
        } else {
          setRole_of_user_component('Viewer')
        }
        //props.onClose();
        console.log('Data sent successfully to the server.');
        //window.location.reload();
      } else {
        setRole_of_user_component('Viewer')
        console.error('Error ,Authorization is not verified.');
      }
    } catch (error) {
      setRole_of_user_component('Viewer')
      console.error('Error:', error);
    }

  
  }, [])
  
  
  return (
        <ThemeProvider theme={appTheme}>
         <AppBar position="fixed" sx={{height:50}}>
         {!props.display_modaledit ? 
         <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
            <div id='idfor2buttons'>
            <Tooltip title={<span style={{fontSize:16}}>Undo (Ctrl+Z) {role_of_user_component=='Viewer' ? " | As a Viewer, you don't have the permissions to edit" : ''} </span>} > {/* editable langauge */}
              <Button disabled={role_of_user_component=='Viewer' ? true : false} onClick={undoclickfct} color="inherit" sx={{...buttonStyles,marginRight:0.6}} > <UndoIcon sx={{ fontSize: 30 }} />  </Button>
            </Tooltip>:

            <Tooltip title={<span style={{fontSize:16}}>Redo (Ctrl+Y) {role_of_user_component=='Viewer' ? " | As a Viewer, you don't have the permissions to edit" : ''} </span>} > {/* editable langauge */}
              <Button disabled={role_of_user_component=='Viewer' ? true : false} onClick={redoclickfct} color="inherit" sx={{...buttonStyles}} > <RedoIcon sx={{ fontSize: 30 }} />  </Button>
            </Tooltip>

            </div>
            <div style={{display:'inline-flex'}}>
            {list_users_conncting.map((x,index)=>{ 
              return (
                     <div key={index} style={{marginRight:27}}>
                           <Tooltip title={`${x} is connecting now .. `}> {/* editable langauge */}
                             <IconButton style={{cursor:'default',borderTop:'double',borderColor:'green' }}>
                               {/* <AccountCircleIcon/> */}
                               <PersonIcon/>
                             </IconButton >
                             </Tooltip>
               
                           </div>
              )
            })
            }
            </div>
            <div>

            <Tooltip 
            // title={<span style={{fontSize:12,textAlign:'center',alignContent:'center',alignItems:'center',alignSelf:'centers'}}>Change format {role_of_user_component!='Owner' ? <span><br></br> Only the Owner of this table who has the permissions to Change format</span> : ''}</span>} 
            title={
              <span style={{ fontSize: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <span>Change format</span>
                {role_of_user_component !== 'Owner' ? <div>- Only the Owner of this table has the permissions to change the format -</div> : <span></span> }
              </span>
            }
            > {/* editable langauge */}
                <Button disabled={role_of_user_component!=='Owner' ? true : false} onClick={handleOpenModalformat} color="inherit" sx={{...buttonchangeformatStyles,marginRight: isSmallScreen?'0':'70px'}}> <LanguageIcon sx={{fontSize:25}}/> </Button>
              </Tooltip>

            <Tooltip
              title={
                <span style={{ fontSize: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                { (role_of_user_component=='Owner' || role_of_user_component=='Admin') ?
                    <div style={{textAlign:'center'}}>
                   Términer <br></br>et Envoyer les données {/* editable langauge */}
                  </div>
                  :
                 
                 <div>
                     Términer <br></br>Seuls les Admins qui peuvent Términer et Envoyer les données {/* editable langauge */}
                  </div> }
             
                </span>
                }
              >
                <Button disabled={ (role_of_user_component=='Owner' || role_of_user_component=='Admin') ? false : true} onClick={submitdata} variant="contained" sx={{marginRight: isSmallScreen?'0':'40px'}} endIcon={<SendIcon sx={{fontSize:32}}/> }> Send </Button> {/* editable langauge */}
            </Tooltip>


            <Tooltip
            title={
              <span style={{ fontSize: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              { (role_of_user_component=='Owner' || role_of_user_component=='Admin') ?
                  <div style={{textAlign:'center'}}>
                   Travail collaboratif<br></br>Ajouter des utilisateurs <br></br>avec des droits de modifications {/* editable langauge */}
                </div>
                :
               
               <div>
                   Travail collaboratif<br></br>Seuls les Admins qui peuvent ajouter des nouveaux utilisateurs {/* editable langauge */}
                </div> }
           
              </span>
              }
              >
                <Button disabled={ (role_of_user_component=='Owner' || role_of_user_component=='Admin') ? false : true} onClick={handleOpenModalAddUser} color="inherit" sx={{color:'black'}}  > <GroupAddIcon sx={{fontSize:26}}/> </Button> {/* editable langauge */}
            </Tooltip>

              

            <Tooltip title={<span style={{fontSize:12}}>Modifier les informations <br></br>préliminaires</span>} > {/* editable langauge */}
              <Button onClick={handleOpenModaledit} color="inherit" sx={{color:'black'}}> <AutorenewIcon sx={{fontSize:26}}/> </Button>
            </Tooltip>
              
            </div>
           </Toolbar>
           : <a></a> }

         </AppBar>
         <ModalFormat open={modalOpenformat} onClose={handleCloseModalformat} senddata={handlesending}/>
         <ModalEdit open={modalOpenedit} onClose={handleCloseModaledit} role_of_user_component={role_of_user_component}/>
         <ModalAdd open={modalOpenadd} onClose={handleCloseModaladd}/>

        </ThemeProvider>

      );
    }

export default Navbar