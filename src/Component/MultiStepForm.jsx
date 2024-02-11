import React, { useState } from 'react'
import './stepper.css'


const compConfig = {width:"100vw", height:"400px"  , marginTop:"100px"  }
const steps = [
     {
        name:"cmp1",
        cmp:()=> <MainComponent name="cmp1" config={compConfig} form={ChildForm}  /> 
     },
     {
        name:"cmp2",
        cmp:()=>  <MainComponent name="cmp2" config={compConfig} form={ChildForm} /> 
     }, 

     {
        name:"cmp3",
        cmp:()=>  <MainComponent name="cmp3" config={compConfig}  form={ChildForm}/> 
     },

     {
        name:"cmp4",
        cmp:()=>  <MainComponent name="cmp4" config={compConfig}  form={ChildForm} /> 
     },

]

function MultiStepForm() {
   const [activeStep , setActiveStep]   = useState(1)


   const nextStep =()=>{
    setActiveStep((prev)=>{
         return prev+1
    }) 

   }
   
   const prevStep =()=>{
    setActiveStep((prev)=>{
        return prev-1
            }) 
        }


        const onFinished = ()=>{
              setActiveStep((prev)=>{
         return prev+1
    }) 

        }
         
      
    return (
    <div>
     
          
           <div className='stepper'>

        {steps.map((ele,i)=>{
             return    <div className='steps' > 
                            <span style={ (activeStep>i+1)?{ backgroundColor: "green" }:{ backgroundColor: "blue" } } >  {ele.name} </span>
                   </div> 
         })}
       
          
           </div>
 
        
        
        {steps.map((ele,index)=>{
              if(activeStep==index+1){
                return <ele.cmp  />
              }
        }) }

 
        {activeStep<steps.length?
        <>
        <button className='btn btn-primary' onClick={nextStep}>
            next 
        </button>
        </>
        :<button onClick={onFinished} >
            finished  
        </button>}

     
        { activeStep!=1 &&   <button className='btn btn-primary' onClick={prevStep}>
            prev 
        </button>  }



     </div>
  )
}



function MainComponent({name, config ,form:Form }) { 

    return <div style={ config}>
          <h1 className='text-capitalize' style={{ textAlign:"center", fontWeight:"bold"  }} > 
           {name}

          </h1>
           <Form />
    </div>
     
}


function ChildForm(){
    return <>
        <div style={{ width:"100vw", height:"100%",  display:"flex" , justifyContent:"center" , alignItems:"center"  }}> 
     <div style={{width:"200px", height:"300px",}}> 
     <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>
  
  </form>
  </div>
       </div>
    </> 
}


export default MultiStepForm