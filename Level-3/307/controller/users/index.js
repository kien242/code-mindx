import { UserModel } from "../../index.js";

const userController = {
  async create(req, res) {
    try {
      const data = req.body;
      const newUser = await UserModel.create(data);
      res.status(201).send({
        message: "User created successfully",
        data: newUser,
        success: true,
      });
    } catch (error) {
      res.status(403).send({
        message: error.message,
        data: null,
        success: false,
      });
    }
  },
};

export default UserController;
