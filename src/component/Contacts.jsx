import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Model from './../ConactModel/Model'
import ContactList from './../ConactModel/ContactList'
import back from  './../assets/images/back3.gif'
function Contacts() {
 let style = {width:"60%" ,margin:"auto" , marginTop:"10px" ,
 
}

  return (
    <div style={{ backgroundImage:`url(${back})` , height:"100vh" ,
    height:"100vh" ,
    backgroundRepeat: "no-repeat",
   backgroundSize: "100% 80%"
   }}> 
    
  
     
    <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href="#home">CONTACT LIST </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#home"
    
        >  <Model />  </Nav.Link>
      </Nav>
    </Container>
  </Navbar>

   <div  style={{width:"60%" ,margin:"auto" , marginTop:"10px" , backgroundImage:`url(${back})` ,
   
     }}>
   
   <ContactList />
    
   </div>

 
   
   

     </div>
  )
}

export default Contacts