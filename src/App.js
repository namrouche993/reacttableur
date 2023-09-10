import './App.css';
import Navbar from './Navbar/Navbar';
import Hottable from './Hottable';
import { useState } from 'react';
import { last_row_after_header } from './initials_inputs.js';


function App() {

  return (
    <>
    <Navbar/>
    {/* Hi world */}
    <br></br>
    <div style={{marginTop:43}}>
    <Hottable/>
    </div>
    </>
  );
}

export default App;
