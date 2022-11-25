import React,{useState} from 'react'

export default function HOC_comp() {
  let randomColor = `#${ Math.floor((Math.random()*1000000)+1)}`
    return (
         <div>
                <h1 style={{textAlign:"center"}}> HOC (higher order component example )  </h1>
         <div style={{display:"flex" , justifyContent:"center" , alignItems:"center" , height:"100vh" }}> 
     
         <RedCounter  color={`#${ Math.floor((Math.random()*1000000)+1)}`} cmp={HOC} />
         <RedCounter  color={`#${ Math.floor((Math.random()*1000000)+1)}`} cmp={HOC} />
         <RedCounter  color={`#${ Math.floor((Math.random()*1000000)+1)}`} cmp={HOC} />
         <RedCounter  color={`#${ Math.floor((Math.random()*1000000)+1)}`} cmp={HOC} />
         <RedCounter  color={`#${ Math.floor((Math.random()*1000000)+1)}`} cmp={HOC} />
         <RedCounter  color={`#${ Math.floor((Math.random()*1000000)+1)}`} cmp={HOC} />
         <RedCounter  color={`#${ Math.floor((Math.random()*1000000)+1)}`} cmp={HOC} />
          </div>
          </div> 
    )   
  }

 
 let RedCounter =(props)=>{
     
    return  (
         <React.Fragment>
            <div style={{backgroundColor:props.color , width:"200px" ,height:"150px" ,textAlign:'center' ,margin:"2px"}} >
             <p >{props.color} counter  </p>  <props.cmp /> </div>
         </React.Fragment>
    )
 }
  
  
  


const HOC =()=>{
const [cnt, setCnt] = useState(0);
    return (
         <div>
         <h5> {cnt}</h5>
          <br />
       <button onClick={e=> setCnt(cnt+1)}> click me  </button>
          
    </div>)
 }


 