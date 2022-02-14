const mongoose= require ('mongoose')
const ProductSchema= new mongoose.Schema({
    name:{type:String,required:true},
    price :{type:String,required:true},
    pic :{type:String,required:false},
   qte: {type:Number,default:0}

    
})
module.exports=mongoose.model("Product",ProductSchema)