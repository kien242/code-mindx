import express from "express";
const app = express();
data = [
  {
    name: "tran kien",
    email: "<EMAIL>",
  },
  {
    name: "truowng tran",
    email: "<EMAIL>",
  },
];

app.get("/", (req, res) => {
  res.status(200).send({
    data: data,
  });
});
app.listen(3456, () => {
  console.log("Server is running on port 3456");
});
