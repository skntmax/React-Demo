import changeTheNumber from "./upDown";

import { combineReducers } from "redux";

const rooReducer = combineReducers({
    changeTheNumber: changeTheNumber
})


export default rooReducer