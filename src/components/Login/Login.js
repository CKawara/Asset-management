import React, { useState } from "react";
import './Login.css'
import styled, { keyframes, createGlobalStyle } from "styled-components";

const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-3px)
  }
`;

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background: whitesmoke;
  }

  body, html, #root {
    height: 100%;
    font-family: -apple-system, Ubuntu , BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;;
  }
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Form = styled.form`
margin: 0 auto;
margin-top: 10%;
width: 100%;
max-width: 500px;
padding: 1.3rem;
display: flex;
flex-direction: column;
position: relative;
`;


const Input = styled.input`
  max-width: 100%;
  padding: 8px 13px;
  background: #f9f9fa;
  color: #f03d4e;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

const Button = styled.button`
  max-width: 100%;
  padding: 7px 7px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #2CAE66;
  border: none;
  border-radius: 20px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    
    animation: ${jump} 0.2s ease-out forwards;
  }
`;

// const Title = styled.h1`
// font-size: 2em;
// font-weight: bold;
// text-align: center;
// color: #2CAE66;
// text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
// `;

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
      
        <Form onSubmit={handleSubmit}>
        
          <Input
            type="email"
            name="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br/>
          <Input
            type="password"
            name="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br/>
          <Button variant="success" type='submit' size="lg" active>
          {isLoading ? "Loading..." : "Submit"}
          </Button>
        </Form>
        <div>
        {errors.map(err => {return (
        <h3 className='errors'>{err}</h3>
    )})}
        </div>
      </Wrapper>
    </>
  );
}

export default Login;
