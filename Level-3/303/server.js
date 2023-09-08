import express from "express";
import appRouter from "./routes/index.js";
import subjectController from "./controllers/subjects.js";
import subjectMiddleWares from "./middlewares/subjects.js";

const app = express();
const PORT = 2402;

app.use(express.json());
app.use("/api/v1", appRouter);

export const listSubjects = [
  {
    id: 1,
    subjectName: "Toan",
    resource: "NXB Kim Dong",
    course: "Khoi tu nhien",
    avg: 8.2,
  },
  {
    id: 2,
    subjectName: "Vat Ly",
    resource: "NXB Kim Dong",
    course: "Khoi tu nhien",
    avg: 6.9,
  },
  {
    id: 3,
    subjectName: "Hoa Hoc",
    resource: "NXB Kim Dong",
    course: "Khoi tu nhien",
    avg: 7,
  },
];
app.get(
  "/subjects",
  subjectMiddleWares.isValidAuth,
  subjectController.getDataSubject
);

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});

/*
    - Create new post       POST   /posts      (C) Crete
    - Gel all:              GET    /posts      (R) Read
    - Get by id:            GET    /posts/:id  (R) Read
    - Update a post         PUT    /posts/:id  (U) Update
    - Delete a posts        DELETE /posts/:id  (D) Delete
*/
