import React from 'react'
import {useContext} from 'react'
 import { ContextApiProvider } from '../../ContextProvider/ContextProvider'


function B() {
  let val  = useContext(ContextApiProvider)
  
  console.log("context api data  in B component " , val )
   
  return (
    <div>
        B component
    </div>
  )
}

export default B
