import mongoose from "mongoose";
import {
  addTeacherToDb,
  getAllTeacher,
  getTeacherByName,
  getTeacherById,
  updateTeacherByID,
  deleteTeacherByID,
} from "./teachers.ts";

import {
  addStudentToDb,
  getAllStudent,
  getStudentById,
  findStudentByName,
  findStudentById,
  updateStudentById,
  deleteStudentById,
} from "./students.ts";

const dbFunction = {
  connectToDb: async () => {
    try {
      await mongoose.connect(`${Bun.env.DB_URL}`);
    } catch (error) {
      console.log(error);
    }
  },
  addTeacherToDb,
  getAllTeacher,
  getTeacherByName,
  getTeacherById,
  updateTeacherByID,
  deleteTeacherByID,

  addStudentToDb,
  getAllStudent,
  getStudentById,
  findStudentByName,
  findStudentById,
  updateStudentById,
  deleteStudentById,
};

export default dbFunction;
