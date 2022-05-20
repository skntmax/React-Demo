import React ,{useState} from 'react'
import {Formik ,Form ,Field} from 'formik'
import { Button } from '@material-ui/core'
import './../assets/style.css'
import ImagePreview from './ImagePreview'
export default function ImageUpload() {
  
      const imageRef = React.createRef(null)
     const [file,setFile] = useState([])
    
     const intialValues = {
        file:null
     }

  const loadImage =(e) =>{
       console.log(file);
       
  } 

  return (
    <React.Fragment>
     
    <div className="mainContainer">
   <div className="imagePreview">

      {/*  file.length!==0? <ImagePreview imageFile= {file.values} />: "" */ }
      
    </div>

    <div className="imageUpload">
    
     <Formik  intialValues={intialValues}   onSubmit={(values)=>{
        console.log(values);
    }} >

    <Form>
      <input   type="file"  /> 
      
        <Button  color="secondary" size="small" type="submit"  > add file   </Button>

    </Form>
   
   
   </Formik>
    
    </div>
    
    </div>


 
     
    </React.Fragment>
  )
}
