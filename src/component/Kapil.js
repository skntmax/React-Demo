import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
export default function Index() {

 
    const [state , setState]  = useState(undefined)
     

    useEffect(()=>{
         
            //  axios.get('http://localhost:2000/').then(res=>{
            //         console.log(res);
            //     let {data:{hi}} = res     
                 
            //     setState(hi)  
                 
            //  }).catch(err=>{
                 
            //      console.log(err);
            //  }).finally(()=>{
            //      console.log("finally ");
            //  })
      } ,[])
       
             
      const getFacts = async () => {
        const res = await axios.get('http://localhost:2000');
        return res
    };


           
             
            // Using the hook
             
            const {data, error, isLoading} = useQuery('randomFacts', getFacts);
     

    if(isLoading) {
         return <div> loading ...</div>
     }

      console.log("data" , data);

     if(data){  
  return ( <div>
     {<h1>{data}
            </h1>}

             <button onClick={getFacts}> fetch data  </button>
      
    </div>
  )
}

}


