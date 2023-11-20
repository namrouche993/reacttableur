import React, { useEffect, useState } from 'react'
import './App.css';
import Navbar from './Navbar/Navbar';
import Hottable from './Hottable';
import { socket } from './socket';


export default function AppHotableFinal() {

  const [connectedUser, setConnectedUser] = useState(null);
 

    return (
      <div>
       <br></br>
       {/* <h1>list connectedUser!! : {connectedUser}</h1> */}
       <Navbar display_modaledit={false} displayed_pr={true} />
       <br></br>
       <div style={{marginTop:43}}>
         <Hottable/>
        </div>
    </div>
    )
  }