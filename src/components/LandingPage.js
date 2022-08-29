import React, { useContext } from 'react'
import '../Styling/LandingPage.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import logo from '../Assets/shipping.png'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../custom-hooks/user'

const LandingPage = () => {
    const navigate = useNavigate()
    const {user} = useContext(UserContext)

  return (
    <>
        <Container fluid className='landing p-4'>
                    <Row className=''>
                        <div className='logos d-flex'>
                            <img className='logo' src={logo} alt='logo'/>
                            <h3 className='title ms-2'>nventory</h3>
                        </div>
                    </Row>

                    <Row className='h-1/2'>
                        <p className='text-white text-5xl md:text-6xl mt-5'>Best Inventory <br/> Solution</p>
                        <p className='text-white text-xl md:text-2xl mt-2'>Let us help you manage your assets in a <br/> simple,easy and secure way</p>
                        <div>
                            <button id='start-btn' type="button" className="inline-block px-4 py-3 bg-white text-dark font-medium font-bold uppercase rounded-lg shadow-md hover:shadow-2xl transition duration-150 ease-in-out"
                            onClick={() => navigate('/login')}
                            >
                            Get Started
                            </button>                        
                        </div>
                    </Row>




        </Container>
    
    </>
  )
}

export default LandingPage