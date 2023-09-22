import { Response, Request } from "express";
import { teachersModel } from "./schema.ts";
interface Teacher {
  name: string;
  age: number;
  address: string;
  hobbies: string;
}
export async function addTeacherToDb(req: Request, res: Response) {
  const teacher: Teacher = req.body;
  const newTeacher = new teachersModel({
    name: teacher.name,
    age: teacher.age,
    address: teacher.address,
    hobbies: teacher.hobbies,
  });
  try {
    newTeacher.save();
    res.status(202).send({
      message: "Added new teacher",
    });
  } catch (error: any) {
    console.log(error);
  }
}

export async function getAllTeacher(req: Request, res: Response) {
  const teachers = await teachersModel.find();
  console.log("first");
  res.status(200).send({
    message: "thanh cong",
    data: teachers,
  });
}

// truyền vào một query là teacherName
export async function getTeacherByName(req: Request, res: Response) {
  const teacherName = req.query.teacherName;
  try {
    const teacher = await teachersModel.find({ name: teacherName });
    if (teacher.length === 0) {
      throw new Error("Teacher not found");
    }
    res.status(200).send({
      message:
        "Thành công, tìm thấy " +
        teacher.length +
        " giáo viên có tên " +
        teacherName,
      data: teacher,
    });
  } catch (error: any) {
    res.status(402).send({
      message: error.message,
    });
  }
}

//Tìm kiến một giáo viên theo ID, truyền vào một query là ID
export async function getTeacherById(req: Request, res: Response) {
  const id = req.query.ID;
  try {
    const teacher = await teachersModel.findOne({ _id: id });
    res.status(200).send({
      message: "Thành công tìm thấy",
      data: teacher,
    });
  } catch (error: any) {
    res.status(403).send({
      message: "Khong tim thay giao vien co ID la " + id,
    });
  }
}

export async function updateTeacherByID(req: Request, res: Response) {
  const { id } = req.query;
  const update = req.body;

  try {
    const check = await teachersModel.findById(id).exec();
    if (check === null) {
      throw new Error("ID not found");
    }
    try {
      const teacher = await teachersModel.findByIdAndUpdate(id, update, {
        new: true,
      });
      res.status(200).send({
        message: "Update thành công",
        data: teacher,
      });
    } catch (error: any) {
      res.status(403).send({
        message: error.message,
      });
    }
  } catch (error: any) {
    console.log("2");
    res.status(403).send({ message: " khong tim thay ID" });
  }
}

export async function deleteTeacherByID(req: Request, res: Response) {
  const { id } = req.query;
  try {
    const check = await teachersModel.findById(id).exec();
    if (check === null) {
      throw new Error("ID not found");
    }
    try {
      await teachersModel.findByIdAndDelete(id, { strict: true });
      res.status(200).send({
        message: "Delete thành công",
      });
    } catch (error: any) {
      res.status(403).send({
        message: error.message,
      });
    }
  } catch (error: any) {
    res.status(403).send({ message: "khong tim thay ID" });
  }
}
