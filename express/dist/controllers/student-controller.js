"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudent = exports.updateStudent = exports.addNewStudent = exports.searchStudents = exports.getStudentById = exports.getAllStudents = void 0;
const student_1 = require("../models/student");
const getAllStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield student_1.studentModel.find();
        if (students.length === 0) {
            return res.status(404).json({ message: "No students found" });
        }
        res.status(200).json(students);
    }
    catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});
exports.getAllStudents = getAllStudents;
const getStudentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield student_1.studentModel.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ error: "Student not found" });
        }
        res.status(200).json(student);
    }
    catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});
exports.getStudentById = getStudentById;
const searchStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fullName, email } = req.query;
        const searchCriteria = {};
        if (fullName) {
            searchCriteria.fullName = { $regex: new RegExp(fullName, "i") };
        }
        if (email) {
            searchCriteria.email = { $regex: new RegExp(email, "i") };
        }
        const students = yield student_1.studentModel.find(searchCriteria);
        if (students.length === 0) {
            return res.status(404).json({ message: "No students found" });
        }
        res.status(200).json(students);
    }
    catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});
exports.searchStudents = searchStudents;
const addNewStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        if (!data) {
            return res.status(400).json({ message: "Please provide student data" });
        }
        const existingStudent = yield student_1.studentModel.findOne({ email: data.email });
        if (existingStudent) {
            return res.status(400).json({ message: "Email already exists" });
        }
        const newStudent = yield student_1.studentModel.create(data);
        yield newStudent.save();
        res.status(201).send(newStudent);
    }
    catch (error) {
        res.status(500).send({ message: "Server error" });
    }
});
exports.addNewStudent = addNewStudent;
const updateStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedStudent = yield student_1.studentModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedStudent) {
            return res.status(404).json({ error: "Student not found" });
        }
        res.status(200).json(updatedStudent);
    }
    catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});
exports.updateStudent = updateStudent;
const deleteStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedStudent = yield student_1.studentModel.findByIdAndDelete(req.params.id);
        if (!deletedStudent) {
            return res.status(404).json({ error: "Student not found" });
        }
        res.status(200).json({ message: "Student deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});
exports.deleteStudent = deleteStudent;
