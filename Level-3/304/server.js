import express from "express";
import crypto from "crypto";
import { generateToken } from "./utils/index.js";

const app = express();
const PORT = 3000;

app.use(express.json());

const users = [
  {
    id: 1,
    userName: "doraemon",
    address: "Japan",
    phone: "123456789",
    email: "doraemon@gmail.com",
    password: "1234567890",
  },
];
app.post("/login", (req, res) => {
  try {
    const { email, password } = req.body;

    const findUser = users.find((user) => {
      return user.email === email && user.password === password;
    });

    if (!findUser) throw new Error("Sai tai khoan va mat khau");

    const token = generateToken({
      if: findUser.id,
      email: findUser.email,
    });
    res.status(200).send({
      message: "thanh cong",
      data: token,
    });
  } catch (error) {
    res.status(403).send({
      message: error.message,
      data: null,
    });
  }
});

app.post("/signup", (req, res) => {
  try {
    const { email, password } = req.body;
    const checkExitUser = users.find((user) => {
      return user.email === email;
    });
    if (checkExitUser) throw new Error("Email da ton tai.");
    const newUser = {
      id: crypto.randomUUID(),
      userName: email,
      address: "Japan",
      phone: "123456789",
      email: email,
      password: password,
    };
    users.push(newUser);

    res.status(200).send({
      message: " Thanh cong",
      data: users,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
      data: null,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
