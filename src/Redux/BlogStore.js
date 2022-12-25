import axios from 'axios'
  function blogStore(){
   
     return async function(dispatch ,state)  {
        let blog_list = await axios.get(`${process.env.REACT_APP_BASE_URL}/user/get-blogs`)
        console.log("bg list" , blog_list.data );

       dispatch({
         type:"BLOG_LIST" ,
         payload:{
             data:blog_list.data.result
         }
       })
 
     }

}


 export {blogStore}