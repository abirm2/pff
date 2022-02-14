import axios from "axios";
import { FAIL, GET_CURRENT, GET_USERS, LOGIN, LOGOUT, REGISTER } from "../types/Authtype";

export const register = (newUser, Navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/user/signUp", newUser);
    dispatch({ type: REGISTER, payload: res.data });
    Navigate("/signIn");
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
export const login = (user, Navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/user/signIn", user);

    dispatch({ type: LOGIN, payload: res.data });
res.data.user.role === "admin"?
    Navigate("/Admin") : Navigate("/Profile")
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
export const getCurrent = () => async (dispatch) => {
  var token = localStorage.getItem("token");

  const config = {
    headers: {
      authorization: token,
    },
  };

  try {
    const res = await axios.get("/user/current", config);
    dispatch({ type: GET_CURRENT, payload: res.data });
  } catch (error) {
    // dispatch({ type: FAIL, payload: error.response.data });
    console.log(error);
  }
};
export const getusers=()=>async(dispatch)=>{
  try {
    const res = await axios.get("/user/users");
    dispatch({ type:GET_USERS, payload: res.data });
  } catch (error) {
    // dispatch({ type: FAIL, payload: error.response.data });
    console.log(error);
  }
}
export const logout = () => {

  return {
    type: LOGOUT,
  };
};