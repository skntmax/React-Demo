import React ,{useState} from 'react'
import Navbar from './components/common/Navbar'
import './assets/css/login.css'
import Signup from './Signup'
function Form() {
   
 function getInputHandler(e) {  
  const { name , value }  = e.target 
  setState({
        ...state ,  [name]: { ...state[name] , value:value  , alert:false  } 
   })

}

const [state, setState] = useState({
    login:true ,
    signup:false , 
    username:{name:"username" ,value:"" , isRequired:true , alert:false   } ,
    email:{ name:"email" ,value:"" , isRequired:true , alert:false} ,
    password:{name:"password" ,value:"" , isRequired:true , alert:false }
})
  const {login , signup }  = state  
  
console.log(state)
     
  return (
    <React.Fragment>
     <div style={{
       width:"40%" ,
     margin:"auto"

     }}>
      
        <h1 className='text-capitalize hover_button' >   <span className= {login?'active_button':""}   
         onClick={()=>{
           setState( {
             ...state , login:true , signup:false  
           })
         }} 
        >  LOGIN  </span>/
        
        <span
        className={signup?'active_button':""}
        onClick={()=>{
          setState( {
            ...state , login:false , signup:true  
          })
        }} 
        > SIGNUP </span> </h1>
   
 {    login?
  <form> 
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label" 
    >Email address</label>
    <input type="email" className="form-control" 
      name={state.email.name}
      onChange={getInputHandler}
      value={state.email.value}
      onBlur={(e)=>{
   e.target.value==""?
         setState( {
           ...state ,[state.email.name] :{ ...state[state.email.name] ,  alert:true   } 
        }) :""
      }} 
       
     id="exampleInputEmail1" aria-describedby="emailHelp" />
       {state.email.alert?
        <div id="emailHelp" className="form-text" style={{color:"red"}}>   please enter email  </div> :" " 
        } 

  </div>
   
  <div className= "mb-3" >
    <label for="exampleInputPassword1"  className="form-label" > Password </label>
    <input type="password" 
    onChange={getInputHandler}
    name={state.password.name} 
    value={state.password.value}
    onBlur={(e)=>{
      e.target.value==""?
      setState( {
         ...state ,[state.password.name] :{ ...state[state.password.name] ,  alert:true   } 
      }) :""
    }} 
    className="form-control" id="exampleInputPassword1" />
  </div>
  {state.password.alert?
    <div id="emailHelp" className="form-text"  style={{color:"red"}} >   please enter pwassword  </div> :" " 
  }

  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" 
    
    />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary btn-block" >login</button>
</form>  :
<form>
   <div className="mb-3" >
   <label for="exampleInputEmail1" className="form-label">Username </label>
   <input type="email" className="form-control" id="exampleInputEmail1"
   onChange={getInputHandler}
   name={state.username.name} 
   value={state.username.value}
   onBlur={(e)=>{
     e.target.value==""?
     setState( {
        ...state ,[state.username.name] :{ ...state[state.username.name] ,  alert:true   } 
     }) :""
   }} 
   aria-describedby="emailHelp" />
   {state.username.alert?
    <div id="emailHelp" classNameName="form-text" style={{color:"red"}}>   please enter username  </div> :" " 
  }
   <div id="emailHelp" className="form-text"></div>
 
   </div>


    <div className="mb-3">
     
      <label for="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control"
      name={state.email.name}
      onChange={getInputHandler}
      value={state.email.value}
      onBlur={(e)=>{
   e.target.value==""?
         setState( {
           ...state ,[state.email.name] :{ ...state[state.email.name] ,  alert:true   } 
        }) :""
      }} 

      id="exampleInputEmail1" aria-describedby="emailHelp" />
      {state.email.alert?
        <div id="emailHelp" classNameName="form-text" style={{color:"red"}}>   please enter email  </div> :" " 
      }
      </div>
    <div className="mb-3">
      <label for="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control"
      onChange={getInputHandler}
      name={state.password.name} 
      value={state.password.value}
      onBlur={(e)=>{
        e.target.value==""?
        setState( {
           ...state ,[state.password.name] :{ ...state[state.password.name] ,  alert:true   } 
        }) :""
         
      }} 
      id="exampleInputPassword1" />
      {state.password.alert?
        <div id="emailHelp" classNameName="form-text"  style={{color:"red"}} >   please enter pwassword  </div> :" " 
      }
    </div>
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1"  />
      <label className="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" className="btn btn-primary btn-block">sign up </button>
  </form> 


 }
         
    
  </div>

  
    </React.Fragment>
  )


}




export default Form
