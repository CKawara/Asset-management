import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';
import Login from './components/Login'
import ManagerAssets from './components/ManagerAssets'
// import { useContext } from 'react';
// import { UserContext } from './custom-hooks/user';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AdminAssets from "./components/AdminAssets";

function App() {
  // const { user } = useContext(UserContext)
  return (
    <BrowserRouter>
      <div className='App'>
      <Routes>
        <Route path={'/'} element={<LandingPage/>}/>
        <Route path={'/admin'}  element={<AdminAssets/>} exact/>
        <Route path={'/manager'}  element={<ManagerAssets/>} exact/>
        <Route path={'/employee'}  element={<Home/>} exact/>
        <Route path={'/dashboard'} element={<Dashboard/>} />
        <Route path={'/login'} element={<Login/>}/>

      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
