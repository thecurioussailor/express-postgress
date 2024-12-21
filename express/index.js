const express = require("express");
const app = express();
const pool = require("./db");
const cors = require('cors');
app.use(cors())
app.use(express.json());

app.post("/student", async (req, res) => {
    const studentData = req.body;
    const rollno = studentData.rollno;
    const name = studentData.name;
    const gender = studentData.gender;
    const phone = studentData.phone;
    const city = studentData.city;
    const result = await pool.query(
        'INSERT INTO student (rollno, name, gender, phone, city) VALUES ($1, $2, $3, $4, $5)', [rollno, name, gender, phone, city]
    )
    res.status(201).json({
        message: "data has been created in database"
    })

})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})