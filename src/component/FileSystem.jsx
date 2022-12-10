import React from 'react'


function FileSystem() {
    let fs =[  {
        files:
         {f1: "file"},
        folders:{fldr1:"folder1 "} ,
        
    }
]
  return (
    <div>
    {fs.map((ele)=>{
        return ( 
             <React.Fragment>  
              <div >
                file system is still in progress
               </div>
             

              </React.Fragment>
        )  
    })}
      </div>
  )
}

export default FileSystem