import React from "react";
import styled from "styled-components";
import NavBar from '../NavBar';
import UserTable from './user_table';

function UserDashboard() {
    return (
      <>
        <NavBar/>
          <div className="Top">
            <Title>
              Asset Requests
            </Title>
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
  
`;

export default UserDashboard;
