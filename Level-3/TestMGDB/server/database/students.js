import { studentModel } from "./schema.js";

async function addStudentToDb(req, res) {
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
  } catch (error) {
    console.log(error);
  }
  res.status(202).send({
    message: `lưu thành công vào db`,
  });
}
async function getAllStudent(req, res) {}
async function getStudentById(req, res) {}
async function updateStudentById(req, res) {}
async function deleteStudentById(req, res) {}

export { addStudentToDb };
