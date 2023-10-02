import express from "express";
import mongoose from "mongoose";
const app = express();

mongoose.connect("mongodb://localhost:27017");

const userSchema = mongoose.Schema({
  userName: { type: String, require: true, unique: true },
  age: Number,
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});

export const UserModel = mongoose.model("users", userSchema);

app.get("/", () => {
  console.log("Hello World!");
});

app.listen(Bun.env.PORT, () => {
  console.log(Bun.env.PORT);
});
