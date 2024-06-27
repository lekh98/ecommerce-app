//import productModel from '../models/productModel.js';
import productModel from './../models/productModel.js';


import fs from 'fs'


//add product item

const addProduct = async (req,resp)=>{
    let image_filename = `${req.file.filename}`;
    const product = new productModel({
        name:req.body.name,
        description:req.body.description,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
        category:req.body.category,
        image:image_filename
    }) 
    try {
        await product.save();
        resp.json({success:true,message:"Product Added"})
        
    } catch (error) {
        console.log(error)
        resp.json({success:false,message:"Error"})
        
    }

}
// all product list

const listProduct = async (req,resp)=>{
    try {
        const products = await productModel.find({})
        resp.json({success:true,data:products})
        
    } catch (error) {
        console.log(error)
        resp.json({success:false,message:"Error"})
        
    }

}
const removeProduct = async (req,resp)=>{
    try {
        const product = productModel.findById(req.body.id);
        fs.unlink(`uploads/${product.image}`,()=>{ console.log("removed from uploads folder") })
        await productModel.findByIdAndDelete(req.body.id)
        resp.json({success:true,message:"Product Item Deleated"})
        
    } catch (error) {
        console.log(error)
        resp.json({success:false,message:"Error"})
        
    }
    

}
export {addProduct,listProduct,removeProduct}