import User from "../model/user.model.js";
export const getAllUser = async (req, res) => {
  try {
    const find = await User.find({ _id: { $ne: req.user._id } });

    res.status(201).json(find);
  } catch (err) {
    res.status(401).json({
      messsage: err.messsage,
    });
  }
};
