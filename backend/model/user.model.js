import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required."],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
  password: {
    type: String,
    required: [true, "Password is required."],
  },
  gender: {
    type: String,
    require: [true, "gender is required"],
    enum: ["male", "female"],
  },
  picture: {
    type: String,
    default: "",
  },
});

// Pre-save hook to hash password
userSchema.pre(
  "save",
  async function (next) {
    if (!this.isModified("password")) return next();

    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (error) {
      next(error);
    }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
