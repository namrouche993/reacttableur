import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppNotFoundComponent400 from './AppNotFoundComponent400';
import AppComponent from './AppComponent';
import AppOwnComponent from './AppOwnComponent';
import { useEffect } from 'react';
import  secureLocalStorage  from  "react-secure-storage";

const App = () => {
  useEffect(() => {
    // Function to fetch data
    
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/getdata'); // Replace with your API endpoint
        if (response.ok) {
          const result = await response.json();
          //setData(result); // Update the state with the fetched data
          console.log('******************************')
          console.log('******************************')
          console.log('******************************')
          console.log(result)
          console.log('------------------------------')
          console.log('------------------------------')
          console.log('------------------------------')
          //console.log(result.data00)
  //        secureLocalStorage.setItem('data_localstorage_storage_2',JSON.stringify(result.data00))
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error(error);
        // Handle errors here
      }
    };

    //alert('we will use fetchData in App.js')
    //fetchData(); // Invoke the fetch function
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
