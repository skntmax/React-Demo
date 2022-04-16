import React,{useContext, createContext ,useState} from 'react'
import  { UserContext }  from '../App'
 
export default function ComponentA() {
     const [testName,setTestName] =  useState()
    const userName = useContext(UserContext);
    return (
    <div>
     
            userName :{userName}  // by using useContext  
      
      <UserContext.Consumer>  // by using cosumer        

      {    
           
      ((res)=>{
          return (
               <h1>
                component A {res}
                </h1>
             )
         })
      } 
       
       </UserContext.Consumer>
        
     </div>
  )
}
