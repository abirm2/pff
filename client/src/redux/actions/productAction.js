import axios from 'axios'
import { Navigate } from 'react-router-dom'
import {  FAIL, GET_PRODUCT,GET_PRODUCTS, TOGGLE_FALSE, TOGGLE_TRUE} from '../types/productype'

//get all products
export const getProducts= () => async (dispatch) => {
  try {
    const res = await axios.get("/product/allproduct");
  
    dispatch({ type: GET_PRODUCTS, payload: res.data });
   
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
    
  }
};
//get one product
export const getProduct= () => async (dispatch) => {
    
  try {
    const res = await axios.get("/product/oneproduct/");
  
    dispatch({ type: GET_PRODUCT, payload: res.data });
   
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
    
  }
};
//add product
export const addproduct=(newproduct)=>async( dispatch)=>{

  var token = localStorage.getItem("token");
  
  const config = {
    headers: {
      authorization: token,
    },
  };
    try {
//Get data from back
         await axios.post("/product/addproduct",newproduct,config)
         //Get data from reducer
        dispatch(getProducts())
       
    } catch (error) {
        dispatch({ type: FAIL, payload: error.response.data });
    }

}
//edit product 
  export const updateProduct=(id ,product, Navigate )=>async (dispatch)=>{
    var token = localStorage.getItem("token");
  
    const config = {
      headers: {
        authorization: token,
      },
    };
    try {
       await axios.put(`/product/update/${id}`,product,config)
      dispatch(getProducts())
        Navigate("/Profile");
    } catch (error) {
      dispatch({type:FAIL,payload: error.response.data})
    } 
  }
  //delete product 
  export const deleteProduct = (id)=>async(dispatch)=>{
    try {
        const res = await axios.delete(`/product/delete/${id}`);
        dispatch(getProducts())
    } catch (error) {
      dispatch({type:FAIL,payload: error.response.data})
        
    }
}
export const toogletrue=()=>{
  return{type:TOGGLE_TRUE}
}
export const togglefalse=()=>{
  return{type:TOGGLE_FALSE}
}