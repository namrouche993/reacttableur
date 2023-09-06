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
    <Hottable/>
    </>
  );
}

export default App;
