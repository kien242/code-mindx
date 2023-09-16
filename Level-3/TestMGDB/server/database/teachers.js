import { teachersModel } from "./schema.js";
async function addTeacherToDb(req, res) {
  const { name, age, address, hobbies } = req.body;
  const newTeacher = new teachersModel({
    name: name,
    age: age,
    address: address,
    hobbies: hobbies,
  });
  try {
    newTeacher.save();
    console.log("Added new teacher");
  } catch (error) {
    console.log(error);
  }
  res.status(202).send({
    message: `thanh cong luu vo`,
  });
}
async function getAllTeacher(req, res) {}
async function getTeacherByName(req, res) {}
async function deleteTeacherByName(req, res) {}
async function updateTeacherByName(req, res) {}

export { addTeacherToDb, getAllTeacher };
