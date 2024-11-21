import jwt from "jsonwebtoken";
import User from "../model/user.model.js";

export const authUser = async (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    throw new Error("Access Denied: No Token Provided!");
  }

  try {
    const { id } = jwt.verify(token, process.env.jwtPass);
    const find = await User.findById(id);
  

    req.user = find;

    next();
  } catch (err) {
    res.status(401).json({
      meessage: err.message + "kia",
    });
  }
};
