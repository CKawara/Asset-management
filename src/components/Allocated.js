import React, { useContext } from 'react'
import { UserContext } from '../custom-hooks/user'
import AllocatedTable from './AllocatedTable'
import NavBar from './NavBar'
import SideBar from './SideBar'

const Allocated = () => {
    const {user} = useContext(UserContext)

  return (
    <div>
        {
            user && user.role === "Employee" ? 
            <>
            <NavBar/>
            <div className="relative flex flex-wrap items-center justify-between px-5">
              <p className="text-3xl">My Assets</p>
              <hr/>
            </div>
            <AllocatedTable/>
            </>
            :
            <>
		<div className="min-h-screen">
			<nav className="relative py-2 flex flex-wrap shadow-md">
				<div className="container mx-auto flex flex-wrap ">
					<div className="w-full relative flex lg:w-auto lg:static flex ">
						<p className= " flex text-2xl uppercase font-bold leading-snug text-dark " >E-nventory</p>
					</div>
				</div>
			</nav>
			<div className='grid grid-cols-12'> 
				<SideBar/>
				<div className='col-span-9  min-h-screen pl-2 md:col-span-10'>
					<div className="relative flex flex-wrap items-center justify-between py-3 px-5">
						<p className="text-2xl">My Assets</p>
					</div>
					<hr/>
					<AllocatedTable />
				</div>
			</div>
		</div>
            </>
        }
    </div>
  )
}

export default Allocated