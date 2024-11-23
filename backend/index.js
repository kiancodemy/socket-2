import express from "express";
import { connectToDB } from "./connect/connect.js";
import authrouter from "./routes/auth.routes.js";
import MessageRouter from "./routes/message.routes.js";
import cookieparser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());

app.use("/api/auth", authrouter);
app.use("/api/message", MessageRouter);
app.use("/api", userRouter);

app.listen(4000, () => {
  connectToDB();
  console.log("connected");
});
