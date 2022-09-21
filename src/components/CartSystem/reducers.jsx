export const reducer = ( state, action )=>{
     
  switch(action.type){

    case "ADD_TO_CART":
        return {...state , products:action.payload }
         
        case "CART": 
             let total= [ ...state.cart , state.products.filter(ele=>  ele.id == action.payload.id?ele:""  )]
              let netAmount = total.reduce( (acc,ele,index)=>{
                 acc=ele[0].price+acc
                 return acc 
             },0 )

            return {...state , cart: [ ...state.cart , state.products.filter(ele=>  ele.id == action.payload.id?ele:""  )] , total:netAmount  }

           case "REMOVE_TO_CART" :
         return { ...state , cart: state.cart.filter(ele=>  ele[0].id !== action.payload.id ) }

         case "INCREASE" :
              

                   state.cart.map(c=> { 
                 if( c[0].id == action.payload.id){
                  
                    console.log( "qty " , c[0].qty );
                    c[0]['qty']=c[0].qty+1 
                   }
               })
                    
                // console.log("updatedQuantity" ,state.cart );
          
                 return { ...state }

          
          default : 
          console.log("default case ");
  }
     
}