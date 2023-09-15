import mongoose from "mongoose";

const Schema = mongoose.Schema;
const studentSchema = new Schema({
  name: String,
  age: Number,
  address: String,
  GPA: Number,
  className: String,
});
const teacherSchema = new Schema({
  name: String,
  age: Number,
  address: String,
  hobbies: String,
});

const classSchema = new Schema({
  name: String,
  numOfStudent: Number,
});

export const studentModel = mongoose.model("studentModel", studentSchema);
export const teachersModel = mongoose.model("teachersModel", teacherSchema);
export const classModel = mongoose.model("classModel", classSchema);
