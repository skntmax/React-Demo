import React, { useReducer ,useContext } from 'react'
import { Reducer } from '../Reducers/Reducers'
import ContextProvider from '../Context/ContextProvider'
import {context} from '../Context/ContextProvider'

function Index() {
  
  const contextdata = useContext(context);    
   console.log("context value >>>> " , contextdata);
    
  const [state, dispatch]   =  useReducer(Reducer  ,  {
        product:[],
        count:0
      })
   
    return (
     <div class="text-center">
      counter using use Reducer     
      <h1 className='text-danger'>  {state.count}</h1> <br /> 
       
       <button onClick= {e=> dispatch({
         type:"COUNTER",
         payload:{
          counter: state.count
         }
          
       })}> click me  </button>

    </div>
  )
}

export default Index