import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async () => {
    try{
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}${DB_NAME}`);
        console.log("mongoDB connected! || hosted at", connection.connection.host)
    }catch(error){
        console.log("Error in DB coneection", error);
        process.exit(1);
    }
}

export default connectDB;