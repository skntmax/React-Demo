import React ,{useState} from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './../assets/blog.css'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {AiOutlineEdit} from 'react-icons/ai'
import {BiShowAlt} from 'react-icons/bi'
import {FaAngleDoubleUp}  from 'react-icons/fa'
import FullScreenBlogModal  from './FullScreenBlogModal';
import { Link } from 'react-router-dom';
import { blogStore } from '../Redux/BlogStore';

import parse from 'html-react-parser'; 

function BlogDiv() {
    let dispatch = useDispatch()
    let navigate = useNavigate()

  const [open, setOpen] = useState(false);
  let all_blogs = useSelector(ele=> ele.blogList2)
   
React.useEffect(() => {
       dispatch(blogStore())
}, [])
  
  return (
     <React.Fragment>

      <div className="main_blog_div1" >
         {
           all_blogs.list.map((ele)=>{
                return (      
           <div className="blog_div"  >
           <div style={{display:"flex",justifyContent:"space-between"}}>
           <FullScreenBlogModal type={"update"} data={ele}/> 

             <h5 className="blog_heading" > {ele.title }  </h5>

            <FullScreenBlogModal type={"show"} data={ele} />
        </div>
        <div className="blog_dialogue_box" onClick={e=> window.location.href = process.env.REACT_APP_BASE_URL+"/"+ele.image[1] } >
         <img className="blog_model" src={`${ele.image[1]}`} />
         </div>
          </div> 
        )
           })
         }
         </div>

     </React.Fragment>
  )
}

export default BlogDiv