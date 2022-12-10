import axios from 'axios'
  function blogStore(){
   
     return async function(dispatch ,state)  {
        let blog_list = await axios.get('https://css-tricks.com/wp-json/wp/v2/posts')
        console.log("bg list" ,blog_list );
      
       dispatch({
         type:"BLOG_LIST" ,
         payload:{
             data:blog_list.data
         }
       })
 
     }

}


 export {blogStore}