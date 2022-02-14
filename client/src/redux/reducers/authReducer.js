import { FAIL, GET_CURRENT, GET_USERS, LOGIN, LOGOUT, REGISTER } from "../types/Authtype"


const initialState = {
    user:null,
    errors:null,
    auth:false,
    users:[]

}

const AuthReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case REGISTER:
        localStorage.setItem("token",payload.token)
        return { ...state,user:payload.user,auth:true,errors:null}
    case LOGIN:
        localStorage.setItem("token",payload.token)
        return{...state,user:payload.found,auth:true,errors:null}

    case FAIL:
        return{...state,errors:payload.errors}
    case GET_CURRENT:
        return{...state,user:payload, auth:true}
    case LOGOUT :
        localStorage.removeItem("token")
        return{...state,user:null,auth:false}
    case GET_USERS:
    return{ ...state, users :payload.listOfUsers };
  
    default:
        return state
    }
}

export default AuthReducer;