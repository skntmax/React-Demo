import React ,{useState} from 'react'
import './assets/style.css'
import { TextField  ,Button  } from '@material-ui/core'  
import { ListGroup } from 'react-bootstrap'

// import DeleteIcon from '@mui/icons-material/Delete'
// import {AiFillDelete} from '@react-icons/ai/'
// import {AiFillDelete} from '@react-icons/all-files'
import { array } from 'yup'
// import {  ListItemButton ,ListItemText} from '@mui/material'
export default function Todo() {

 const [value , seValue] = useState('')
 const [list , setList] = useState([])



 const addList =()=>{
     
  setList([...list,value])

  console.log(list);

 
}


const dltItems = (index,array)=>{
  console.log("clicked ");
   
   const finlaArray = array.splice(index,1)
   setList(array)
}
  return (
    <React.Fragment> 
      
       <div className="mainDiv" >
          <div className="todo">
          <div>
          <TextField id="standard-basic"  label="Type..." variant="standard"  onChange={e=>seValue(e.target.value)}   />  
          </div>
          
          <div>
          <Button variant="outlined" size='large' onClick={addList} >Add</Button>
          </div>

           </div>

           <ListGroup as="ul">
           { Array.from(list).map((ele ,index,array)=>{
              return ( 
                <ListGroup.Item as="li" active >{ele} <i className="fa-solid fa-trash dltIcon "  onClick={(e)=>dltItems(index,array)} ></i>  </ListGroup.Item>
                 )
           })}
        </ListGroup>

           
       </div>
      
     
     </React.Fragment>
  )
}
