import React, { PureComponent ,useState ,useEffect } from 'react'
import { validateUser } from '../api_actions/user_acitons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Login from './Login';
import './../assets/header.css' 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {  Paper } from "@material-ui/core";
import Signup from './Signup';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loggedInUserData } from '../api_actions/auth_action_creator';
import Dropdown from 'react-bootstrap/Dropdown';

function MyVerticallyCenteredModal(props) {
  const [textValue, setTextValue] = useState("");
  const [status, setStatus] = useState({
     login:true,
  });
 
  const onTextChange = (e) => setTextValue(e.target.value);
  const handleSubmit = () => console.log(textValue);
  const handleReset = () => setTextValue("");


  return (
     
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
     
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        
          <span  onClick={e=>setStatus({login:true}) } style= {status.login? {color:'green'}:{cursor:"pointer"}} > Login </span> 
          / <span onClick={e=>setStatus({login:false}) } style= {!status.login?{color:'green'}:{cursor:"pointer"}}  >  Signup</span>    
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
         
       <div className='header_auth'>
        
        {
         status.login?
         <Login /> : <Signup />  
        }

        </div>

      </Modal.Body>
  
    </Modal>
  );
}

function CommonModal(props) {
   let params = useParams()
   let dispatch = useDispatch()
    const [cnt, setCount] = useState(1);
   let navigate = useNavigate()
    
    let userloggedData = useSelector(ele=> ele.loggedInUser ) 
   useEffect(() => {
      let username = params.username
      
       validateUser(username).then(res=>{
           if(res.status==200) {
              dispatch(loggedInUserData(res.result))
           } 
      }).catch(err=>{
         alert(err)
      })

   }, [cnt]);

   
  const [modalShow, setModalShow] = React.useState(false);
   
  return (
    <React.Fragment>
     
    {Object.keys(userloggedData).length==0? <Button variant="primary" onClick={() => setModalShow(true)}>
    {props.title}
</Button> : <Dropdown>
<Dropdown.Toggle variant="primary" id="dropdown-basic">
🤷🏽‍♂️ {userloggedData.username}
</Dropdown.Toggle>

<Dropdown.Menu>
  <Dropdown.Item  onClick={e=> {
    localStorage.removeItem('blog-user') 
    dispatch({
       type:"LOGOUT_USER",
       payload:{
        data:{}
       }
    })
    navigate('/blog')
  } } > Logout </Dropdown.Item>
 
</Dropdown.Menu>
</Dropdown>}
     

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
       
    </React.Fragment>
  );
}


export default CommonModal