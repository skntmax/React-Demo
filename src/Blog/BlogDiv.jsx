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
import { blogStore } from '../Redux/BlogStore' ;
import Alert from 'react-bootstrap/Alert';
import { getFullDate, getTime } from '../utils';
import parse from 'html-react-parser'; 
import constant from '../constat';




function BlogDiv() {
    // ---------------hooks ----------------
  let dispatch = useDispatch()
    let navigate = useNavigate()
  const [open, setOpen] = useState(false);
    // ---------------hooks ----------------

 
 
    // ------------redux data ------------------
    let all_blogs = useSelector(ele=> ele.blogList2)
    let ud = useSelector(ele=>ele.loggedInUser )
    // ------------redux data ------------------
   

React.useEffect(() => {
      let _id = Object.keys(ud).length==0?"":ud._id 
       dispatch(blogStore(_id))
}, [])

 
let image = {
  width: "100%",
  height: "300px" ,
  objectFit: "cover"
}
  
  return (
     <React.Fragment>

      <div className="main_blog_div1" >
         {
           all_blogs.list.map((ele)=>{
                return (
                       
           <div className="blog_div" key={ele._id} >
           <div style={{display:"flex",justifyContent:"space-between"}}>
            <FullScreenBlogModal type={"update"} data={ele}/> 
                 <h5 className="blog_heading" > {ele.title }  </h5>
            <FullScreenBlogModal type={"show"} data={ele} />
        </div>

        <Link to={ constant.show_by_title.replace(':title',ele.title ) } >      
        <div className="blog_dialogue_box fullwrap"  >
            
         <img className="blog_model" style={image} src={`${ele.image[1]}`} />
         <div className="fullcap" >
          {parse(ele.disc)}
          <br/>
       </div>
       <Alert  variant='light' style={{width:"100%" , height:'50px'  }} >
          <td style={{margin:"5px" } } > {ele.createdOn? <b> {`created on:${ getFullDate(ele.createdOn)}  ` }</b>:""} </td>  
          <td > {getTime(ele.createdOn) }</td>  
     </Alert>
         </div>

         </Link>
          </div> 
        )
           })
         }
      
         </div>

     </React.Fragment>
  )
}

export default BlogDiv