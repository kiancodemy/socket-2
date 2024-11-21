import express from "express";
import { sendmessage, getMessages } from "../controlers/message.controler.js";
import { authUser } from "../middleware/Authuser.js";
const router = express.Router();
router.post("/send/:id", authUser, sendmessage);
router.get("/:id", authUser, getMessages);

export default router;
