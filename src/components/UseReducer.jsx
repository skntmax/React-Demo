import React ,{useReducer} from 'react'




export default function UseReducer() {

    function reducer(state,action){
        switch(action.type){
        case 'inc':
              return { count:state.count+1}
          case 'dec':
                   return { count:state.count-1}
                }
      }

      const initialState = {count: 0};
    const [ state , dispatch ] = useReducer(reducer, {count:  0}) 
     
  return (
    <div> 
    
    
    
         <button type="button" onClick={()=> dispatch({type:'inc'}) }  className="btn btn-success btn-sm mr-4" >Success</button>
           <span className="m-3">  <strong>{state.count} </strong> </span> 
<button type="button" className="btn btn-danger btn-sm"  onClick={()=>dispatch({type:'dec'})} >Danger</button>

     
 
       </div>
  )
}
