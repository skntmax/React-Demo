import React, { useState } from "react"
import './../assets/style.css'
export default function Todo() {
      
  const [prdt ,setProduct]  = useState('')
  const [list ,setList]  = useState([])
  const [edit ,editId]  = useState(undefined)
  const [editedValue ,setEditValue]  = useState("")

   const editItem =( item, editIndex , e )=>{
    if(edit==undefined) {
         editId(editIndex)}
    else {
        editId(undefined)        
    } 
      
   }
    
   const saveChanges =()=>{
         list[edit] = editedValue
          setList([...list])
     }

     const addList = ()=>{
          if(prdt!="") {
               setList([...list,prdt ] ,()=>{
                     console.log(" log updated ");
               })
                   let final_list = [...list, prdt]
                    localStorage.setItem('item' ,JSON.stringify(final_list) ) 
                     setProduct("")
          } else 
          alert("please insert something ") 
          
     }
   
    React.useEffect((item) => {

      if(localStorage.getItem('item')) {
           setList(JSON.parse(localStorage.getItem('item')))
        }
    
           
    }, []) ;

     
    return (
         <React.Fragment>
          <div className="main_div">
          

         

           <div> 
           <h1> Todo -list </h1>

           <div className="form-group">
          <textarea onChange={e=> setProduct(e.target.value)} value={prdt} className="form-control rounded-0" id="exampleFormControlTextarea1" rows="10"></textarea>
          </div>
          <button onClick={e=> addList() } type="button" className="btn btn-outline-success btn-block my-2"> save me </button>
          <div class="d-flex flex-row flex-wrap">
             
            {list && list.length>0 && 
            list.map((ele ,index)=>{
                 return (
                     <React.Fragment>


                     <div class="p-2">
                             <div class="md-form mb-4 pink-textarea active-pink-textarea-2">
                             <textarea 
                             value={ele}
                             id="form17" class="md-textarea form-control" rows="3"></textarea>
                        
                             </div> 

                     <button  className="btn btn-light" onClick={e=> setList(  list.filter((ele,innerIndex) => innerIndex!=index )  ) } > delete </button>   
                     <button className="btn btn-light" onClick={e=> editItem(ele, index ,e )} > Edit  </button>  
                    </div>
                     


                 




                     {editId!=undefined &&  index==edit && <input onChange={e=> setEditValue(e.target.value) } placeholder={list[edit]}   />}
                     {edit!=undefined && index==edit && <button onClick={saveChanges}> save changes </button>}
                     </React.Fragment>
                  )
            })}   
            </div>

             
            </div>
        
           </div>
         
         </React.Fragment>
    )
}