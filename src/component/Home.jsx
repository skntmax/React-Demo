import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { allRoutes } from '../Router'
import './../assets/style.css'

 export default function Home() {
    return (
        <div className="text-center ">
             <h1>Home page </h1>
             
            <div className="lists" >
                <ul className="list-group">

                    { allRoutes && allRoutes.map( (ele) => {
                        return ( <li className="list-group-item" > <Link to={ele} > {ele} </Link> </li> )
                    })}

                </ul>

            </div>


        </div>
    )
}
