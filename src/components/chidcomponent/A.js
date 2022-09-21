import React from 'react'
import B from './B'
import { ContextApiProvider } from '../../ContextProvider/ContextProvider'

function A() {
   
   const [name, setName] = React.useState("")
    
  let val  = React.useContext(ContextApiProvider)
   
  function sendValueToContext(e){
    setName(e.target.value)
     
    // console.log("value in component A" ,  );
    val(e.target.value)
     
  } 

   return (
    <div>
        <input  type="text" value={name} onChange={sendValueToContext} />
            <B />
    </div>
  )
}

export default A
