import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


const connectionString = process.env.MONGO_URI||"mongodb://localhost:27017/trip-planner";

const connectDB=async()=>{
    try{
        await mongoose.connect(connectionString);
        console.log("connection to DB is successful");
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}
export default connectDB;