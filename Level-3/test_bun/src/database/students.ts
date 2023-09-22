import { Response, Request } from "express";
import { studentModel } from "./schema.ts";
interface Student {
  name: string;
  age: number;
  address: string;
  GPA: number;
  className: string;
}
export async function addStudentToDb(req: Request, res: Response) {
  const student: Student = req.body;
  const newStudent = new studentModel({
    name: student.name,
    age: student.age,
    address: student.address,
    GPA: student.GPA,
    className: student.className,
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
export async function getAllStudent(req: Request, res: Response) {}
export async function getStudentById(req: Request, res: Response) {}
export async function findStudentByName(req: Request, res: Response) {}
export async function findStudentById(req: Request, res: Response) {}
export async function updateStudentById(req: Request, res: Response) {}
export async function deleteStudentById(req: Request, res: Response) {}
