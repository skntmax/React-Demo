import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Model from './../ConactModel/Model'
import Container from 'react-bootstrap/Container';
import Goback from './../assets/images/go-back-2.svg'
import { useNavigate } from 'react-router-dom';
function Blog() {
   let navigate = useNavigate()
    
  return (
    <div>
  
    <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href="#home"> <span onClick={e=> navigate('/')}> <img src={Goback} width={30} />  </span>Blog List  </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#home" >  <Model type="blog-form" />  </Nav.Link>
       </Nav>
      </Container>
    </Navbar>
     
      </div>
  )
}

export default Blog