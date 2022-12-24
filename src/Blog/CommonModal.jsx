import React, { PureComponent ,useState } from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Login from './Login';
import './../assets/header.css' 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {  Paper } from "@material-ui/core";
import Signup from './Signup';


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
     
  const [modalShow, setModalShow] = React.useState(false);
   
  return (
    <React.Fragment>
      <Button variant="primary" onClick={() => setModalShow(true)}>
         {props.title}   
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </React.Fragment>
  );
}


export default CommonModal