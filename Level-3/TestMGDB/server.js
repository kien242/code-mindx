import express from "express";
import "dotenv/config";
import dbFunction from "./src/database/index.js";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  console.log("fasdh");
  res.json({
    message: "Thanh cong",
  });
});

app.listen(process.env.PORT || 2402, async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/quanlynhatro");
  } catch (error) {
    console.log(error);
  }
  console.log("App listen on PORT", process.env.PORT);
});
