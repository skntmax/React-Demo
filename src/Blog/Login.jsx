import React ,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { userLogin } from '../api_actions/SingupActions';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
function Login() {
   let navigate = useNavigate()
   const [data, setData] = useState({ 
     email:{error:false , value:"" , isRequired:false},
     password:{error:false , value:"" , isRequired:false} ,
   })

   const [loggedIn, setLoggedIn] = useState(false);
    
   
function onChangeHandler(e) {
 let name = e.target.name 
 let value = e.target.value 
  setData({...data ,  [name]:{...data[name] , value:value , error:false  } })  
}

function validate(e) {
   
  let name = e.target.name 
  let value = e.target.value 
   if(value=="")
       setData({...data ,  [name]:{...data[name] , error:true  } })
    else if(value!="") 
       setData({...data ,  [name]:{...data[name] , error:false  } })
  }
 

  function Loginuser(e) {
      userLogin(data , setLoggedIn ,navigate) 
       
  }

    return (

      <React.Fragment> 

      <Form  >
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
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
     
      <div className="d-grid gap-2">
    <Button variant="primary"  className="d-grid gap-2 text-center" onClick={Loginuser}   >
        {!loggedIn?"Login":<Spinner style={{margin:"auto"}} animation="border" size="sm" />} 
    </Button>
  </div>
     
    </Form>
        </React.Fragment>
    )
}

export default Login