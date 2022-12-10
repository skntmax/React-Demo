import React,{useState , useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FloatingLabel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import getBlogs from '../actions/getBlogs'

function ContactForm(props) {

    

  const {type}  =props
   
      let dispatch = useDispatch()
     let ct =  useSelector(ct=> ct.contacts )
     let blogList =  useSelector(blog=> blog.blogList )

      const [data, setData] = useState({
           name:'',phone:"",disc:""
       })
  
      const onChangeHandler =(e)=>{
         let name = e.target.name
         let value = e.target.value

          setData({
         ...data, [name]:value
        })
      }  



      const saveContact= (e)=>{
        e.preventDefault()


        const checkForm = ()=>{
            for(let key in data ) {
                if( data[key]==""){
                return true
                }
            }
             return false 
        } 

        if(checkForm()) {
         alert("please fill all etries ")
 
        }else{         
        
            if(type=="blog-form") {
                // dispatch(getBlogs())
                props.onHide()
               
            }else{
              dispatch({
                type:"ADD_CONTACT",
                payload:{
                   data:data
                  }
               })
                
                  props.onHide()
            }
           
      
         
        }
         
      }

     return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text"  name="name" onChange={onChangeHandler} placeholder="Full Name" />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone Number </Form.Label>
        <Form.Control type="numbere"  minLength={1} maxLength={10} name="phone" onChange={onChangeHandler} placeholder="Phone Number" />
      </Form.Group>

      <FloatingLabel controlId="floatingTextarea2" label="discription">
        <Form.Control
        onChange={onChangeHandler}
          as="textarea"
          name="disc"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      
      <Button className="my-2" variant="primary" type="submit" onClick={saveContact} >
        Add
      </Button>
       
    </Form>
  );
}

export default ContactForm;