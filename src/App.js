import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppNotFoundComponent400 from './AppNotFoundComponent400';
import AppComponent from './AppComponent';
import AppOwnComponent from './AppOwnComponent';
import { useEffect } from 'react';
import  secureLocalStorage  from  "react-secure-storage";
import { socket } from './socket';
// import io from 'socket.io-client';
// const socket = io('http://localhost:5000'); // Replace with your server URL


const App = () => {
  useEffect(() => {
    // Function to fetch data
    socket.emit('user_connected',{msg:'HI FROM A USER'})

    socket.on('received_userconncted_msg',(data) =>{
      ///alert(data.msg)
    })

    socket.on('disconnect', () => {
      console.log('Disconnected from the server');
      //alert('ONE USER disconnect')
      // Add logic to handle the disconnection
    });

    socket.on('received_userdisconnect',()=>{
      //alert('ONE USER DISCONNECT')
    })
    /*
    socket.emit('user_connected', (msg) => {
      console.log('we will alert ')
      //alert('NEW USER CONNECTED')
      //setMessages((prevMessages) => [...prevMessages, msg]);
    });

    */
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/getdata',{
          method: 'POST',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json'
            },
            
            //body: JSON.stringify({"idusername":email,"dataa": [5,8,4,6] })//data_localstorage})
            body: JSON.stringify({
             //"act_data":hotInstance_existed,
             "hisroute":secureLocalStorage.getItem('hisownroute'),
             "idusername":secureLocalStorage.getItem('ussd74kasd75_2')
           }) //data_localstorage})
          })
          if (response.ok) {
            const result = await response.json();
            return result.data00;
          } else {
            return null;
            // new Error('Failed to fetch data');
          }
        } catch (error) {
          console.error(error);
          return null;
        }
    };

    //alert('we will use fetchData in App.js')
    //fetchData(); // Invoke the fetch function

    return () => {
      socket.disconnect();
    };

  }, []);


  return (
    <>
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<AppComponent/>}>        </Route>
          <Route path="/tab/:ownroute" element={<AppOwnComponent/>}>        </Route>
          <Route path="*" element={<AppNotFoundComponent400/>}>        </Route>
          
       </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
