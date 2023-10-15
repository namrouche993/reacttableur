import React from 'react'
import './App.css';
import Navbar from './Navbar/Navbar';
import Hottable from './Hottable';


export default function AppHotableFinal() {
    return (
      <div>
       <Navbar display_modaledit={false} displayed_pr={false} />
       <br></br>
       <div style={{marginTop:43}}>
         <Hottable/>
        </div>
    </div>
    )
  }