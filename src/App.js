import React, { useEffect } from "react";
import './App.css';
import { Route, Routes} from "react-router-dom";
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import Login from './components/Login'
import ManagerAssets from './components/ManagerAssets'
import { useContext } from 'react';
import { UserContext } from './custom-hooks/user';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AdminAssets from "./components/AdminAssets";
import UserDashboard from "./components/User-Dashboard/UserDashboard";
import SideBar from "./components/SideBar";
import Dashboard from "./components/AdminDashboard";
import ManagerDashboard from "./components/ManagerDashboard";
import AllocatedTable from "./components/allocated";

function App() {
  const { user, setUser} = useContext(UserContext)
  useEffect(() => {
    fetch("http://localhost:3000/me")
    .then(r => {
      if(r.ok){
        r.json().then(res => {
          console.log(res)
        })
      }
    })
  }, [])
  return (
      <div className='App'>
        <Routes>
          <Route path={'/'} element={<LandingPage/>}/>
          <Route path={'/admin'}  element={<AdminAssets/>} exact/>
          <Route path={'/dashboard'} element={<Dashboard/>} exact />
          <Route path={'/manager'}  element={<ManagerAssets/>} exact/>
          <Route path={'/managerdashboard'}  element={<ManagerDashboard/>} exact/>
          <Route path={'/employee'}  element={<Home/>} exact/>
          <Route path={'/allocated'}  element={<AllocatedTable/>} exact/>
          <Route path={'/userdashboard'} element={<UserDashboard/>} exact />
          <Route path={'/side'} element={<SideBar/>} exact />
          <Route path={'/login'} element={<Login/>}/>
        </Routes>
      </div>
  );
}

export default App;
