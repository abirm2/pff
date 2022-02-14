const express=require('express')
const {  getProduct ,updateProduct, deleteProduct,AddProduct, getProducts } = require("../controllers/product.js");
const { isAuth } = require("../middlewares/isAuth.js");
const ProductRoute = express.Router();
ProductRoute.post('/addproduct',isAuth,AddProduct) 
ProductRoute.get('/allproduct',getProducts)
ProductRoute.get('/oneproduct',getProduct)
ProductRoute.put("/update/:id", isAuth, updateProduct);
ProductRoute.delete('/delete/:id',deleteProduct)

module.exports=ProductRoute