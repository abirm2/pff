import React from 'react'
import { useSelector } from 'react-redux'
import Users from './Users'

function Listuser() {
    const users = useSelector(state=>state.AuthReducer.users)
    
   return (
       <>
{ users.map((user)=> <Users user={user} key={user._id}></Users>)}
       </>
   ) 
}
export default Listuser