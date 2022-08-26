import React from 'react'
import { NavLink } from 'react-router-dom';


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
          <p className="px-3 py-2 flex items-center text-center font-bold text-white text-sm md:text-lg lg:text-2xl hover:opacity-75">Name (role)</p>
          <NavLink className="px-3 py-3 flex items-center text-center font-bold text-white text-sm md:text-lg lg:text-2xl hover:opacity-75" to='/manager'>Assets</NavLink>
          <NavLink className="px-3 py-3 flex items-center text-center font-bold text-white text-sm md:text-lg lg:text-2xl hover:opacity-75" to='/managerdashboard'>Dashboard</NavLink>
          <NavLink className="px-3 py-3 flex items-center text-center font-bold text-white text-sm md:text-lg lg:text-2xl hover:opacity-75" to='/allocated'>My Assets</NavLink>
        </div>
      {/* //   <div className='col-span-9  h-screen pl-2 md:col-span-10'>
      //     <div className='relative flex flex-wrap items-center justify-between px-5'>
      //         <p className='my-2 text-2xl'>Users</p>
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