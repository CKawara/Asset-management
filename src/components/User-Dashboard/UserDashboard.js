import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavBar from '../NavBar';
import UserTable from './user_requests';

 

function UserDashboard() {
    return (
      <>
        <NavBar/>
          <div className="Top">
            <Title>
              Asset Requests
            </Title>
            <Button><Link to='/allocated'>Allocated</Link></Button>
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

const Button = styled.button`
background: green;
font-size: 15px;
padding: 8px 50px;
border-radius: 30px;
margin-right: 10px;
float: right;
margin-top: -35px;
  `;

export default UserDashboard;
