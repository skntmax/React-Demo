
import './../../assets/show_blogs.css';
import React ,{useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Goback from './../../assets/images/go-back-2.svg'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Dispatch } from 'react'; 
import { useDispatch } from 'react-redux';
import back from  './../../assets/images/back7.jpg'
import { Suspense } from 'react';
import parse from 'html-react-parser'; 
import CreateBlog from './../CreateBlog'
import NavDropdown from 'react-bootstrap/NavDropdown';


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Header() {

    let navigate  = useNavigate()
  
     return (
    <React.Fragment>

    <div style={{ backgroundImage:`url(${back})` , height:"100vh" ,
    height:"100vh" ,
    backgroundRepeat: "no-repeat",
   backgroundSize: "100% 100%"

   }} > 

    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand >
      <span onClick={e=> navigate(-1) }  > <img src={Goback} width={30} /> </span> techymaxx blog  
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
        
          <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          </Nav>
             <CreateBlog /> 
      </Navbar.Collapse>
    </Container>
  </Navbar>
   

   
     </div>
    </React.Fragment>
  )

}

export default Header
