import { Request, Response } from "express";
import { studentModel } from "../models/student";

const getAllStudents = async (req: any, res: any): Promise<void> => {
  try {
    const students = await studentModel.find();
    if (students.length === 0) {
      return res.status(404).json({ message: "No students found" });
    }
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const getStudentById = async (req: any, res: any): Promise<void> => {
  try {
    const student = await studentModel.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const searchStudents = async (req: any, res: any): Promise<void> => {
  try {
    const { fullName, email } = req.query;
    const searchCriteria: any = {};
    if (fullName) {
      searchCriteria.fullName = { $regex: new RegExp(fullName as string, "i") };
    }
    if (email) {
      searchCriteria.email = { $regex: new RegExp(email as string, "i") };
    }
    const students = await studentModel.find(searchCriteria);
    if (students.length === 0) {
      return res.status(404).json({ message: "No students found" });
    }
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const addNewStudent = async (req: any, res: any): Promise<void> => {
  try {
    const data = req.body;
    if (!data) {
      return res.status(400).json({ message: "Please provide student data" });
    }
    const existingStudent = await studentModel.findOne({ email: data.email });
    if (existingStudent) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const newStudent = await studentModel.create(data);
    await newStudent.save();
    res.status(201).send(newStudent);
  } catch (error) {
    res.status(500).send({ message: "Server error" });
  }
};

const updateStudent = async (req: any, res: any): Promise<void> => {
  try {
    const updatedStudent = await studentModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedStudent) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const deleteStudent = async (req: any, res: any): Promise<void> => {
  try {
    const deletedStudent = await studentModel.findByIdAndDelete(req.params.id);
    if (!deletedStudent) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export {
  getAllStudents,
  getStudentById,
  searchStudents,
  addNewStudent,
  updateStudent,
  deleteStudent,
};
