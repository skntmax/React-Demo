import React from 'react'
import logo from  './../../asssets/cartLogo.jpg'
function Products({state , dispatch}) {
    
    const {products ,cart ,total} = state

    return (
       
    <div className="contianer">
  <div className="row">
    <div className='col-sm-10 col-10 col-md-10 '>
    <div style={{display:"flex" , flexWrap:"wrap" , margin:"10px"}}>
     
     {products!==undefined && products.length>0 ?
        
       products.map((ele,index)=>{
            return (
        <div className="card" style={{width: "18rem" , margin:"2px"}}>
        <img className="card-img-top" src={ele.image} alt= {ele.image} />
        <div className="card-body">
          <h5 className="card-title"> {ele.category}</h5>
          <p className="card-text">{ele.description}</p>
             
           
           { cart.some(item=> item[0].id == ele.id )? 
            <button  className="btn btn-danger" onClick={e=>dispatch({
                type:"REMOVE_TO_CART" ,
                payload:{
                     id:ele.id
                } 
            }) }>  Remove to Cart  </button>
            : <button  className="btn btn-primary" onClick={e=> dispatch({
                type:"CART",
                payload:{
                    id:ele.id
                }     
             })}> Add To cart </button>
           }
        </div>
      </div> )
        }) 
         :"" }
         </div> 
  
    
     </div>
  
       
     <div className="col-2 col-md-2 col-sm-2">
     <div>
     <img  src={logo}  height="60px" width={"100px"} />
    <h1 style={{float:"right" , alignItems:"center"}} className="text-success"> {cart.length} </h1>

      <h5> Price : {total}  </h5>
      </div>
        
       {
        cart!==undefined && cart.length>0 ?
        cart.map((ele,index)=>{
             return (
   <React.Fragment>
     <div className="card text-bg-primary mb-3" >
  <div className="card-header">{ele[0].category}</div>
  <div className="card-body">
     <p className="card-text">
         {ele[0].description}
     </p>
      
   <span  className="text-center"  >
    
    <button className=" btn btn-primary "> - </button> {ele[0].qty}  <button className="btn btn-primary" onClick={e=> dispatch({
       type:"INCREASE",
       payload:{
         id:ele[0].id,
         qty:1
       }
    })} > + </button>  </span>        
    </div>
 
  </div>
    </React.Fragment>
             )
        }) :""

     }
     
      </div>
   
  
  </div>

     
    


    
    
      </div>
  )
}

export default Products
