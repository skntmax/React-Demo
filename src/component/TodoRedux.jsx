import React ,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { rootReducer } from '../Redux/store';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import {Stack} from 'react-bootstrap'; 

 
function TodoRedux() {
   let todo_list = useSelector(data=> data.todoReducer ) 
   let dispatch = useDispatch()
   const [user, setUser] = useState("");
   const [edit, setEdit] = useState(undefined);
     
  
    function saveContact(){

        if(user!="") {
          dispatch({
            type:"ADD_TODO" ,
            payload:user
        })
        setUser("")
        }else{
          alert("please enter something ")
        }
      
    }

     return (
        <div style={{display:"flex" ,justifyContent:"center" , alignItems:"center" , height:"100vh" , flexDirection:"column"  }} >
     <div>
        <h1> Todo List using redux  </h1>
       </div>
    <div> 

      <input type="text" name="name" value={user}
       onChange={e=> setUser(e.target.value)}
      />
       <button onClick={e=> saveContact(e) } > 
       Add 
       </button>
  </div>


   <div className="text-center">
     { todo_list.lst.map((ele, index)=>{
         return (

           <React.Fragment>
           
           
           {(edit!==undefined && edit==index )  ? 
            <React.Fragment>  
            <input type="text" value={user} onChange={e=> setUser(e.target.value)} /> <Button
             onClick={e=>{
           if(user!="" ) {
            dispatch({
              type:"EDIT" ,
              payload:{
                index: edit,
                value:user
              }
            })
            setEdit(undefined) 
           }else{
            alert("please update")
            }  
             } 
            
            }
            > save changes   </Button>
            </React.Fragment>:
           
            <li key={index} >{ele} 
           <Button 
           onClick={e=>{
             setEdit(index)
             setUser(todo_list.lst[index]) 
           }}
           className="mx-2" as="a" variant="primary">
             edit
           </Button>

            <Button 
        
            className="mx-2" as="a" variant="danger"
           onClick={e=>{
              dispatch({
                type:"DELETE_TODO",
                payload:{
                    id:index
                }
              })  
            }}
           > delete</Button>
           </li>

          }
         

            </React.Fragment>
            
         )
     })} 
   </div>

     </div>
        
  )
}

export default TodoRedux