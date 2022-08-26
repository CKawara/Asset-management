import React from 'react'
import AddUser from './AddUser'
import SideBar from './SideBar'
import UsersTable from './UsersTable'

const Dashboard = () => {
  return (
		<div className="min-h-screen">
			<nav className="relative flex flex-wrap items-center justify-between shadow-xl">
				<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
					<div className="w-full relative flex lg:w-auto lg:static flex  ">
						<p className="px-3 py-3 flex items-center text-center text-lg uppercase font-bold leading-snug text-dark  hover:opacity-75" >E-nventory</p>
					</div>
				</div>
			</nav>
			<div className='grid grid-cols-12'> 
				<SideBar/>
				<div className='col-span-9  min-h-screen pl-2 md:col-span-10'>
					<div className="relative flex flex-wrap items-center justify-between px-5">
						<p className="text-2xl">Assets Available</p>
						<AddUser />
					</div>
					<hr/>
					<UsersTable />
				</div>
			</div>
		</div>
	);
}

export default Dashboard
