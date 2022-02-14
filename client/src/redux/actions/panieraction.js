import { ADDTOCART, INCREMENT } from "../types/paniertype"

export const addToCart=(product)=>{
    return {
        type:ADDTOCART,
        payload:product
    }
}
export const increment=(product)=>{
    return {
        type: INCREMENT,
        payload:product
    }
}