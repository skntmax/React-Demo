import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Model from './../ConactModel/Model'
import ContactList from './../ConactModel/ContactList'
function Contacts() {
  return (
    <div> 
  
     
    <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href="#home">CONTACT LIST </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#home"
    
        >  <Model />  </Nav.Link>
      </Nav>
    </Container>
  </Navbar>

   <div style={{width:"60%" ,margin:"auto" , marginTop:"10px"}}>
   
   <ContactList />
    
   </div>

 
   
   

     </div>
  )
}

export default Contacts