import React ,{useState} from 'react'

export default function ImagePreview( { imageFile }) {

  const [ preview , setpreview] = useState()
     

     const reader = new FileReader()
    reader.readAsDataURL(imageFile)
     
    reader.onload = ()=>{       
        setpreview(reader.result)
    }

     return (
    <React.Fragment> 
        <img  src={preview} alt ="preview" height="100" width="100"  >  </img>    
    
    </React.Fragment>
  )
}
