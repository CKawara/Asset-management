import React from 'react'
import { NavLink } from 'react-router-dom';
import '../Styling/SideBar.css'
import dashicon from '../Assets/dashboard.png'
import asseticon from '../Assets/allocation.png'
import logouticon from '../Assets/poweroff.png'
import allocatedicon from '../Assets/assets.png'

const SideBar = () => {
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
            <img
            className="inline-block ms-5 mt-5 h-24 w-24 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            />
          <p id='usersname' className="px-3 py-2 mt-3 flex items-center text-center font-bold text-white text-sm md:text-lg lg:text-xl hover:opacity-75">Name (role)</p>
          <NavLink className="side-panel-titles px-3 py-3 flex items-center text-center font-bold text-white text-sm md:text-lg lg:text-xl hover:opacity-75" to='/dashboard'>
            <span>
              <img className='sideicons mx-2' src={dashicon} alt='icon' />
            </span>
            Dashboard
            </NavLink>

          <NavLink className="side-panel-titles px-3 py-3 flex items-center text-center font-bold text-white text-sm md:text-lg lg:text-xl hover:opacity-75" to='/manager'>
            <span>
              <img className='sideicons mx-2' src={asseticon} alt='icon' />
            </span>
            Assets
            
            </NavLink>
          <NavLink className="side-panel-titles px-3 py-3 flex items-center text-center font-bold text-white text-sm md:text-lg lg:text-xl hover:opacity-75" to='/allocated'>
            <span>
              <img className='sideicons mx-2' src={allocatedicon} alt='icon' />
            </span>
            My Assets
            </NavLink>
          <NavLink className="side-panel-titles mt-5 px-3 py-3 flex items-center text-center font-bold text-white text-sm md:text-lg lg:text-xl hover:opacity-75" to='/allocated'>
            <span>
              <img className='sideicons mx-2' src={logouticon} alt='icon' />
            </span>
            Logout
            </NavLink>

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