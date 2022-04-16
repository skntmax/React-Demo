import React ,{useState} from 'react'
// import './../asssets/fileUpload.scss'
import { Fab } from '@mui/material'
import { Button } from '@mui/material'
 
function FileUpload() {
  const [fileList ,setFileList] = useState(undefined) 

    return (
    <React.Fragment>
      
    <label htmlFor="upload-photo">

    <input
    // style={{ display: 'none' }}
    id="upload-photo"
    name="upload-photo"
    type="file"
    multiple
     
    // onChange={e=>{
    //      console.log(e.target.files)
    //         setFileList(e.target.files)
    //     }}

    />
   
     

  <Fab
    color="secondary"
    size="small"
    component="span"
    aria-label="add"
    variant="extended"
  >  Upload photo
  </Fab>
   
  <Button size="small" color="primary"  >  save  </Button>
  <br />

  {fileList!==undefined? fileList.map((ele,index)=>{
       return(
           <h1>
            Name : {ele.name}
            </h1>   
       )
  }) : "hey"  }

  { /* <Fab color="primary" size="small" component="span" aria-label="add">
   
 /* <AddIcon /> */ }

</label>

    </React.Fragment>
  )
}


export default FileUpload