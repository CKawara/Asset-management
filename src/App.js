import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
//import NavBar from './components/NavBar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
//import UserDashboard from './components/User-Dashboard/UserDashboard';
import AllocatedTable from './components/allocated';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
      
      
      <Routes>
        <Route path={'/allocated'} element={<AllocatedTable/>} exact />
        <Route path={'/home'}  element={<Home/>} exact/>
        <Route path={'/dashboard'} element={<Dashboard/>} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
