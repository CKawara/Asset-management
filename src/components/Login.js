import React, { useContext, useState } from 'react'
import '../Styling/Login.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import man from '../Assets/man.png'
import Form from 'react-bootstrap/Form'
import { UserContext } from '../custom-hooks/user'





const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()

        const user = {
            email: email,
            password: password
        }

        fetch('http://127.0.0.1:3000/users',{
            method: "POST",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(user)

        })
        .then(res=> {
            if(res.ok){
                res.json().then(res => setUser)
            }
            else{
                alert("error login")
            }
        })
        
    }

  return (
    <>  
    <div id='login'>
        <Container  >
            <Row>
                <Col sm={12} md={6} lg={6} className='left-column mt-5'>
                    <h3 className='hello-text mt-3'>Hello There!</h3>
                    <img src={man} alt='logo'/>

                </Col>

                <Col sm={12} md={6} lg={5} className='mt-5' id='login-form'>
                <Form onSubmit={handleSubmit} id='log-form'>
                    <h3 className='login-title text-center mb-3'>Login</h3>

                    <Form.Group className='mb-4'>
                        <Form.Control value={email} onChange={(e)=> setEmail(e.target.value)} className='input-fields' type='email' placeholder='Enter Email'/>
                    </Form.Group>

                    <Form.Group className=' mb-3'>
                        <Form.Control value={password} onChange={(e)=> setPassword(e.target.value)} className='input-fields' type='password' placeholder='Enter Password'/>
                    </Form.Group>

                    <div className='d-flex justify-content-center'>
                        <Button type='submit' id='submit-btn' className='mt-4'>Submit</Button>
                    </div>
                </Form>


                </Col>
            </Row>
        </Container>
        </div>

    </>
  )
}

export default Login