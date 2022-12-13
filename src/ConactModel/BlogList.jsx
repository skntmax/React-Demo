import React ,{useEffect ,useState ,useLayoutEffect } from 'react'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch } from 'react-redux';
import Avatar from 'react-avatar';
import { useSelector } from 'react-redux';
import Accordion from 'react-bootstrap/Accordion';
function BlogList() {
     
    let dispatch = useDispatch()
      let [bg, stbg]  = useState([]) 
       let blogLists = useSelector(data=> data.blogList.list )
   
   useEffect(() => {
      stbg(blogLists.list)
    }, [bg] );
     
    return (
        <React.Fragment>
 
           {console.log("bg" ,bg)}
            
            <div style={{width:"50%" ,
             height:"100%" , 
             overflow: "auto",
           margin:"auto"
        }}>

            { blogLists.length>0 && blogLists.map((ele,index)=>{
                return (
                   <React.Fragment>
   
                  <Accordion defaultActiveKey={[ele.userId]} className="my-2" alwaysOpen={false}>
                  <Accordion.Item eventKey={index}>
                      <Accordion.Header > 
                      <div >
                      <div className="fw-bold">
                          <Avatar name={ele.title} size="30" style={{marginRight:"5px"}} round={true} />
                              Blog Title :{ ele.title} </div>
                            </div>
                  </Accordion.Header>
                    <Accordion.Body>
                        {ele.completed }
                        <Badge
                              style={{ cursor: "pointer" }}
                              className="mx-2" bg="primary" pill>
                              Edit
                          </Badge>
                     <Badge
                              style={{ cursor: "pointer" }}
                              onClick={e => dispatch({
                                  type: "DELETE_BLOG",
                                  payload: {
                                      id: index
                                  }
                              })}
                              className="mx-2" bg="danger" pill>
                              delete
                           </Badge>
                     </Accordion.Body>
                   </Accordion.Item>
                 </Accordion>
                 </React.Fragment>
                )
            })}

             </div>
        

        </React.Fragment>
    );
}

export default BlogList;