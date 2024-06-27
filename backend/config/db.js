import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect(process.env.MONGO_URI,{dbName:"ecommerce-app",})
    .then(()=>{console.log("Database is connected")})
 } 