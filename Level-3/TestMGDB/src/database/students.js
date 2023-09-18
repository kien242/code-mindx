import { studentModel } from "../database/schema.js";

export async function addStudentToDb(req, res) {
  const { name, age, address, GPA, className } = req.body;
  const newStudent = new studentModel({
    name: name,
    age: age,
    address: address,
    GPA: GPA,
    className: className,
  });
  try {
    newStudent.save();
    console.log("Added new student");
  } catch (error) {
    console.log(error);
  }
  res.status(202).send({
    message: "Save to database",
  });
}
export async function getAllStudent(req, res) {}
export async function getStudentById(req, res) {}
export async function findStudentByName(req, res) {}
export async function findStudentById(req, res) {}
export async function updateStudentById(req, res) {}
export async function deleteStudentById(req, res) {}
