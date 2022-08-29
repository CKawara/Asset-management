import React from 'react';
import UserTable from './User-Dashboard/user_requests';
import UserDashboard from './User-Dashboard/UserDashboard';

const Dashboard = () => {
    return (
        <div>
            <UserDashboard />
          
            <UserTable/>
        </div>
    )
}

 
export default Dashboard
