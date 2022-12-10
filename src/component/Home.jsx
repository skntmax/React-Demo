import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { allRoutes } from '../Router'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import './../assets/style.css'

 export default function Home() {
  const navigate = useNavigate();
    return (
        <div className="text-center back" >
             <h1 style={{color:"white"}}>React-Store </h1>
             <div style={{ display: "flex" }} className="main_div">
             { allRoutes && allRoutes.map((ele) => {
               return (
                 <div
                className="homepage_div "
                onClick={ ()=>{ navigate(ele) }
                  }
                   style={{
                     width: "150px",
                     height:"150px",
                     backgroundColor: `rgba(207,234,217 ,${Math.random().toFixed(1)})`,
                     margin: "2px",
                     color: "bright",
                     justifyContent:"center",
                     flexWrap:"wrap",

                   
                   }}
                 >
                 <Badge bg="light" text="dark" >
                 <Link to={ele} style={{textDecoration:"none" , color:"black"}} > {ele} </Link>
               </Badge>
                 </div>
               );
             })}
           </div>


        </div>
    )
}
