import React ,{useState} from 'react'

export default function ChildCompo(props) {
    
 const [myName, setMyName] = useState("rahul")  

  return (
    <div>
     
     sending name from child to parent component <br></br>
      <button  onClick={ ()=>{  props.getName(myName) }}> send name from child to parent  </button> 
     
     </div>
  )
}
