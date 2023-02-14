import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import root_reducer from './Reducers/reducer'

export default  createStore( root_reducer, composeWithDevTools() )
