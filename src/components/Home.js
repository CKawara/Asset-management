import React from 'react'
import AddUser from './AddUser';
import AssetsTable from './AssetsTable'
import NavBar from './NavBar';
const Home = () => {
    return (
        <div className='min-h-screen'>
            <NavBar/>
            <div className='relative flex flex-wrap items-center justify-between px-5'>
                <p className='text-2xl'>Assets Available</p>
                <AddUser/>
            </div>
            <hr/>
            <AssetsTable/>
        </div>
    )
}

export default Home
