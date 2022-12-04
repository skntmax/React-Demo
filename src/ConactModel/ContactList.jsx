import React ,{useEffect ,useState} from 'react'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch } from 'react-redux';
import Avatar from 'react-avatar';
import { useSelector } from 'react-redux';
import Accordion from 'react-bootstrap/Accordion';
function DefaultExample() {
    let dispatch = useDispatch()
    let cList = useSelector(data => data.contacts)
    console.log("cList", cList);

     useEffect(() => {
            debugger
             if(localStorage.getItem('contact_list')!=undefined) {
                 dispatch({
                    type:"UPDATE" ,
                    payload:{
                        data:JSON.parse(localStorage.getItem('contact_list')) 
                    }
                 })
             }
         

     }, []);

      
     
     
    return (
        <React.Fragment>


      
            {cList.list.length > 0 ? cList.list.map((ele, index) => {
                 
                
                return (

                    <React.Fragment>
                    <Accordion defaultActiveKey={[index]} className="my-2" alwaysOpen={false}>
                    <Accordion.Item eventKey={index}>
                        <Accordion.Header > 
                        <div >
                        <div className="fw-bold">
                            <Avatar name={ele.name} size="30" style={{marginRight:"5px"}} round={true} />
                                { ele.name[0].toUpperCase()+ele.name.slice(1)}</div>
                            Phone Number : {ele.phone}
                        </div>
                    </Accordion.Header>
                      <Accordion.Body>
                          {ele.disc}
                          <Badge
                                style={{ cursor: "pointer" }}
                                className="mx-2" bg="primary" pill>
                                Edit
                            </Badge>
                  <Badge
                                style={{ cursor: "pointer" }}
                                onClick={e => dispatch({
                                    type: "DELETE_CONTACT",
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

            }) : ""}
        </React.Fragment>





    );
}

export default DefaultExample;