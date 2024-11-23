import jwt from "jsonwebtoken";

export const jwtmaker = async (id, res) => {
  var token = jwt.sign({ id }, process.env.jwtPass, {
    expiresIn: "2000 days",
  });

  res.cookie("jwt", token, {
    maxAge: 700 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: process.env.MODE !== "development",
    sameSite: "strict",
  });
  return token;
};
