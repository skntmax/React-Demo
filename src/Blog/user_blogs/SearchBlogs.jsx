import React ,{useEffect ,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserBlogsLst } from '../../api_actions/get_user_blogs';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import './../../assets/search.scss'
import parse from 'html-react-parser'; 

 function SearchBlogs() {
      let navigate = useNavigate()
       let dispatch = useDispatch()
       let params = useParams()
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
           
            

    }, []);

   let  imgFit = {
        width: "80%",
        height: "300px",
        objectFit: "cover",
        margin:"0 50px 0 50px"
      }

   

  return (
    <React.Fragment>
     
      

  
<div style={{display:'flex',height:"20vh" ,width:"100vw" ,flexWrap:"wrap" ,margin:"0px",padding:"0px",boxSizing:"border-box"}}>
     
{ Object.keys(userBlogs).length!=0?userBlogs:allBlogs.map((ele)=>{
     return(
        <Card style={{ width: '25rem' ,margin:"4px" , cursor:"pointer" }} >
        <Card.Body>
          <Card.Title>{ele.title}</Card.Title>
          <Card.Text className="blog_heading">
           {parse(ele.disc)} 

          </Card.Text>

          <img style={imgFit} src={ele.image[1]} />
        </Card.Body>
      </Card>
   
     )
})}
  

      </div>
   
    
    </React.Fragment>
  )
}

export default SearchBlogs