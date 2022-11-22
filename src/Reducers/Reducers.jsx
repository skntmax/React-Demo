export  function Reducer (state , action){

   switch(action.type) {
   case "COUNTER" :
     console.log("state counter>> " , action.payload )
     return  { ...state ,count:state.count+1  }  
      default:
        console.log("state counter " , action.payload );
         
   }   
        


     
    
}