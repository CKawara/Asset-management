import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import NavBar from '../NavBar';
import UserTable from './user_requests';

function UserDashboard() {
  const navigate = useNavigate()
    return (
      <>
        <NavBar/>
          <div className="Top">
          <div className="relative flex flex-wrap items-center justify-between px-5">
            <Title>
              Asset Requests
            </Title> 
            <button type="button" class="inline-block px-6 py-2.5 bg-emerald-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out" onClick={()=>navigate('/allocated')}>
            My Assets
            </button>          
         </div>

          </div>
        <Divider/>
        <UserTable/>
      </>
        );
}


const Divider = styled.hr`
  border: none;
  border-bottom: 2px solid green;
  margin: 20px 0;
`;

const Title = styled.h3`
background: whitesmoke;
font-size: 20px
  
`;

export default UserDashboard;
