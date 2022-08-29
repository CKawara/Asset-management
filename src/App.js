import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
//import NavBar from './components/NavBar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import UserDashboard from './components/User-Dashboard/UserDashboard';
import AllocatedTable from './components/allocated';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
      
      <UserDashboard />
      <AllocatedTable/>
      <Routes>
        <Route path={'/home'}  element={<Home/>} exact/>
        <Route path={'/dashboard'} element={<Dashboard/>} />
        <Route path={'/allocated'} element={<AllocatedTable/>} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
