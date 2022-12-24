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
     
    <Navbar bg="light" variant="light">
     <Container>
       <Navbar.Brand href="#home" >
       <span onClick={e=> navigate('/') }> <img src={Goback} width={30} /> </span> techymaxx blog  </Navbar.Brand>
       <Nav className="ml-auto">
        <Nav.Link >
            <CreateBlog />  
            </Nav.Link>
          </Nav>
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