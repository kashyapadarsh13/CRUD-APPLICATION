import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const mongo_url=process.env.db_url;
const connectDB = async()=>{
   const connect = await mongoose.connect(mongo_url , {
    useNewUrlParser:true,
    useUnifiedTopology:true
   })
   if(connect){
    console.log('connection successfull...')
   }else{
    console.log("connection failed...")
   }
}


export default connectDB;