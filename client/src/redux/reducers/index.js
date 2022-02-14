import {combineReducers} from "redux"
import AuthReducer from "./authReducer"
import ProductReducer from "./ProductReducers"
const rootReducer = combineReducers({AuthReducer,ProductReducer})

export default rootReducer