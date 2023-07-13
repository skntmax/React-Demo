import React ,{useState} from 'react'
// 📁
function Folder({item}) {

   const [show, setShow] = useState(false);

    if(item.isFolder) {
        return (
             <React.Fragment>

             <span
               onClick={()=>setShow(!show) }
             style={{
                 display:"inline-block"
                }}> 📁 {item.name} <Folder item={item} /> </span>  
                  {show?<Folder item={item}  />:""}
                  <br />
                   
                </React.Fragment> 
                ) 
    }
    else{
         return "🗄️"+item.name   

    }


   
}



export default Folder