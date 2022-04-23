import React ,{useState} from 'react'

export default function ChildCompo(props) {
    
 const [myName, setMyName] = useState("rahul")  

  return (
    <div>
     
     ChildCompo
      <button  onClick={()=>{  props.getName(myName) }}> send name from child to parent  </button> 
     
     </div>
  )
}
