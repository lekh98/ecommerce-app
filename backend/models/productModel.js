import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    new_price:{type:String,required:true},
    old_price:{type:String},
    image:{type:String,required:true},
    category:{type:String,required:true}
})

const productModel = mongoose.models.product || mongoose.model("product",productSchema);
export default productModel;