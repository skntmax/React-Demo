import React, { useEffect } from 'react'
import './../assets/pagination.css'
function Pagination() {

   const [page,setPage] = React.useState(1);
  const [prd, setPrd] = React.useState([])
  function getProduct() {
    fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(json =>{console.log(json);  setPrd(json)})
  }

  useEffect(() => {
    getProduct()
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
      {prd.slice((page-1)*5 , page*5 ).map((ele, indx) => {
        return (
          <div className="card mx-2 my-2" style={{ width: "400px" , overflow:"auto"  }}>
            <img className="card-img-top" src={ele.image} 
             style={img}
            alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{ele.category}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Add to cart </a>
            </div>
          </div>
        )
      })}

        
    <div className="p_div">
    {[...new Array(Math.ceil(prd.length/5))].map((_,ind)=>{
       return (
           <React.Fragment>
           <span   style={page==ind+1?{ backgroundColor:"azure" , 
           border:"1px solid black" ,
           textAlign:"center"
           }:{} } onClick={e=>setPageNumber(ind+1)} className='pagination'> {ind+1} </span>
           </React.Fragment>
            )
          
    }) }  
      </div>
      </div>
    </div>
  )
}

export default Pagination