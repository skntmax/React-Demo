import React from 'react'
import { useQuery } from '@tanstack/react-query'
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert'; 
import { Helmet } from 'react-helmet-async';

function ReactQuery() {
  
    const { isLoading, error , data  } = useQuery( {
        queryKey: ['repoData'],
        queryFn: () =>
          fetch('https://fakestoreapi.com/products/').then(
            (res) => res.json(),
          ),
      })
    
      if (isLoading) return <Spinner animation="border" role="status">
      <span className="visually-hidden"> Loading... </span>
    </Spinner>

      if (error) return  <Alert show={true} variant="danger" > {error.message} </Alert> 
      
      return ( 
        <div>
            <Helmet>
              
             <title> reat query async </title>
               
              </Helmet>
             {data && data.map((ele, i)=>{
                return (
                     <div> 

                     {ele.id+">"}  {ele.title}
                      </div>


                )
             })} 
        </div>
      )
    
}

export default ReactQuery