const express=require("express")
const connectdb=require("./config/connectdb")
const authRoute = require("./routes/auth.js");
const ProductRoute = require("./routes/product.js");

require ('dotenv').config()
const app=express()
app.use(express.json());
connectdb() 

app.use("/api/user", authRoute);
app.use("/api/product", ProductRoute);

if(process.env.NODE_ENV==="graduction"){
    app.use{express.static{}}
}
app.listen(process.env.port ||5000,()=>
console.log(`server is running on port ${process.env.port} `)) 