import express from "express";
import "dotenv/config";
import dbFunction from "./server/database/index.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  console.log("fasdh");
  res.send({
    message: "Thanh cong",
  });
});

app.post("/add-teacher", dbFunction.addTeacherToDb);
app.post("/add-student", dbFunction.addStudentToDb);

app.listen(process.env.PORT || 2402, () => {
  dbFunction.connectToDb();
  console.log("App listen on PORT", process.env.PORT);
});
