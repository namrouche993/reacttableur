import './App.css';
import Navbar from './Navbar/Navbar';
import Hottable from './Hottable';
import { useState,useEffect } from 'react';
import { last_row_after_header } from './initials_inputs.js';


function App() {

  useEffect(() => {
    // Make a POST request to collect user data when the component mounts
    fetch('http://localhost:5000/api/collectuserdata', {
      method: 'POST',
    })
      .then((response) => {
        if (response.ok) {
          console.log('User data collected.');
        } else {
          console.error('Failed to collect user data.');
        }
      })
      .catch((error) => {
        console.error('Error collecting user data:', error);
      });
  }, []);


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
