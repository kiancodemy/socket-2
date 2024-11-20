import User from "../model/user.model.js";
export const login = async (req, res) => {
  res.send("hi");
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
    });
  } catch (err) {
    res.status(401).json({
      status: "fail",
      message: err.message,
    });
  }
};
export const logout = async (req, res) => {
  res.send("hi");
};
