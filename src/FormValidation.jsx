import React from 'react'
import { Formik , Form ,ErrorMessage} from 'formik'
import { Button } from '@material-ui/core'
import Input from './Input'
import './assets/style.css'
import * as yup from "yup"

export default function FormValidation() {

    const formVAlues = [
 {  
      id:1,
      name:"name",
      type:"text",
      placeholder:"Enter Name"
 },
 { 
      id:2,
      name:"email",
      type:"text",
      placeholder:"Enter Email"
 },
 { 
     id:3,
      name:"password",
      type:"password",
      placeholder:"Enter Password"
 }
  ]


  const defaultValues = {
       name:"",
       email:"",
       password:""
  }

  const validationSchema = yup.object().shape({
    name:yup.string().required("please Enter your name ").min(4 ,"Too short!").max(10 , "Too Long ! ") ,
    email:yup.string().required("please Enter your email ").
    matches( /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ,"Invalid Email") ,
    password:yup.string().required("please Enter password ") ,

  }) 
   

  const onSubmit = () =>{
      alert("clicked one me ")
       
  }
    return (
    <div>
      <Formik initialValues={defaultValues}  
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      >
      <div className="container">
      
        <Form> 
                {formVAlues.map((ele,index)=>{
                    return (
                     <div className="child">             
                          <Input  key ={ele.id} name={ele.name} type={ele.type} placeholder={ele.placeholder} /> 
                       <p style={{ color:"red" }}>
                        <ErrorMessage name={ele.name} />
                        </p>
                          </div>
                        )
                    })}
                    <div >             
                    
                    <button  type="submit"  > Click me   </button>
                    </div>  
        </Form>
      </div>
      </Formik>
     
            
    
    </div>
  )
}
