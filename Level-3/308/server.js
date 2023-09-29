import express from "express";

const app = express();

app.listen(Bun.env.PORT, () => {
  console.log(`Server running on port ${Bun.env.PORT}`);
});
