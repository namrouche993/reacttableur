import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppNotFoundComponent400 from './AppNotFoundComponent400';
import AppComponent from './AppComponent';
import AppOwnComponent from './AppOwnComponent';

const App = () => {
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
