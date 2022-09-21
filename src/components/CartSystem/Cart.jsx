import React ,{useReducer , useEffect} from 'react'
import Products from './Products'
import {reducer} from './reducers'
import axios from 'axios' 
function Cart() {
  
     const [state, dispatch] = useReducer(reducer, {
          products:[],
          cart:[] ,
          total:"",
          noOfProduct: []
         })
      
    useEffect(() => {
 
         
  
         async function getProducts() {
          const data  = axios.get('https://fakestoreapi.com/products/').then(res=>{
            dispatch({
                type:"ADD_TO_CART",
                payload:res.data.map(ele=>{
                   return {...ele , qty:0}
                })
            })             
          }).catch(err=>{
             console.log(err);
          })
         }           

          getProducts()

    }, [])

     
  return (
    <div>
    {console.log(state)}
    cart     
    <Products  state={state} dispatch={dispatch} /> 
    </div>
     
  )
}

export default Cart
