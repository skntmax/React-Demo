import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function BlogData(props) {
     let dispatch = useDispatch()
     let users = useSelector(ele=> ele.users.list )
       

   function ActionDispatcher() {
          
    return async function (dispatch ,item) {   
        let users  = await axios.get('https://fakestoreapi.com/users')
            let {data} = users  
            dispatch({
                type:"USER_DATA" ,
                payload:{
                     data:data
                }
            })  
          } 

    }

     React.useEffect(() => {
  
          
         dispatch(ActionDispatcher())
         
         
     }, [])
      
  return (
    <React.Fragment>
     <div style={{backgroundColor:props.bgColor}}>
     
     {users.map((ele)=>{
        return <h2> {ele.username} {ele.email}   </h2>
   })}
      </div> 
    
    </React.Fragment>
  )
}

export default BlogData