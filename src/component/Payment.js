import React, { useEffect } from 'react'
import {loadStripe} from '@stripe/stripe-js/pure';


function Payment() {


    useEffect(()=>{

      
    } , [])

    const stripepayment = async ()=>{

        const stripe = await loadStripe('pk_test_51JYRQvSFOQZSHFCbuPXyaWwfPKetNwLv9UfwSIn0tR6ouYgUKZyvB1wOLfP5pAILov2wqcLPnJrzxC5oWRTqOJtN005TJT7wNz');
   
     }
     

    return (
    <div>
 
    <button onClick={stripepayment}> pay  </button>
    </div>
  )
}

export default Payment
