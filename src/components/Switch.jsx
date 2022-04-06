import React , {createRef, useState ,useRef ,useEffect }  from 'react'
import { Switch } from '@mui/material'
import { FormControlLabel } from '@mui/material'
import { FormGroup } from '@mui/material'

// const handleChange = (e)=>{
//      console.log(e.target.value);
//      setswch(!swtch)
// } 



function SwitchButton() {

    useEffect(() => {
// console.log("intial switch value " , refSwitch.current.checked);
}) 

    const refSwitch = useRef(null)
    const [swtch , setswch ] = useState(false)
     
    
    return (
    <div>
     
    <Switch  defaultChecked={false} />
     <Switch  />
    <Switch  disabled defaultChecked />
    <Switch  disabled />
    
    <FormGroup>
          <FormControlLabel control={<Switch defaultChecked />} label="button 1 " />
         <FormControlLabel disabled control={<Switch />} label="button second" />
    </FormGroup>

     
    <Switch
        checked={swtch}
        onChange={(e)=>{ 
             setswch(!swtch)  
            console.log(e.target.value);
         }}
         color="secondary"
        inputProps={{ 'aria-label': 'controlled' }}
        ref={refSwitch}
    />
 
   </div>
  )
}



export default SwitchButton
