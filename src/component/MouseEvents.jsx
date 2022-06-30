import React from 'react';

export default function MouseEvents() {
     function  eventName(name){
          console.log(name);   
     } 
  return (
    <div> 

       <div style={{width:"300px" ,height:"300px" ,backgroundColor:"#82cdcd" 
       , textAlign:"center" ,
         margin:"auto" }}
         onClick={()=> eventName("onClick") } 

          onContextMenu={ ()=> eventName("onContextMenu") }
            onDoubleClick={ ()=> eventName("onDoubleClick") } 
            onDrag ={ ()=> eventName("onDrag") } 
              onDragEnd ={ ()=> eventName("onDragEnd") }
               onDragEnter={ ()=> eventName("onDragEnter") }
                 onDragExit={ ()=> eventName("onDragExit") }
            onDragLeave 
            onDragOver 
            onDragStart 
            onDrop={ ()=> eventName("on Drop")}
            onMouseDown={ ()=> eventName("onMouseDown")}
            onMouseEnter={ ()=> eventName("onMouseEnter")}
            onMouseLeave ={ ()=> eventName("onMouseLeave")}  
            onMouseMove
            onMouseOut
            onMouseOver
           onMouseUp
         
         
         >
          
       mouse Events
        
        </div>
     
      
    </div>
  );
}
