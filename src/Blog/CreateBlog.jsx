import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


import Form from 'react-bootstrap/Form';


function CreateBlog() {
    const [data,setData] = React.useState({
         title:"",
         disc:"",
         thumbnail:undefined 

    })
  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  function onchangeHandler(e) {
  
  if(!e.target) {
    setData({
     ...data,disc:e 
     })
   }else{
  let {name ,value } = e.target
  debugger
   
  if(e.target.files) {
    let thumbnail =  e.target.files[0]
      console.log("thumbnai " , thumbnail  );  
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

  function onSubmit(e) {
    // e.preventDefault() 
    debugger
         
   


    axios.post(`${process.env.REACT_APP_BASE_URL}/user/post` , data ).then(res=>{
       console.log("blog saved ", res );
        document.getElementById('save').style.disabled= true  
        document.getElementById('save').style.innerHtml= "loader" 
       let {status , result }  = res.data
         const { _id } = result
         debugger 
        if(status==200) {

            let formdata = new FormData()
            formdata.append('file', data.thumbnail)
            formdata.append('id', _id )
             
             axios.post(`${process.env.REACT_APP_BASE_URL}/user/image` , formdata ).then(res=>{
               console.log("file saved ", res);
             document.getElementById('save').style.disabled= false  
             document.getElementById('save').style.innerHtml= "save" 

             }).catch(err=>{
               console.log(err);
               })
          }
           
    }).catch(err=>{
        console.log(" not saved  ");
    })

  }

  return (
    <React.Fragment> 
     {console.log("data " , data )}
        <Button  className="me-2 mb-2" onClick={() => handleShow(true)}>
          Create Blog
        </Button>
         
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)} >
       <div style={{margin:"auto" , width:"70%"}}>
        <Modal.Body> 
        <Form>
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
            console.log( 'Editor is ready to use!', editor );
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

     
    <Form.Group className="formBasicThumbnail">
        <Form.Label> Thumbnail </Form.Label>
        <Form.Control type="file"  enctype="multipart/form-data"  placeholder="" name="file"  onChange={onchangeHandler} />
    </Form.Group>
   
    </Form>

    <Button variant="primary" id="save" onClick={onSubmit} className="my-2">
        Submit
       

    </Button>

        </Modal.Body>

        </div>  
      
      </Modal>
       
    </React.Fragment>
  );
}

export default CreateBlog