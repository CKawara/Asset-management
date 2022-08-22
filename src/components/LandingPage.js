import React from 'react'
import '../Styling/LandingPage.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from '../Assets/shipping.png'

const LandingPage = () => {
  return (
    <>
        <Container fluid>
            <Row className='ms-5 mt-4'>
                <Col>
                    <Row className='mt-3'>
                        <div className='d-flex'>
                            <img className='logo' src={logo} alt='logo'/>
                            <h3 className='title mt-3 ms-2'>nventory</h3>
                        </div>
                    </Row>

                    <Row>
                        <p className='main-slogan'>Best Inventory <br/> Solution</p>
                    </Row>

                </Col>


                <Col>
                hello
                </Col>

            </Row>

        </Container>
    
    </>
  )
}

export default LandingPage