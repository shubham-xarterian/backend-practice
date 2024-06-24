"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const db_1 = __importDefault(require("./db"));
(0, db_1.default)();
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
