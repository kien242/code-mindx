import { teachersModel } from "./schema.js";
async function addTeacherToDb(req, res) {
  const { name, age, address, subject } = req.body;
  const newTeacher = new teachersModel({
    name: name,
    age: age,
    address: address,
    subject: subject,
  });
  try {
    newTeacher.save();
    console.log("Added new teacher");
  } catch (error) {
    console.log(error);
  }
  res.status(202).send({
    message: "Added new teacher",
  });
}
async function getAllTeacher(req, res) {
  const allTeacher = await teachersModel.find();
  res.status(200).send({
    message: "thanh cong",
    data: allTeacher,
  });
}
async function getTeacherByName(req, res) {}
async function deleteTeacherByName(req, res) {}
async function updateTeacherByName(req, res) {}

export {
  addTeacherToDb,
  getAllTeacher,
  deleteTeacherByName,
  updateTeacherByName,
  getTeacherByName,
};
