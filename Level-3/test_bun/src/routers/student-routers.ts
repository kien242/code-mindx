import express from "express";
import dbFunction from "../database/index.ts";

const studentRouter = express.Router();

studentRouter.post("/add-student", dbFunction.addStudentToDb);
studentRouter.get("/get-all-students", dbFunction.getAllStudent);
studentRouter.get("/find-student-by-name", dbFunction.findStudentByName);
studentRouter.get("/find-student-by-id", dbFunction.findStudentById);
studentRouter.put("/update-student-by-id", dbFunction.updateStudentById);
studentRouter.delete("/delete-student-by-id", dbFunction.deleteStudentById);

export default studentRouter;
