import React ,{useState} from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './../assets/blog.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {AiOutlineEdit} from 'react-icons/ai'
import {BiShowAlt} from 'react-icons/bi'
import {FaAngleDoubleUp}  from 'react-icons/fa'
import FullScreenBlogModal  from './FullScreenBlogModal';
import { blogStore } from '../Redux/BlogStore';
import parse from 'html-react-parser'; 

function BlogDiv() {
    let dispatch = useDispatch()

  const [open, setOpen] = useState(false);
  let all_blogs = useSelector(ele=> ele.blogList2)
   
React.useEffect(() => {
       dispatch(blogStore())
       
}, [])
  
  return (
     <React.Fragment>

      <div className="main_blog_div1">
         {
            all_blogs.list.map((ele)=>{
                return (
        <div className="blog_div">
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <FullScreenBlogModal type={"update"} data={ele}/> 

             <h5 className="blog_heading" > { ele.title.rendered }  </h5>

            <FullScreenBlogModal type={"show"} data={ele} />
        </div>
        <div className="blog_dialogue_box">
        <img className="blog_model" src={ele.featured_media_src_url} />
       </div>
       </div>  )
           })
         }

         </div>
   

      
  

     </React.Fragment>
  )
}

export default BlogDiv