import express from "express";
import "dotenv/config";
import dbFunction from "./src/database/index.js";
import teacherRoute from "./src/routers/teacher-routers.js";
import studentRoute from "./src/routers/student-routers.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  console.log("fasdh");
  res.send({
    message: "Thanh cong",
  });
});

app.use("/teacher", teacherRoute);
app.use("/student", studentRoute);

app.listen(process.env.PORT || 2402, () => {
  dbFunction.connectToDb(); // connect to database
  console.log("App listen on PORT", process.env.PORT);
});
