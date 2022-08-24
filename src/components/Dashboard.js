import React from 'react'
import AddUser from './AddUser'
import NavBar from './NavBar'
import RequestsTable from './RequestsTable'
import UsersTable from './UsersTable'

const Dashboard = () => {
    return (
        <div>
            <NavBar/>
            <div className='relative flex flex-wrap items-center justify-between px-5'>
                <p className='text-2xl'>Users</p>
                <AddUser/>
            </div>
            <hr/>
            <RequestsTable/>
        </div>
    )
}

export default Dashboard
