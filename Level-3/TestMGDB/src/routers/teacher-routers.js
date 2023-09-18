import express from "express";
import dbFunction from "../database/index.js";

const teacherRouter = express.Router();

teacherRouter.post("/add-teacher", dbFunction.addTeacherToDb);
teacherRouter.get("/get-all-teachers", dbFunction.getAllTeacher);
teacherRouter.get("/find-teacher-by-name", dbFunction.getTeacherByName);
teacherRouter.get("/find-teacher-by-ID", dbFunction.getTeacherById);
teacherRouter.put("/update-teacher", dbFunction.updateTeacherByID);
teacherRouter.delete("/delete-teacher", dbFunction.deleteTeacherByID);

export default teacherRouter;
