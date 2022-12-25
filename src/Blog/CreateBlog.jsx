import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FileUploader } from "react-drag-drop-files";

import Form from 'react-bootstrap/Form';

import { useRef } from 'react';
import CommonModal from './CommonModal';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';




function CreateBlog() {
   
     let saveRef = useRef()
    const [data,setData] = React.useState({
         title:"",
         disc:"",
         thumbnail:undefined ,
         show:false
    })
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
 let navigate= useNavigate()

  let ud = useSelector(ele=>ele.loggedInUser )
  let userData = useSelector(ele=> ele.loggedInUser)
   

  
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  function onchangeHandler(e) {
  debugger
  if(!e.target) {
    setData({
     ...data,disc:e 
     })
   }else{
  let {name ,value } = e.target

  if(e.target.files) {
    let thumbnail =  e.target.files[0]
      setData({
         ...data,thumbnail:thumbnail
      })
  } else{
    setData({
      ...data,[name]:value 
        })
    } 

    }
  }

  const handleChange = (thumbnail) => {
    setData({
      ...data,thumbnail:thumbnail
   })
  };

  function onSubmit(e) {
    // e.preventDefault() 
 
    function save(){ 
     
      saveRef.current.disabled=true
      saveRef.current.backgroundColor="black"
      saveRef.current.color="white"
      saveRef.current.innerHTML=`<div class="spinner-border" role="status">
       </div>`
    
    return new Promise((resolve ,reject)=>{
       let model = {
         ...data , userEmail:ud.email 
       }
        axios.post(`${process.env.REACT_APP_BASE_URL}/user/post` , model ).then(res=>{
          console.log("blog saved ", res );
          
          let {status , result }  = res.data
            const { _id } = result
            debugger 
           if(status==200) {

               let formdata = new FormData()
               formdata.append('file', data.thumbnail)
               formdata.append('id', _id )
                axios.post(`${process.env.REACT_APP_BASE_URL}/user/image` , formdata ).then(res=>{
                 resolve(res)
                }).catch(err=>{
                   reject(err)
                   })
              }   
       }).catch(err=>{
        reject(err)
       })
         
       })   
      
   } 

      
     for(let val in {title:data.title , disc:data.disc } ) {
      debugger
       if(data[val] == ""  ) {
         alert("all fields are mendatory ") 
         return
          }   
       }
        
   save().then(res=>{
     toast(" Blog created ")
     saveRef.current.disabled=false
     saveRef.current.innerHTML=` save `
     setShow(false)
     navigate('/blog')
   }).catch(err=>{
      console.log(err);     
    })

  }

  return (
    <React.Fragment> 
     





     {
      Object.keys(userData).length==0?"":  <Button  className="me-2 mb-2" onClick={() => handleShow(true)}>
      Create Blog 
     </Button>
     }
      
     <CommonModal title="Login/signup" />  
          
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false) } >
       <Modal.Header closeButton className="px-5">
      
           <Modal.Title>
              Create Blog
             </Modal.Title>
              
        </Modal.Header>
         
       <div style={{margin:"auto" , width:"70%"}}>
        <Modal.Body> 
         
        <Form   >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Title </Form.Label>
        <Form.Control type="text" placeholder="Enter Title" name="title"  onChange={onchangeHandler} />
      </Form.Group>

       
        <CKEditor
         
        editor={ ClassicEditor }
        data={`<h1>hi</h1>`}
        height={"100px"}
        onReady={ editor => {
            // You can store the "editor" and use when it is needed.
            console.log( ' Editor is ready to use! ', editor );
          }}
         
        onChange={ ( event, editor ) => {
            const data = editor.getData();
             console.log( event , editor  , data ); 
            onchangeHandler(data)
        } } 

        onBlur={ ( event, editor ) => {
            console.log( 'Blur.', editor );
        } }
         
        onFocus={ ( event, editor ) => {
            console.log( 'Focus.', editor );
        } }
         
    />

     
    <Form.Group className="formBasicThumbnail" >
        
       {
        /*
        <Form.Label> Thumbnail </Form.Label>
        <Form.Control 
          type="file"
          enctype="multipart/form-data"
          name="file"
          required
      onChange={onchangeHandler} /> */}

      Thumbnail<FileUploader
      multiple={false}
      handleChange={handleChange}
      name="file"
      types={["JPEG", "PNG", "GIF"]}
    />


          
    </Form.Group>
   
    </Form>

  
    <Button variant="primary" ref={saveRef} onClick={onSubmit} className="my-2">
        save
    </Button>

        </Modal.Body>

        </div>  
      
      </Modal>

      <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />


       
    </React.Fragment>
  );
}

export default CreateBlog