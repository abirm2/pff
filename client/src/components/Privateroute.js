import React from 'react'
import { useSelector } from 'react-redux';
import {Navigate} from 'react-router-dom'



function PrivateRoute({children}) {
    const token = localStorage.getItem("token");
    const auth = useSelector(state => state.AuthReducer.auth);
    const product = useSelector(state=>state.ProductReducer.product)
    return(
    <div>
    {token || auth ? children: <Navigate to="/signin"></Navigate>}
    {token || product ? children: <Navigate to="/Profile"></Navigate>}
    </div>
    )
}
export default PrivateRoute