import mongoose from "mongoose";
import {
  addTeacherToDb,
  getAllTeacher,
  getTeacherByName,
  getTeacherById,
  updateTeacherByID,
  deleteTeacherByID,
} from "./teachers.js";

import {
  addStudentToDb,
  getAllStudent,
  getStudentById,
  findStudentByName,
  findStudentById,
  updateStudentById,
  deleteStudentById,
} from "./students.js";

import "dotenv/config";

const dbFunction = {
  connectToDb: async () => {
    try {
      await mongoose.connect(process.env.DB_URL);
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
