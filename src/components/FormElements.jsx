import React ,{useState} from 'react'
import Input from './FormInput/Input'
export default function FormElements() {
   const [data ,setData] = useState({
    email:"",
    password:""
 })


  
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
   }
  const onBlur = (e)=>{ 
    console.log("element leave   " ,e.target.name , );

  }


  const onChange = (e)=>{ 
    
    setData({ 
      ...data,[e.target.name]:e.target.value
    })
     
  }



     return (
    <div> 
       
     {  
             form.map((ele,index)=>{
               return (
                   <React.Fragment>
                    {ele.name} <Input name={ele.name}  
                    type={ele.type} 
                    onFocus={onFocus}
                     onBlur={onBlur}
                        onChange={onChange}  /> 
                    </React.Fragment>
                     
                 )
          })
     }

      
      <button 
      className="btn btn-primary"
      onClick={()=>{ 
         console.log(data);
      }}> Save      </button>


      
     </div>
  )
}
