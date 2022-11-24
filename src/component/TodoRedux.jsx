import React ,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { rootReducer } from '../Redux/store';
import { useSelector } from 'react-redux';


function TodoRedux() {
   let todo_list = useSelector(data=> data.todoReducer ) 
     let dispatch = useDispatch()
    const [user, setUser] = useState("");
     
  
    function saveContact(){

       console.log("user value " , user );
       dispatch({
           type:"ADD_TODO" ,
           payload:user
       })
  
    }

     return (
    <div style={{display:"flex" ,justifyContent:"center" , alignItems:"center" , height:"100vh" , flexDirection:"column" }}>
      
    <div>
      <h1> Todo List using redux  </h1>
     </div>
     
    <div>
    
      <input type="text" name="name" value={user}
       onChange={e=> setUser(e.target.value)}
      />
       <button onClick={e=> saveContact(e) }> 
       save  me 
       </button>
  </div>


   <div>
     { todo_list.lst.map((ele, index)=>{
         return (
             <li key={index} >{ele} <button> edit</button> <button
             onClick={e=>{
                dispatch({
                  type:"DELETE_TODO",
                  payload:{
                      id:index
                  }
                })  
              }}
             > delete</button> </li>
         )
     })} 
   </div>

     </div>
        
  )
}

export default TodoRedux