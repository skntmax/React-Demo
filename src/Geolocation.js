import axios from 'axios';
import React ,{useEffect ,useState} from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

function Geolocation() {
     const [data, setData] = useState([]);
  
      useEffect( () => {
        
         (async function () {try{
         let geoData =await axios.get('https://data.nasa.gov/resource/y77d-th95.json') 
           const {data } = geoData
           setData(data)
        }catch(err) {
         console.log(err);    
        }
         })()

     
      }, [])



  

     return (
    <div style={{
        display:"flex",
        height:"100vh",
        justifyContent:'center',
        alignItems:"center"
    }}> 
    
    <ListGroup defaultActiveKey="#link1">
    
     {data.length>0 && data.map((ele)=>{
         return  (
             <ListGroup.Item action onClick={e=> console.log("cliekd ")}>
           {ele.id+"\t\t\t\t\t\t\t\t\t\t\t\t"+ele.name+"\n" } 
           <Badge bg="primary">
           recclass :{ele.recclass}
      </Badge>
       </ListGroup.Item>)
     })}
 

  </ListGroup>


    </div>
  )
}

export default Geolocation