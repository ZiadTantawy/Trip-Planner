import express from "express";
import connectDB from "./config/db";
import dotenv from "dotenv";
import User from "./models/User";
import Trip from "./models/Trip";
import Activity from "./models/Activity";
import Expense from "./models/Expense";
import Recommendation from "./models/Recommendation";
import Chat from "./models/Chat";

dotenv.config();

const app = express();
const port = 3000;






app.get("/", (req, res) => {
  connectDB();
  res.send("Hello World!");
});


app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
})