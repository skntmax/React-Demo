import React ,{useState} from 'react'

export default function FormValidation() {
    
     const [data,setData] = useState({
          email: "" ,
          password: ""
     })
     
     const onChangeHandler =(e)=>
      {
         setData({ ...data,[e.target.name]:e.target.value})
     }
      
  return (
    <div> 
        
     Name <input type="text" placeholder="name of the Employee " name="email" onChange={onChangeHandler}    /> 
      {data.email.length>0 && data.email.length<5?<p className="text-danger"> email should be grater than 5   </p>: 
      data.email.length>5 ?<p className="text-success">  Perfect  </p> : ""  }
      <br/><br/> 
     password <input type="password" placeholder="Pass of Employee "  name="password"    onChange={onChangeHandler}  />
     {data.password.length<5?<p> email should be grater than 5   </p>:""  }

      <button  onClick={()=>{            
           const regex = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/. 
          alert("name", data.email, "password" , data.password )   } }> click me  </button>
     
           </div>
  )
}
