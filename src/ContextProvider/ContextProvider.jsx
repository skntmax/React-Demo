import React ,{useState} from 'react'

const ContextApiProvider = React.createContext() 
  

 
function ContextProvider({children}) {
    const [data , setData ] = useState({
        name:""
   })
   
   function getValueFromOtherComponent(val) {
    console.log("val>>>." , val );
     setData({['name'] :val })
     
     return data 
}

  return (
    <React.Fragment>
     <ContextApiProvider.Provider value={(e)=>getValueFromOtherComponent(e)}     >
         {children}
      </ContextApiProvider.Provider>
    </React.Fragment>
  )
}   

 
export  { ContextProvider , ContextApiProvider }
