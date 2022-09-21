import React from 'react'
import {useContext} from 'react'
 import { ContextApiProvider } from '../../ContextProvider/ContextProvider'
import { ContextApiReceiver } from '../../ContextProvider/ContextProvider'

function B() {
  let receiver  = useContext(ContextApiReceiver)
  
  console.log("context api data  in B component " , receiver )
   
  return (
    <div>
        B component
    </div>
  )
}

export default B
