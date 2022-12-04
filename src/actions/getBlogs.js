import { useSelector } from 'react-redux';
import axios from 'axios'

const  getBlogs = ()=>{
    debugger
    return async function ( dispatch , getState ) {
      let res = await axios.get('https://jsonplaceholder.typicode.com/todos')
      if(res){
         dispatch({
         type:"BLOG_CREATE" ,
         payload:{
           data:res.data
          }
        })
    }

    } 
     
}

export default getBlogs