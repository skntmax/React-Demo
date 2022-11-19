import React, { useState } from "react"

export default function Todo() {
  const [prdt ,setProduct]  = useState('')
  const [list ,setList]  = useState([])
  const [edit ,editId]  = useState(undefined)
  const [editedValue ,setEditValue]  = useState("")

   const editItem =( item, editIndex , e )=>{
    if(edit==undefined) {
         editId(editIndex)}
    else {
        editId(undefined)        
    } 
   }
    
   const saveChanges =()=>{
         list[edit] = editedValue
          setList([...list])
    }
   
    return (
         <React.Fragment>
           <input   onChange={e=> setProduct(e.target.value)} value={prdt} />
            <button onClick={e=> setList([...list,prdt ]) }> save me </button>
             {list && list.length>0 && 
            
            list.map((ele ,index)=>{
                 return (
                     <React.Fragment>
                      
                      <li> {index+">"} {ele} <button onClick={e=> setList(  list.filter((ele,innerIndex) => innerIndex!=index )  ) } > delete </button>   
                     <button onClick={e=> editItem(ele, index ,e )} > Edit  </button>  </li> 
                     {editId!=undefined &&  index==edit && <input onChange={e=> setEditValue(e.target.value) } placeholder={list[edit]}   />}
                     {edit!=undefined && index==edit && <button onClick={saveChanges}> save changes </button>}
                     </React.Fragment>
                  
                 )
            })}   
         </React.Fragment>
    )
}