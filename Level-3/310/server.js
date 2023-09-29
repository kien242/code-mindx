import express from "express";
import "dotenv/config";
import dbFunction from "./model/index.js";
import { customerModel } from "./model/database/schema.js";
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/add", async (req, res) => {
  console.log(req.body);
  const { name, email } = req.body;
  console.log(name);
  console.log(email);
  const newTest = new customerModel({
    name,
    email,
  });
  try {
    newTest.save();
    console.log("test successfully saved");
    res.status(200).send({
      message: "test successfully saved",
      data: newTest,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});
app.listen(process.env.PORT, () => {
  dbFunction.connectToDb();
  console.log(`Server is running on port ${process.env.PORT}`);
});
