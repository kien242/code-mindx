import express from "express";
const app = express();
const port = 3000;

// Handling '/' Request
app.get("/:id", (req, res) => {
  const param = req.params;
  console.log(param);
  res.send("TypeScript With Express");
  console.log(`TypeScript with Express http://localhost:${port}/`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
