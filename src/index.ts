import 'dotenv/config'
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import connectDB from './db';


connectDB();

/*
import express from "express";
const app = express();
(async () => {
  try {`
    mongoose.connect(`${process.env.MONGODB_URI}${DB_NAME}`);
    app.on("error", (error) => {
      throw error;
    });


    app.listen(process.env.PORT, ()=> {
        console.log("app listening at port ", process.env.PORT);
    });

  } catch (error) {
    console.error(error)
  }
})();
*/