import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/actions/productAction'
import ProductCard from './ProductCard'

function ListProduct() {
    const dispatch=useDispatch()
React.useEffect(()=>{dispatch(getProducts())})
    const  products= useSelector(state=>state.ProductReducer.product)
  
   return (
      
       <div style={{display:"flex", flexWrap:"wrap", width:"100%",textAlign:"center", height: "400px", textAlign: "center" }} >
{ products && products.map((product)=><ProductCard product={product} key={product._id}></ProductCard>)}

       </div>
      
   ) 
}
export default ListProduct