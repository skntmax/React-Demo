import React ,{useState} from 'react'

const ContextApiProvider = React.createContext() 
const ContextApiReceiver = React.createContext() 
  

function ContextProvider({children}) {
    const [data , setData ] = useState({
        name:""
   })
   
   function getValueFromOtherComponent(val) {
    console.log("setting data from A component " , val );
     setData({['name'] :val })
   
}

  return (
    <React.Fragment>
     <ContextApiProvider.Provider value={(e)=>getValueFromOtherComponent(e)}     >
     <ContextApiReceiver.Provider value={data} >
         {children}
         </ContextApiReceiver.Provider>
      </ContextApiProvider.Provider>
    </React.Fragment>
  )
}   

 
export  { ContextProvider , ContextApiProvider , ContextApiReceiver    }
