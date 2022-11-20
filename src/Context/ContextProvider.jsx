import React, { createContext } from 'react'
export let context = createContext()

function ContextProvider({children}) {
    
    return (
    <context.Provider value="idk" >
      {children} 
      </context.Provider>
  )
}

export default ContextProvider