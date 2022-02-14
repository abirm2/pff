const mongoose =require ("mongoose")
const User = new mongoose.Schema({
    name:{type:String,required:true},
    lastname:String,
    email:{type:String, required:true , unique:true },
    pass: {type: String, required:true},
    role:{type:String,enum:["admin","user"],default:"user"}
})
module.exports=mongoose.model("user",User);