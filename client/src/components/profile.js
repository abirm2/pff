import React from 'react'
import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrent } from "../redux/actions/Authaction";
import  './style.css'
import Admin from './admin';
import ProductCard from './ProductCard';
import{ getProduct, updateProduct} from '../redux/actions/productAction'
import Home from './Home';

function Profile() {
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrent());
  }, []);
  const user= useSelector(state=>state.AuthReducer.user)
  const token = localStorage.getItem("token")
  const products = useSelector(state=>state.ProductReducer.product)

    return (
  <div>
      {token && user && user.role === "user" ?
         <div style={{display:"flex",width:"100%",textAlign:"center"}} > 
         { products && products.map((product)=> <ProductCard product={product} key={product._id}/>)}</div>
          : (token && user && user.role === "admin") ? (
           <>
            <Admin/>
            </>)
          : <>
            <Home/>
            </>
             }
            
  
  </div>


 
    )}
export default Profile
