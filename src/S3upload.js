import React ,{useState} from 'react'
import axios from 'axios';
import { FileUploader } from "react-drag-drop-files";


const fileTypes = ["JPG", "PNG", "GIF"];


function S3upload() {

  const [file, setFile] = useState(null);

   const handleChange = (file) => {

     let fr =  new FileReader()
        fr.readAsBinaryString(file)
         fr.addEventListener('load', (err, data )=>{
            
          let fs = fr.result

      axios.post('http://localhost:8000/upload-to-s3', file_model  ).then(res=>{
 
     if(res.data.status) {
       debugger
        console.log("res.data.put_url" , res.data.put_url);
               
        axios.put(res.data.put_url ,fs  ,{
           headers:{
             "Access-Control-Allow-Origin":"*",
             'Content-Type': file_model.meta_data, 
           }
         } ) .then(result=>{
              console.log(result);
        }).catch(error=>{
             console.log(error);
        }).finally(()=>{
             console.log("finalyy ");
        })

      }            

    }).catch(err=>{
        
    })


           
         } )
       
       let file_model = {
      meta_data:file.type ,
      file_name: file.name
     }
     
    // setFile(file);
  };

   return (
    <div>
    <form onSubmit={ e=>{
      
    

  }} >
     <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"100vw" ,
        height:"100vh" 
     }}>
     
     <div className="form-row">
     <h4> File upload - s3 </h4>  
     <div className="col mb-3">
     <FileUploader handleChange={handleChange} name="file" types={fileTypes} />

      </div>
       <div className="col">
       <button 
        type="submit"
        className="btn btn-primary btn-sm btn-block">Upload</button>
        </div>
        </div>
        </div>
        
        </form>
       
       </div>
  )
}

export default S3upload
