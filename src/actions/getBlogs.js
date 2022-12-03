import { useSelector } from 'react-redux';
import axios from 'axios'

const  getBlogs = async(dispatch)=>{
    debugger
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

export default getBlogs