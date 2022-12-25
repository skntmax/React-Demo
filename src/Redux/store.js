import { createStore , applyMiddleware } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import { combineReducers } from 'redux'
import  thunk from 'redux-thunk'

let todos =  {lst: ["sknt max sample" , ]}
let contact_list = { 
  list:[{
    name:"ranodm" ,
    phone:892393303030,
    disc:"disctiption"
}]}


let intialBList = { list:[]}
let intialBList2= { list:[]}
  


  
function todoReducer(state = todos , action ) {
  // debugger
    switch (action.type) {
    case 'ADD_TODO':
      return { lst:[...state.lst , action.payload] }
    case 'DELETE_TODO' :

         return {lst : state.lst.filter((ele,index)=> index!=action.payload.id )  }

    case 'EDIT' :
           state.lst[action.payload.index] =action.payload.value   
          return {...state }
         
      default:
      return state
  }
}


 

function contacts(state = contact_list , action ) {
    switch (action.type) {
      case 'ADD_CONTACT': 
         
         let updatedList = [...state.list, action.payload.data]
        
        localStorage.setItem('contact_list' , JSON.stringify(updatedList))
      
        return { ...state,list:[...state.list, action.payload.data ] } 
      
        case 'DELETE_CONTACT': 
        let update_list = [...state.list.filter((ele,index)=> index!=action.payload.id)]
          if(localStorage.getItem('contact_list')!=undefined) {
               localStorage.setItem('contact_list',JSON.stringify(update_list)  )
           }
          return { ...state , list:update_list }  

          case 'UPDATE': 
            
          return { ...state , list:[...action.payload.data] }  

          default:
        return state
    }
  }
   
   
  function blogList ( state = intialBList ,  action  ) {
     debugger
     switch(action.type) {
      case "BLOG_CREATE":
             console.log("log data " , action.payload.data );
         return { ...state , list:action.payload.data }

         case 'DELETE_BLOG': 
         let update_blog_list = [...state.list.filter((ele,index)=> index!=action.payload.id)]
           return { ...state , list:update_blog_list }  


            
         default:
        return {...state}      
     }
     
  }
   



  function blogList2 ( state = intialBList2 ,  action  ) {
    debugger
    switch(action.type) {
     case "BLOG_LIST":
        return { ...state , list:action.payload.data }
           
        default:
       return {...state}      
    }
 }


 function products ( state = { list:[] } ,  action  ) {
  debugger
  switch(action.type) {
   case "PAGINATE_PRODUCT":
      return { ...state , list:action.payload.data }
      default:
     return {...state}      
  }
}


function users ( state = { list:[] } ,  action  ) {
  debugger
  switch(action.type) {
   case "USER_DATA":
      return { ...state , list:action.payload.data }
      default:
     return {...state}      
  }
}



function loggedInUser ( state = { } ,  action  ) {
  debugger
  switch(action.type) {
   case "GET_USER_DATA":
      return { ...state , ...action.payload.data }
    case "LOGOUT_USER":
      return {  ...action.payload.data }
      default:
     return {...state}      
  }
}





  export let rootReducer = combineReducers( {
    todoReducer , contacts ,blogList  ,blogList2 ,products, users ,loggedInUser  
     })
  

export const store = createStore( rootReducer, composeWithDevTools(applyMiddleware(thunk)) )
