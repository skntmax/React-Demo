
import React, { PureComponent } from 'react'
import './App.css';
import { useState } from 'react';

function App() {

  let [ count , setCount ] = useState(0)
   const [obj , setObj]= useState({
     name:"",
     age:""
  })

  const [status , setStatus]= useState({
    nameError:false,
    ageError:false 
 })



  



const onChangeHandler = (e)=>{
    let value = e.target.value    
    let name = e.target.name    
    
    setObj({
       ...obj ,[name]:value  
    })
    
 }
  

 const checkBlur =(e)=>{
  let value = obj.name    

  if(value=="") {
    setStatus({...status , nameError:true})
    }
   
 }

  
  return (
   <React.Fragment>

        <input name="name" onChange={onChangeHandler} onFocus={()=> obj.name!=""? setStatus({...status , nameError:false}):""  } onBlur={checkBlur} value={obj.name}  /> <br />

           {status.nameError?<span style={{color:"red"}}>please enter your name first  </span> :"" } 

         <input name="age" onChange={onChangeHandler}  value={obj.age}  /> <br />
         <button>show me   </button>
       

   </React.Fragment>
  );
}

export default App;
