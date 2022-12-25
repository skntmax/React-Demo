import React ,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { createUser } from '../api_actions/SingupActions';
import Spinner from 'react-bootstrap/Spinner';
import './../assets/usernames.css'
import { useNavigate } from 'react-router-dom';
function Signup() {
 

      let navigate = useNavigate()
    const [data, setData] = useState({ 
          username:{error:false , value:"" ,options:[], isRequired:false },
          email:{error:false , value:"" , isRequired:false},
          password:{error:false , value:"" , isRequired:false} ,
          adminPassword:{error:false , value:"" , isRequired:false} 
      })

      const [isAdmin, setIsAdmin ] = useState(false);
      const [signupUser, setSignupUser ] = useState(false);

function onChangeHandler(e) {
    let name = e.target.name 
    let value = e.target.value 
     setData({...data ,  [name]:{...data[name] , value:value , error:false  } })  
   }
   
   function validate(e) {
     let name = e.target.name 
     let value = e.target.value 
     
      if(name=='username' && value!="") {

        function Usernames( callback , time ) {
          if(time) clearTimeout(time);
          setTimeout(()=>{
            callback(name,value)
         } ,time )

      }
           
       function generateUsernames (name,value) {
             let uniqueUsernames = new Array(Math.floor(Math.random()*10)).fill(0).map(ele=>value+Math.floor(Math.random()*10000) ) 
              setData({
                ...data ,[name]:{...data[name],options:uniqueUsernames }
              })

            } 
            
            Usernames(generateUsernames , 1000 )
                 
        }
      
      if(value=="")
          setData({...data ,  [name]:{...data[name] , error:true  } })
       else if(value!="") 
          setData({...data ,  [name]:{...data[name] , error:false  } })
     }

     
 function submit(e) {
 
  createUser(data,isAdmin ,setSignupUser,navigate)

 }
    return (
    <React.Fragment>

    <Form >

    <Form.Group className="mb-3" controlId="formBasicEmail" >  
    <Form.Label>Username</Form.Label>
     <Form.Control type="text" placeholder="Username"
     name ="username"  
     value={data.username.value}
    onChange={onChangeHandler}
    onBlur={validate}
     />

     <Form.Text className="text-muted">
     {data.username.error?<span style={{color:"red"}}>username is required </span>:""}
   
      {data.username.value.length>0?
        <span style={{color:"green"}}>
              {data.username.options.map((ele)=> {
                return  <span  className="select_username" style={{cursor:"pointer"}} onClick={e=>{
                  setData({...data, ['username']:{...data.username , value:ele ,options:[] } })  
                  
              } } > {ele} </span> 
              })}
      </span>: <div id='us_loader'> </div>}
   
     </Form.Text>

   </Form.Group>

     
    <Form.Group className="mb-3" controlId="formBasicEmail">  
     <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email"
      name ="email"  
      value={data.email.value}
     onChange={onChangeHandler}
     onBlur={validate}
      
      />
      <Form.Text className="text-muted">
      {data.email.error?<span style={{color:"red"}}>please enter email </span>:""}
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" 
      name="password" 
      value={data.password.value}
      onChange={onChangeHandler}
      onBlur={validate}
      />

      <Form.Text className="text-muted">
      {data.password.error?<span style={{color:"red"}}>Password is required </span>:""}
     </Form.Text>
    </Form.Group>
     
 {
   isAdmin?   <Form.Group className="mb-3" controlId="formBasicPassword">
   <Form.Label>Admin password</Form.Label>
   <Form.Control type="password" placeholder="******" 
   name="adminPassword" 
   value={data.adminPassword.value}
   onChange={onChangeHandler}
   onBlur={validate}
   />

   <Form.Text className="text-muted" >
     {data.adminPassword.error?<span style={{color:"red"}}> Admin password is required </span>:""}
     </Form.Text>
    </Form.Group> :""
   }
      
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Create Admin account" onClick={e=> setIsAdmin(!isAdmin) } />
    </Form.Group>
     
    <div className="d-grid gap-2">
    <Button variant="primary"  className="d-grid gap-2" onClick={submit} >
        {!signupUser?"Submit":<Spinner style={{margin:"auto"}} animation="border" size="sm" />}
    </Button>
  </div>

   
  </Form>

    </React.Fragment>
  )
}

export default Signup