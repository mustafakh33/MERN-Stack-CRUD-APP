import express from "express";
import mongoose from "mongoose";
import studentsRouter from "./routers/students";
import cors from "cors"

const app = express();
// const port = 3000 ;
const port = process.env.PORT || 3000;


app.use(express.json());

app.use((req:any, res:any, next:any) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    return res.status(200).json({});
  }
  next();
});

mongoose
  .connect("mongodb://127.0.0.1:27017/students")
  .then(() => console.log("Connected!"));

app.use("/students", studentsRouter);

app.listen(port, () => {
  console.log("listening on port" + port);
});
