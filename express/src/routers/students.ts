import express from "express";
import {
  getAllStudents,
  getStudentById,
  searchStudents,
  addNewStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/student-controller";

const router = express.Router();

router.get("/search", searchStudents);
router.get("/", getAllStudents);
router.get("/:id", getStudentById);
router.post("/add", addNewStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

export default router;
