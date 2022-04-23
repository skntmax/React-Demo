import React from 'react'
import Input from './FormInput/Input'
export default function FormElements() {
    const form = [ 
{
     name:"email",
     type:"text"
}
,
{
    name:"password",
    type:"password"
}
    ]


  const onFocus = (e)=>{ 
   
     console.log("on focus clicked of  " ,e.target.name );
     
    //   do{
    //     alert("abhi jldi likho yaarrr")
    //   }while(e.target.value!="Enter")
           
   }



   
  const onBlur = (e)=>{ 
   
    console.log("element leave   " ,e.target.name , );
    
   
          
  }



     return (
    <div> 
       
     {  
             form.map((ele,index)=>{
               return (
                   <React.Fragment>
                    {ele.name} <Input name={ele.name}  type={ele.type} onFocus={onFocus} onBlur={onBlur}  /> 
                    </React.Fragment>
                     
                 )
          })
     }
      
     </div>
  )
}
