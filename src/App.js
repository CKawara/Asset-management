import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Login from './components/Login/Login';
import UserDashboard from './components/User-Dashboard/UserDashboard';
 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
     <Login/>
      <NavBar />
      <Routes>
        <Route path={'/home'}  element={<Home/>} exact/>
        <Route path={'/dashboard'} element={<Dashboard/>} />
        <Route path={'/userdashboard'} element={<UserDashboard/>} />
      </Routes>
     
      </div>
    </BrowserRouter>
  );
}

export default App;
