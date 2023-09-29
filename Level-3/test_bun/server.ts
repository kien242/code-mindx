import express, { Request, Response } from "express";
import dbFunction from "./src/database/index.ts";
import teacherRoute from "./src/routers/teacher-routers.ts";
import studentRoute from "./src/routers/student-routers.ts";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Thanh cong",
  });
});

app.use("/teacher", teacherRoute);
app.use("/student", studentRoute);

app.listen(Bun.env.PORT || 2402, () => {
  dbFunction.connectToDb();
  console.log("App listen on PORT", Bun.env.PORT);
});
