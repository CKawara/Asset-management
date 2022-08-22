import React, { useState } from "react";
import loginImage from './loginImage.png';
import './Login.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

 
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

      <Container>
       <div className='login-container'>
        <Row className="justify-content-center">
            <Col className="col-5">
            <h1 className='page-header'>Hello There!</h1>
            <img src={loginImage}  className="w-100" alt='Login'/>
            </Col>

            <Col className="col-5">
                <h1 className='page-header'>Login</h1>

                <Form onSubmit={handleSubmit}>

                <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>

            <br/>

            <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputGroup>
               
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
            </Col>
            
        </Row>
    </div>
    </Container>
    </>
    )
}

export default Login