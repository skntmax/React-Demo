import React ,{useState} from 'react'

function FileSystem() {
   

    const [dirs, setDirs] = useState([{
       folder: {
         file1:true ,
         file2:true
       } ,
       file:true
    } , {
      folder: {
        file1:true ,
        file2:true
      } ,
         file:true
      }   
    , 
  
    {
      folder: {
        file1:true ,
        file2:true
      } ,
      file:true
   } 
  
   ,
  
   {
    folder: {
      file1:true ,
      file2:true
    } ,
    file:true
 } ]  ); 
   

  return (
    <div>
     
    {dirs.map((ele)=>{
        return ( 
             <React.Fragment>  
              <div >  
                {typeof(ele.folder)=='object'? "something" :"📁"+{ele}  }
               </div>
             

              </React.Fragment>
        )  
    }) }
     
    file system 
      </div>
  )
}

export default FileSystem