import { GET_PRODUCT, GET_PRODUCTS } from "../types/productype";
import {ADDTOCART, INCREMENT} from "../types/paniertype"

const initState = {
    product :null,
    errors:null,
    edit: false ,
cart:[],
count:1
}
const ProductReducer =(state = initState, { type, payload })=>{
    switch (type) {
       
        case GET_PRODUCTS:
            return {...state,product:payload.findproduct , errors:null}
            case GET_PRODUCT:
                return {...state,product:payload.found , errors:null}
                case ADDTOCART:
                    localStorage.setItem('cart',JSON.stringify([...state.cart,{...payload,qte:1}]))
                return{...state,cart:[...state.cart,{...payload,qte:1}]}
                case INCREMENT:
                    const cart=JSON.parse(localStorage["cart"]);
                    const newcart=cart.map((el)=>({...el.id==payload._id ? ({...el,qte:el.qte+1}):el}));
                    localStorage.setItem('cart',JSON.stringify(newcart));
                    return {...state, count:newcart}

        default :
            return state
    }
}
export default ProductReducer;