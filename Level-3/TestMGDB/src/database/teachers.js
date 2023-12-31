import { teachersModel } from "./schema.js";

export async function addTeacherToDb(req, res) {
  const { name, age, address, hobbies } = req.body;
  const newTeacher = new teachersModel({
    name: name,
    age: age,
    address: address,
    hobbies: hobbies,
  });
  try {
    newTeacher.save();
    res.status(202).send({
      message: "Added new teacher",
      data: newTeacher,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getAllTeacher(req, res) {
  try {
    const teachers = await teachersModel.find();
    console.log(teachers);
    if (!teachers) {
      throw new Error("Database empty");
    }
    res.status(201).send({
      message: "thanh cong",
      data: teachers,
    });
  } catch (error) {
    res.status(201).send({
      message: error.message,
    });
  }
}

// truyền vào một query là teacherName
export async function getTeacherByName(req, res) {
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
  } catch (error) {
    res.status(402).send({
      message: error.message,
    });
  }
}

//Tìm kiến một giáo viên theo ID, truyền vào một query là ID
export async function getTeacherById(req, res) {
  const id = req.query.id;
  try {
    const check = await teachersModel.findById(id).exec();
    if (!check) {
      throw new Error("ID not found");
    }
    try {
      const teacher = await teachersModel.findOne({ _id: id });
      res.status(200).send({
        message: "Tim thay giao vien",
        data: teacher,
      });
    } catch (error) {
      res.status(403).send({
        message: error.message,
      });
    }
  } catch (error) {
    console.log("2");
    res.status(403).send({ message: error.message });
  }
}

export async function updateTeacherByID(req, res) {
  const { id } = req.query;
  const update = req.body;

  try {
    const check = await teachersModel.findById(id).exec();
    if (!check) {
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
    } catch (error) {
      res.status(403).send({
        message: error.message,
      });
    }
  } catch (error) {
    res.status(403).send({ message: error.message });
  }
}

export async function deleteTeacherByID(req, res) {
  const { id } = req.query;
  try {
    const check = await teachersModel.findById(id).exec();
    if (!check) {
      throw new Error("ID not found");
    }
    try {
      await teachersModel.findByIdAndDelete(id, { strict: true });
      res.status(200).send({
        message: "Delete thành công",
      });
    } catch (error) {
      res.status(403).send({
        message: error.message,
      });
    }
  } catch (error) {
    res.status(403).send({ message: error.message });
  }
}
