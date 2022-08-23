import React from "react";
import './App.css';
import { BrowserRouter} from "react-router-dom";
//import NavBar from './components/NavBar';
//import Home from './components/Home';
//import Dashboard from './components/Dashboard';
import Login from './components/Login/Login';
 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
      <Login />
     
      </div>
    </BrowserRouter>
  );
}

export default App;
