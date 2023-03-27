import React , {useEffect} from 'react'
// import listReactFiles from 'list-react-files'
import data from './data/root-file'
import Folder from './folder'
 

function FileExplorer() {

  return (
    <React.Fragment> 
            
      root file 
       
       {data.isFolder &&  data.items.map((ele,indx)=>{
        return <Folder item={ele} />  
       })}

    </React.Fragment>
  )
}

export default FileExplorer