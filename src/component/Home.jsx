import React,{useEffect,useState} from 'react'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
export default function Home() {
  
  const [fakeData,setFakeData] = useState('')
  const [pageNumber,setPageNumber] = useState(0)

  useEffect (()=>{
     
    axios.get('https://fakestoreapi.com/products').then(res=>{
      setFakeData(res)
      console.log(fakeData.data);
     })

  } , [])


  const changePage=({selected})=>{
    setPageNumber(selected)
     
  }
  const userPerPage=10
  const pageVisited = pageNumber * userPerPage
  let pageCount='' 
   if(fakeData!=""){
    pageCount = Math.ceil(fakeData.data.length/userPerPage)
   }
  return (
    <>
      
      {fakeData!=''?
      
       fakeData.data.slice(pageVisited,pageVisited+userPerPage).map(ele=>{
        return (
          <>
           <span>
             <h4 className="text-danger"> {ele.id}</h4>
           <h5>category</h5> {ele.category}
           <h5>description</h5>{ele.description}
           <h5>price</h5> {ele.price}
           </span>
          </>
        )
      })
      
      :"" }
   <ReactPaginate
   previousLabel="Previous"
   NextLabel="Next"
   pageCount={pageCount}
   onPageChange={changePage}
   />
    </>
  )
}
