import React ,{useEffect ,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserBlogsLst } from '../../api_actions/get_user_blogs';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
// import './../../assets/search.scss'
import parse from 'html-react-parser'; 
import Button from 'react-bootstrap/Button'
import { AiFillEdit } from 'react-icons/ai';
import {ImDisplay, ImPriceTag} from 'react-icons/im'
import { MdDelete } from 'react-icons/md'; 
import constant from '../../constat'
import { Link } from 'react-router-dom';
import {deleteBlogById} from '../../api_actions/delete_actions' 
import { Spinner } from 'react-bootstrap';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
 
function SearchBlogs() {
       
       let navigate = useNavigate()
       let dispatch = useDispatch()
       let params = useParams()
       const [action, setAction] = useState({
         edit:{disabled:false} ,
         show:{disabled:false} ,
         delete:{disabled:false ,id:undefined} ,   
       });
       const [allBlogs, setAllBlogs] = useState([])
       const ud =useSelector(ele=> ele.loggedInUser )
       const userBlogs =useSelector(ele=> ele.userBlogs.list )
         
        
       useEffect(() => {
         
              getUserBlogsLst(params.username).then(res=>{
                 if(res.status==200) {
                    setAllBlogs(res.result)
                 } 
                 else if(res.status==500)
                        navigate('/blog')
                      
          }).catch(err=>{
              console.log(err);
               navigate('/blog')
          })
           
    }, [allBlogs] );


    function deleteBlog(id) {
      setAction({
        ...action ,delete:{...action.delete, disabled:true , id:id }
      })
      Swal.fire({
        title: 'Do you really want to delete this Blog?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'delete',
        denyButtonText: `cancel`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
           
          deleteBlogById(id).then(async (res)=>{
            if(res.status=200) {
             Swal.fire('deleted!', '', 'success') 
             setAction({
              ...action ,delete:{...action.delete, disabled:false }
            })
             window.location.reload() 
            }

         }).catch(err=>{
            console.log(err);
         })

         
        } else if (result.isDenied) {
          Swal.fire('Files are saved ', '', 'info')
          setAction({
            ...action ,delete:{...action.delete, disabled:false }
          })    
        }
      })

    

    }
     

   let  imgFit = {
        width: "80%",
        height: "300px",
        objectFit: "cover",
        margin:"0 50px 0 50px"
      }



   

  return (
    <React.Fragment>
     
      

  
<div style={{display:'flex',height:"20vh" ,width:"100vw" ,flexWrap:"wrap" ,margin:"0px",padding:"0px",boxSizing:"border-box"}}>
     
{ allBlogs.map((ele)=>{
     return(
        <Card style={{ width: '25rem' ,margin:"4px" , cursor:"pointer" }} >
          <span style={{margin: "auto" , width:"90%" ,justifyContent:"center" }} >   
          <Button style={{width: "30%" }}  variant="outline-primary"><AiFillEdit /></Button>{' '}
          <Link to={ constant.user_show.replace(':username/:id',ud.username+"/"+ele._id ) } > <Button style={{width: "30%" }} variant="outline-secondary"> <ImDisplay /> </Button> </Link> {' '}      
          <Button style={{width: "30%" }} variant="outline-danger" disabled={action.delete.disabled} onClick={e=>deleteBlog(ele._id)}>   {!(action.delete.disabled  && action.delete.id==ele._id)?<MdDelete />  : <Spinner size='sm'/> }    </Button>{' '}           
          </span>  
           <Link to={ constant.user_show.replace(':username/:id',ud.username+"/"+ele._id ) } style={{textDecoration:"none" , color:"black" ,fontStyle:"inherit" }} >  
         <Card.Body>
          <Card.Title>{ele.title}</Card.Title>
          <Card.Text className="blog_heading">
           {/*parse(ele.disc)*/} 

          </Card.Text>

          <img style={imgFit} src={ele.image[1]} />
        </Card.Body>
        </Link>
        </Card>
   
     )
})}
  

      </div>
   
    
    </React.Fragment>
  )
}

export default SearchBlogs