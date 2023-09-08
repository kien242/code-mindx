const subjectMiddleWares = {
  isValidAuth: (req, res, next) => {
    try {
      const { auth } = req.query;
      if (!auth || (auth !== "STUDENT" && auth !== "TEACHER"))
        throw new Error("Ban khong co quyen su dung");
      next();
    } catch (error) {
      res.status(403).send({
        message: error.message,
        data: null,
      });
    }
  },
};

export default subjectMiddleWares;
