import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
// import NavBar from './components/NavBar';
// import Home from './components/Home';
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';
import ManagerAssets from './components/ManagerAssets'
// import { useContext } from 'react';
// import { UserContext } from './custom-hooks/user';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const { user } = useContext(UserContext)
  return (
    <BrowserRouter>
      <div className='App'>
      {/* <NavBar /> */}
      <Routes>
        <Route path={'/'} element={<LandingPage/>} exact/>
        <Route path={'/home'}  element={<ManagerAssets/>} exact/>
        <Route path={'/dashboard'} element={<Dashboard/>} exact/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
