import React ,{useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Model from './../ConactModel/Model'
import ContactList from './../ConactModel/ContactList'
import back from  './../assets/images/back3.jpg'
import Blog from '../redux-thunk/Blog'; 
import Goback from './../assets/images/go-back-2.svg'
import { useNavigate, useSearchParams } from 'react-router-dom';
import BlogList from '../ConactModel/BlogList';
import getBlogs from '../actions/getBlogs';
import { Dispatch } from 'react'; 
import { useDispatch } from 'react-redux';

function Contacts() {
  let dispatch = useDispatch()

      useEffect(() => {
        dispatch(getBlogs())
      }, []) 
 
    
  let navigate = useNavigate()
   if(window.location.pathname=='/redux-thunk-blog-list') {
     
     return (<React.Fragment>
       
      <div style={{ backgroundImage:`url(${back})` , height:"100vh" ,
     height:"100vh" ,
     backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%"
      }}> 
       
        <Blog />
       <BlogList />
       </div> 
       </React.Fragment>) 

     
   }else{

    let style = {width:"60%" ,margin:"auto" , marginTop:"10px" }
 
   return (
     <div style={{ backgroundImage:`url(${back})` , height:"100vh" ,
     height:"100vh" ,
     backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%"
      }}> 
      
     <Navbar bg="light" variant="light">
     <Container>
       <Navbar.Brand href="#home"><span onClick={e=> navigate('/')}> <img src={Goback} width={30} /> </span> CONTACT LIST </Navbar.Brand>
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
  
 }
 
  
 
 export default Contacts
