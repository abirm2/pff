import React from 'react'
import { increment } from '../redux/actions/panieraction'
import {useDispatch}from 'react-redux'



function Panier() {
    const cart=JSON.parse(localStorage["cart"])
    const dispatch=useDispatch()

    return(
        <div>

{cart.map(el=><div>
    <h1>{el.name }</h1>
   <h1> {el.price} </h1>
   <button>-</button>
   <span>{el&&el.qte}</span>
    <button onClick={()=>{dispatch(increment(el)); window.location.reload()}}>+</button>
     </div>
   
   )}
        </div>
    )
    
}
export default Panier