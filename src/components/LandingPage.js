import React from 'react'
import '../Styling/LandingPage.css'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from '../Assets/shipping.png'
import Button  from 'react-bootstrap/Button'

import '../Styling/LandingPage.css' 
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const navigate = useNavigate()

  return (
    <>
        <Container fluid className='landing p-5'>
            <Row >
                <Col>
                    <Row className='mt-3'>
                        <div className='d-flex'>
                            <img className='logo' src={logo} alt='logo'/>
                            <h3 className='title mt-3 ms-2'>nventory</h3>
                        </div>
                    </Row>

                    <Row>
                        <p className='main-slogan'>Best Inventory <br/> Solution</p>
                        <p className='lower-slogan'>Let us help you manage your assets in a <br/> simple,easy and secure way</p>
                        <div>      
                            <Button id='start-btn' >Get Started</Button>
                        <div>
                            <Button onClick={()=> navigate('/home')} id="start-btn" >Get Started</Button>
                        </div>
                    </Row>

                </Col>


                
                <Col>
                </Col>

            </Row>

        </Container>
    
    </>
  )
}

export default LandingPage