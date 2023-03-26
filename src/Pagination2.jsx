import React  from 'react'

function Pagination2() {
     
    const [data, setData] = React.useState( (new Array(1000)).fill(undefined).map((ele ,index)=> "string"+(index+1)) ) 


           const [currentPage, setCurrentPage] = React.useState(1);
      

       
  return (
    <div> 
    <h1> Current page : {currentPage} </h1>
    

    <ul>
   
       
        {data.slice( (currentPage-1)*10 , currentPage*10 ).map((ele)=>{
             return <li> {ele} </li>
        })}

        <span
        style={{
          cursor:"pointer" ,
           border: `4px solid blue ` ,
           padding:"2px",

        }}
   onClick={ ()=> { setCurrentPage(currentPage-1) } }
          >  {"<<"}previous </span> 
      
         { new Array(Math.ceil( (new Array(data.length)).fill(undefined).length/10)).fill(undefined).map((ele ,i)=>{
             return <div>     
              <span key={i} className='mx-2'
              onClick={(e)=>{
                setCurrentPage(i+1)       
              }} 
              
              style={ {
                border: `4px solid   ${currentPage==(i+1)?"green":"black"} ` ,
                padding:"2px",
                cursor:"pointer"
              }} > { i+1 }</span>
             

              </div>
         })  }
          
         <span style={
         {
          padding:"2px",
             border: `4px solid blue ` ,
           cursor:"pointer"   
         }}
          
   onClick={ ()=> { setCurrentPage(currentPage+1) } }
         
         > next {">>"} </span>


        </ul>
         
    </div>
  )
}

export default Pagination2