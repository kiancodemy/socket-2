import jwt from "jsonwebtoken";

export const jwtmaker = (id, res) => {
  var token = jwt.sign({ id }, process.env.jwtPass, {
    expiresIn: "2000 days",
  });
  if (!token) {
    throw new Error("token did not provided");
  }

  res.cookie("jwt", token, {
    maxAge: 700 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: process.env.MODE !== "development",
    sameSite: "strict",
  });
  return token;
};
