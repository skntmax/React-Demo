export const reducer = (state, action)=>{
     
  switch(action.type){

    case "ADD_TO_CART":
        return {...state , products:action.payload }
        
        case "CART":
            return {...state , cart: [ ...state.cart , state.products.filter(ele=>  ele.id == action.payload.id?ele:""  )] }
            
        case "REMOVE_TO_CART":
         return {...state , cart: state.cart.filter(ele=>  ele[0].id !== action.payload.id ) }


        default : 
        console.log("default case ");


  }
     
}