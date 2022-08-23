import React from 'react'
import AssetsTable from './AssetsTable'
import NavBar from './NavBar';
import RequestAsset from './RequestAsset';
const Home = () => {
    return (
        <div className='min-h-screen'>
            <NavBar/>
            <div className='relative flex flex-wrap items-center justify-between px-5'>
                <p className='text-2xl'>Assets Available</p>
                <RequestAsset/>
            </div>
            <hr/>
            <AssetsTable/>
        </div>
    )
}

export default Home
