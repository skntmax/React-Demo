import { createStore } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import { combineReducers } from 'redux'

let todos =  {lst: ["sknt max sample" , ]}
let contact_list = { 
  list:[{
    name:"ranodm" ,
    phone:892393303030,
    disc:"disctiption"
}]}
  
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

  export let rootReducer = combineReducers( {
    todoReducer,contacts 
  })
  

export const store = createStore( rootReducer, composeWithDevTools() )
