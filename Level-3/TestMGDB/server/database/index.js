import mongoose from "mongoose";
import { addTeacherToDb } from "./teachers.js";
import { addStudentToDb } from "./students.js";

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
  addStudentToDb,
};

export default dbFunction;
