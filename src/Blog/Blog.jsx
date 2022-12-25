import React ,{useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Model from './../ConactModel/Model'
import Goback from './../assets/images/go-back-2.svg'
import { useNavigate, useSearchParams } from 'react-router-dom';
import BlogList from '../ConactModel/BlogList';
import getBlogs from '../actions/getBlogs';
import { Dispatch } from 'react'; 
import { useDispatch } from 'react-redux';
import back from  './../assets/images/back7.jpg'
import { Suspense } from 'react';
import parse from 'html-react-parser'; 


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




import NavDropdown from 'react-bootstrap/NavDropdown';


import CreateBlog from './CreateBlog'
const BlogDiv = React.lazy(() => import("./BlogDiv"));

function Blog() {
   
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
      <span onClick={e=> navigate('/') }> <img src={Goback} width={30} /> </span> techymaxx blog  
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


   
   
 
     <Suspense fallback={<div style={{padding:"50%"}} > <h1 style={{color:"red"}}>  Loading...</h1> </div>}>
       <BlogDiv />
     </Suspense>

     </div>


    
    </React.Fragment>
  )
}

export default Blog