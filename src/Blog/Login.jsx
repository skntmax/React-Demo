import React ,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login() {
   const [data, setData] = useState({ 
     email:{error:false , value:"" , isRequired:false},
     password:{error:false , value:"" , isRequired:false}
   })
    
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



    return (

        <React.Fragment>
         {console.log(data)}
      <Form>
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
    <Button variant="primary"  clasName="d-grid gap-2" type="submit"  >
      Submit
    </Button>
  </div>
     
    </Form>
        </React.Fragment>
    )
}

export default Login