import { listSubjects } from "../server.js";
const subjectController = {
  getDataSubject: (req, res) => {
    try {
      const { auth } = req.query;
      switch (auth) {
        case "STUDENT":
          res.status(200).send({
            message: "thanh cong",
            data: listSubjects.map((item) => {
              const newItem = {
                ...item,
              };
              delete newItem.avg;
              return newItem;
            }),
          });
          break;
        case "TEACHER":
          res.status(200).send({
            message: "thanh cong",
            data: listSubjects,
          });
          break;
      }
    } catch (error) {
      res.status(403).send({
        message: error.message,
        data: null,
      });
    }
  },
};

export default subjectController;
