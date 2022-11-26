import React ,{useEffect ,useState} from 'react'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch } from 'react-redux';
import Avatar from 'react-avatar';
import { useSelector } from 'react-redux';
function DefaultExample() {
    let dispatch = useDispatch()
    let cList = useSelector(data => data.contacts)
    console.log("cList", cList);
    localStorage.setItem( 'contact_list' , JSON.stringify(cList.list) )  

    const [ct, setCt] = useState([]);

     useEffect(() => {

        if(cList.list.length>0) {
             if(localStorage.getItem('contact_list')!=undefined) {
                 setCt(JSON.parse(localStorage.getItem('contact_list')))
             }
         }
         

     }, []);

      
     
    return (
        <React.Fragment>
            {cList.list.length > 0 ? cList.list.map((ele, index) => {
                return (
                    <ListGroup as="ol" numbered>

                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    <Avatar name={ele.name} size="30" style={{marginRight:"5px"}} round={true} />
                                     { ele.name[0].toUpperCase()+ele.name.slice(1)}</div>
                                Phone Number : {ele.phone}
                            </div>
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
                        </ListGroup.Item>
                    </ListGroup>

                )

            }) : ""}
        </React.Fragment>





    );
}

export default DefaultExample;