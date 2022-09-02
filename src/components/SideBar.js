import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../custom-hooks/user';


const SideBar = () => {
  const {user, setUser} = useContext(UserContext)
  const token = localStorage.getItem("jwt")
  const navigate = useNavigate()

  function handleLogoutClick() {
    fetch("https://whispering-hollows-91695.herokuapp.com/logout", 
    { method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`
    }
    })
    .then((r) => {
      if (r.ok) {
        localStorage.removeItem("jwt", r.jwt)
        setUser(null);
        navigate('/')
      }
    });
} 
    
  // console.log();
  return (
    <>
      {/* <nav className="relative flex flex-wrap items-center justify-between shadow-xl">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex lg:w-auto lg:static flex  ">
           <NavLink className="px-3 py-3 flex items-center text-center text-lg uppercase font-bold leading-snug text-dark  hover:opacity-75" to='/home'>E-nventory</NavLink>
          </div>
        </div>
      </nav>
      <div className='grid grid-cols-12'> */}
        <div className='col-span-3 bg-emerald-500 grow  min-h-screen pl-2 md:col-span-2'>
          <p className="px-3 py-2 flex items-center text-center font-bold text-white text-sm md:text-lg lg:text-xl hover:opacity-75">{ user ?user.name : null} ({user ? user.role : null})</p>
          <NavLink className="px-3 py-3 flex items-center text-center font-bold text-white text-sm md:text-lg lg:text-xl hover:opacity-75" to={user  && user.role ==="Admin"? '/admin': '/manager'}>Assets</NavLink>
          <NavLink className="px-3 py-3 flex items-center text-center font-bold text-white text-sm md:text-lg lg:text-xl hover:opacity-75" to={user && user.role ==="Admin"? '/Dashboard': '/managerdashboard'}>Dashboard</NavLink>
          <NavLink className="px-3 py-3 flex items-center text-center font-bold text-white text-sm md:text-lg lg:text-xl hover:opacity-75" to='/allocated'>My Assets</NavLink>
          <NavLink className="px-3 py-3 flex items-center text-center font-bold text-white text-sm md:text-lg lg:text-xl hover:opacity-75" onClick={handleLogoutClick} to='/'  >Logout</NavLink>
        </div>
      {/* //   <div className='col-span-9  h-screen pl-2 md:col-span-10'>
      //     <div className='relative flex flex-wrap items-center justify-between px-5'>
      //         <p className='my-2 text-xl'>Users</p>
      //         <AddUser/>
      //     </div>
      //     <hr/>
      //     <UsersTable/>          
      //   </div>
      // </div> */}
    </>
  );
}

export default SideBar