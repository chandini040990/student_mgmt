const Student = require("../models/Student");

//get all the students 

exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        return res.status(500).send("server error")
    }
}


exports.addStudent = async (req, res) => {
    const { name, age, course } = req.body;
    try {
        const newStudent = new Student({
            name,
            age,
            course
        })

        const student = await newStudent.save();
        res.json(student);
    } catch (error) {
        return res.status(500).send("server error")
    }
}





