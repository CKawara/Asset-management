import React from 'react'
import NavBar from './NavBar'

const Dashboard = () => {
    return (
        <div>
            <NavBar/>
            <div className='relative flex flex-wrap items-center justify-between px-5'>
                <p className='text-2xl'>Users</p>
                <button type="button" class="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">Add Users</button>
            </div>
            <hr/>
        </div>
    )
}

export default Dashboard
