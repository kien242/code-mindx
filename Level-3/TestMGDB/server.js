import express from "express";
import "dotenv/config";
import dbFunction from "./server/database/index.js";
import mongoose from "mongoose";

// collection: tap hop cac du lieu(document)
// schema: dinh nghia mot document
// database: noi luu tru cac collection
dbFunction.connectToDb(); // connect to database

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  console.log("fasdh");
  res.send({
    message: "Thanh cong",
  });
});

app.post("/add-teacher", dbFunction.addTeacherToDb);
app.get("/get-all-teachers", dbFunction.getAllTeacher);
app.post("/add-student", dbFunction.addStudentToDb);

app.listen(process.env.PORT || 2402, () => {
  console.log("App listen on PORT", process.env.PORT);
});
