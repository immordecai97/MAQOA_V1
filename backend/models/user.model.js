import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: false,
      unique: false,
    },
    password: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
      unique: false,
    },
    role: {
      type: String,
      enum: ["partner", "client"],
      default: "client",
      required: false,
    },
  },
  { timestamps: true }
);

const UserModel = model("User", UserSchema);
export default UserModel