import { combineReducers } from 'redux'
import constant from './../constant'
function products (state = {
     id:"1"
} , action) {

    switch(action.type) { 
        case constant.SINGUP :
            return {...state }
        default:
            return {...state }
    } 
     
}
 
export default combineReducers({
     prd:products
})