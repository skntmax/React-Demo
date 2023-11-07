import React from 'react'
import banner from './../assets/Luxor Journey.webp'
import gsap from "gsap";
import './../assets/imagemap.css'
// get other plugins:
import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";
import Draggable from "gsap/Draggable";

// or all tools are exported from the "all" file (excluding members-only plugins):
import { MotionPathPlugin } from "gsap/all";

// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin); 

function ImageMap() {
  
    const Visible =(boxid , bannerImage)=>{
         
       let img1 = document.getElementById(boxid)
       img1.style.cursor="pointer"
       let image_visible = document.getElementById(bannerImage)
       image_visible.innerHTML="Setting a line-height the same value ."
       gsap.to(image_visible , {
        cursor:"pointer",
        duration: 1,
        width: bannerImage=='circle3'?80:
        bannerImage=='circle4'?70 : 120 ,
        height: bannerImage=='circle3'?80:bannerImage=='circle4'?70:  120,
        top: 20,
        scale:2,
       opacity:1,
       textAlign: "center",
       fontSize:"10px",
       verticalSlign: "middle",
       display: "flex",
       alignItems:"center",
       justifyContent: "center"
       }) 
         
       }


       const Unhide = (boxid , bannerImage)=>{
        let image_visible = document.getElementById(bannerImage)
        gsap.to(image_visible , {
         duration: 1,
         width: 0,
         height: 0,
         top: 150,
         scale:2,
         opacity:0,
        }) 
       }

        
        


    return (
  
        <div style={{
        position:"relative",
      
    }}>

     <div  style={{
        position:"absolute",
        zIndex:1,
        width:800,
         height:600,
    }}>



    <div id="img1" onMouseEnter={()=> Visible('img1' , "circle")}   onMouseLeave={()=> Unhide('img1' , "circle")}   >
    <div id='circle' > </div>  </div>


    <div id="img2" onMouseEnter={ ()=> Visible("img2" ,"circle2")}   onMouseLeave={()=> Unhide('img2' , "circle2")}     >
    <div id='circle2' > </div>  </div>



    <div id="img3" onMouseEnter={ ()=> Visible("img3" ,"circle3")}   onMouseLeave={()=> Unhide('img3' , "circle3")}     >
    <div id='circle3' > </div>  </div>


    
    <div id="img4" onMouseEnter={ ()=> Visible( "img4" ,"circle4" )}   onMouseLeave={()=> Unhide('img4' , "circle4")}     >
    <div id='circle4' > </div>  </div>



      </div>
    <img src={banner} width={"100%"} height={1000}
    style={{
        position:"absolute"
    }}
     
    />  
    </div>
  )
}

export default ImageMap
