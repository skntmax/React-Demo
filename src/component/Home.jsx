import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { allRoutes } from '../Router'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import './../assets/style.css'

 export default function Home() {
    return (
        <div className="text-center"    >
         
             <h1>Home page </h1>

             <div style={{ display: "flex" }} className="main_div">
             { allRoutes && allRoutes.map((ele) => {
               return (
                 <div
                className="homepage_div "
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
               </Badge>{' '}

                  
               
                 
                 </div>
               );
             })}
           </div>


           {/* 
        <div className="lists" >
            <ul className="list-group">

                { allRoutes && allRoutes.map( (ele) => {
                    return ( <li className="list-group-item" > <Link to={ele} > {ele} </Link> </li> )
                })}

            </ul>

        </div>
            */}

        </div>
    )
}
