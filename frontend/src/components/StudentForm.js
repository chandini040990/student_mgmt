import { useState } from "react";
import "./StudentForm.css";

function StudentForm() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [course, setCourse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const student = { name, age, course };
        try {
            const res = await fetch("http://localhost:5001/api/students", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(student)
            });
            if (res.ok) {
                const data = await res.json();
                console.log(data);
                setName('');
                setAge('');
                setCourse('');
            } else {
                console.log("failed to submit");
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="student-form">
                <h2>Add the student to the database</h2>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="Number"
                    placeholder="Enter your age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Enter your course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default StudentForm