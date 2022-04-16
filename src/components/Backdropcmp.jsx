import React ,{useState} from 'react'
import { Backdrop ,Button ,CircularProgress} from '@mui/material'
 export default function Backdropcmp() {
  
  const [show,setShow] = useState(false)
  return (
    <React.Fragment>
     <Button 

     onClick={e=>{setShow(!show)}} > {!show?"Show backdrop" : "Hide Button"} 
     </Button>
     {show? <CircularProgress color="inherit" />:""} 
      
     </React.Fragment>
  )
}