import React ,{useState , useEffect} from 'react'
import Avatar from 'react-avatar';
import { useAuth0 } from "@auth0/auth0-react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';


function Auth() {
   
  const { loginWithRedirect ,logout , user ,isLoading ,isAuthenticated   } = useAuth0();
   
   
  const [clientId, setClientId] = useState("698613129858-r5i6ib2m3eu74bv8s33ta5lp39nfiole.apps.googleusercontent.com")  
      
  let dispatch = useDispatch()

   useEffect(() => {
      

     console.log("useruser" , user);
  debugger     
  
      if(user!=undefined) { 
         dispatch({
           type:"USER_DATA" ,
           payload:{
             user_data:user
           }
         })

      }
       
    return () => {
      return ""
    }; 

   }, [])


  return (
    <React.Fragment>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Auth app </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse className="justify-content-end"> 

          <Navbar.Text>
           { isAuthenticated ? <span> { user.nickname }  <Avatar
           src={user.picture} 
           googleId={user.nickname}
            size="25" 
           round={true}
           />  <Button  
           variant="outlined" color="error"
            size="small" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
           Log Out
          </Button> </span> : <Button  size="small" variant ="outlined" onClick={() => loginWithRedirect()} >Log In</Button>
           }
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    
    </React.Fragment>
  )
}

export default Auth
