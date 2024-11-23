import User from "../model/user.model.js";
import { jwtmaker } from "../jwt/jwt.js";
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const find = await User.findOne({ email });
    if (!email || !password) {
      throw new Error("fill out all sections");
    } else if (!find) {
      throw new Error("the email doe not exist");
    } else if (find && (await find.pass(password))) {
      jwtmaker(find._id, res);
    }

    res.status(201).json({
      _id: find._id,
      username: find.username,
      gender: find.gender,
      picture: find.picture,
    });
  } catch (err) {
    res.status(401).json({
      status: "failed",
      message: err.message,
    });
  }
};
export const sigup = async (req, res) => {
  try {
    const { username, email, password, confirm, gender } = req.body;
    const find = await User.findOne({ email });
    if (find) {
      throw new Error("the email already exsit");
    } else if (!username || !email || !password || !gender) {
      throw new Error("fill all the sections");
    } else if (password !== confirm) {
      throw new Error("password and confirmpass are not equal");
    }
    await User.create({
      username,
      email,
      password,
      gender,
      picture: "https://avatar.iran.liara.run/public",
    });
    res.status(201).json({
      status: "success",
      message: "signup successfully",
    });
  } catch (err) {
    res.status(401).json({
      status: "fail",
      message: err.message || "failed to signup",
    });
  }
};
export const logout = async (req, res) => {
  try {
    await res.clearCookie("jwt");
    res.status(201).json({
      status: "success",
      message: "logout successfully",
    });
  } catch (err) {
    res.status(201).json({
      status: "failed",
      message: "failed logout",
    });
  }
};
