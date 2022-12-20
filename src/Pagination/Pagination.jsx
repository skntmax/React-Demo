import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';


import './../assets/pagination.css'
function Pagination() {
  let dispatch = useDispatch()
 let prd = useSelector(data=> data.products )

  const [page,setPage] = React.useState(1);
  // const [prd, setPrd] = React.useState([])
   
  function getProduct() {
    return async function(dispatch,data) {
      try{
       let data = await axios.get('https://fakestoreapi.com/products/')
            dispatch({
              type:"PAGINATE_PRODUCT",
              payload:{
                data:data.data
              }
             })
      }catch(err){
         alert(err)
      }
    
    }
  
    }

  useEffect(() => {
     dispatch(getProduct())
  }, []);


  function setPageNumber(pg_no) { 
    setPage(pg_no)
  }
  
  let img = { 
    width: "200px",
  height: "300px",
  objectFit: "cover"

  }
  return (

     <div>
    <h1 style={{textAlign:'center' , fontFamily:"initial"}}>  Front-end Pagination </h1> 
    <div style={{ display: "flex" , width:"100%" , height:"200px" ,flexWrap:'wrap' }} >
      {prd.list.slice((page-1)*5 , page*5 ).map((ele, indx) => {
        return (
          <div key={indx} className="card mx-2 my-2" style={{ width: "400px" , overflow:"auto", textAlign:"center"  }}>
            <img className="card-img-top" src={ele.image} 
             style={img}
            alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{ele.category}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Add to cart </a>
            </div>
          </div>
        )
      })}
        
    <div className="p_div">
    {[...new Array(Math.ceil(prd.list.length/5))].map((_,ind)=>{
       return (
           <React.Fragment>

            {page!=1 && ind==0 ?<span   style={page==ind+1?{ backgroundColor:"azure" , 
           border:"1px solid black" ,
           textAlign:"center"
           }:{}} onClick={e=> setPage(page-1)} className='pagination'> Prev </span> :""}
            
           <span   style={page==ind+1?{ backgroundColor:"azure" , 
           border:"1px solid black" ,
           textAlign:"center"
           }:{}} onClick={e=>setPageNumber(ind+1)} className='pagination'> {ind+1} </span>
        
           {page!=[...new Array(Math.ceil(prd.list.length/5))].length && ind==[...new Array(Math.ceil(prd.list.length/5))].length-1 ?<span   style={page==ind+1?{ backgroundColor:"azure" , 
           border:"1px solid black" ,
           textAlign:"center"
           }:{}} onClick={e=> setPage(page+1)} className='pagination'> Next </span> :""}

           </React.Fragment>

           
            
            )
    }) }  
    </div>


    </div>
  

    </div>
  )
}

export default Pagination