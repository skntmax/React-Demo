import React, {useEffect , useState } from 'react';
 function CartSystem() {
     
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/").then((result)=>{
            result.json().then((res)=>{
                setData(res)
            })
        })
    },[])
console.log(data)
    return (
   <React.Fragment>
   <div className='App'>
   <h2>Api Call</h2>
   <table>
   <tr>
   <td>ID</td>
   <td>TITLE</td>
   <td>FOLSBACK NO</td>
   <td>DESCRIPTION</td>
   <td>CATEGORY</td>
   <td>RATING</td>
   <td>IMAGE</td>


   </tr>

  { data.map((item)=>{
 
     <tr>
   <td>{item.id}</td>
   <td>{item.title}</td>
   <td>{item.price}</td>
   <td>{item.description}</td>
   <td>{item.category}</td>
   <td>{item.rating}</td>
   <td>{item.image}</td>


   </tr>
      
  })
}
   </table>
   </div>
   </React.Fragment>
  );
}


export default CartSystem 