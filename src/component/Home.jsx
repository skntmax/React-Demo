import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { allRoutes } from '../Router'
import Button from 'react-bootstrap/Button';
import './../assets/style.css'
import Badge from 'react-bootstrap/Badge';


export default function Home() {

  const [colors, setColors] = useState([
    "primary", "secondary", "success", "danger", "warning", "info", "light", "dark"
  ]);
  const navigate = useNavigate();


  function generateRandom(min = 0, max = 100) {
    // find diff
    let difference = max - min;
    // generate random number 
    let rand = Math.random();
    // multiply with difference 
    rand = Math.floor(rand * difference);
    // add with min value 
    rand = rand + min;
    return rand;
  }


  return (
    <div className="text-center back" >
      <h1 style={{ color: "white" }}>React-Store </h1>
      <div className="main_div">
        {allRoutes && allRoutes.map((ele) => {
          return (
            <Badge

               bg={colors[generateRandom(0, 7)]}
              className="homepage_div div_content"
              onClick={() => { navigate(ele) }
              }
          
            >
                <Link to={ele} style={{ textDecoration: "none", color: "black" }} >
                  <h5>  {ele}  </h5>
                </Link>
              </Badge>
            
          );
        })}
      </div>


    </div>
  )
}
