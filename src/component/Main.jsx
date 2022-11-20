import React, { useState , useEffect } from 'react'
 
export default function Main() {

    let [cnt,setCnt]  = useState(0)

  React.useEffect(()=>{
    console.log(" child compoent  ");
    } , [cnt]) 

     const clickMe =()=>{
     setCnt(cnt+1)
    document.getElementById('back').style="red"    
  }
   
    return (
         <React.Fragment>
         <h1>  {cnt} </h1>
         <button onClick={clickMe}>click me  </button> 

          </React.Fragment>)
}