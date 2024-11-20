import express from "express";
import { connectToDB } from "./connect/connect.js";
import authrouter from "./routes/auth.routes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authrouter);
app.listen(4000, () => {
  connectToDB();
  console.log("connected");
});
