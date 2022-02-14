
const productSchema=require('../models/product')

exports.AddProduct=  async(req,res)=>{
    const {name,price,pic,qte}=req.body
    
    try {
      
      const newproduct= new productSchema({
            name,price,pic,qte
        })
      
        await newproduct.save()
       
        res.status(200).send({msg:"the store is created ",newproduct})
    } catch (error) {
        res.status(500).send({errors:[{msg:"failed to create store "}]}) ;
    }
    
}
exports.getProducts=async(req,res)=>{
    try {
    const findproduct= await productSchema.find();
    res.status(200).send({msg: "this is all our stores ",findproduct})
} catch (error) {
    res.status(500).send({errors:[{msg:"failed to get the stores"}]})

}
}
exports.getProduct=async(req,res)=>{
    try {
    const found= await productSchema.findOne();
    res.status(200).send({msg: "this is all our stores ",found})
} catch (error) {
    res.status(500).send({errors:[{msg:"failed to get the stores"}]})
}
}
exports.deleteProduct=async(req,res)=>{
    const {id}=req.params
    try {
        const productDeleted = await productSchema.findByIdAndDelete(id);
        res.status(200).send({msg:"Store deleted",productDeleted});
        
    } catch (error) {
        res.status(500).send({msg:"could not delete store",error});
    }

}
exports.updateProduct=async(req,res)=>{
    try {
        const product= await productSchema.findByIdAndUpdate();
        res.status(200).send({msg: "store updeted with success ",product})
    } catch (error) {
        res.status(500).send({errors:[{msg:"failed to update the stores"}]})
    
    }
    }
