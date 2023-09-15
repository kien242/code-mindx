import express from "express";
const app = express();
const port = 2402;

app.use(express.json());

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Handling '/' Request

app.post("/data", (req, res) => {
  const { reqHeader } = req.headers;
  const { newValue } = req.body;
  if (!newValue) {
    res.send({ message: "Chua cap gia tri" });
  } else {
    data.push(newValue);
    res.send({
      message: "thanh cong",
      newValue: newValue,
    });
  }
});

app.get("/data", (req, res) => {
  const { option } = req.query;
  switch (option) {
    case "LT10":
      res.send({
        message: "Thành công",
        data: data.filter((item) => item > 5),
      });
      break;
    case "GT10":
      res.send({
        message: "Thành công",
        data: data.filter((item) => item < 5),
      });
      break;
    default:
      res.send({
        message: "Thành công",
        data: data,
      });
      break;
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
