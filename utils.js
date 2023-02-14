export function getInputHandler(e  , setState) {
     
    const { name , value }  = e.target 
    
     setState({
         ...state , [name]:{ ...state[name] , value:value} 
     })
   

}