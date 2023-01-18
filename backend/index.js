const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { sequelize, Student, Course } = require("./util/sequelize");

const app = express();
const port = 3001;

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.post("/api/auth", async (req, res) => {
  const { email } = req.body;
  if (email) {
    try {
      const existingStudent = await Student.findOne({ where: { email }, include: "courses" });
      console.log(existingStudent);
      if (existingStudent) {
        return res.status(201).json(existingStudent.dataValues);
      } else {
        const student = await Student.create({ email });
        res.status(201).json({...student.dataValues, courses: []});
      }
    } catch (error) {
      console.error(error);
      res.status(404).json({ error });
    }
  } else {
    res.status(400).json({ error: "Missing fields" });
  }
});

app.post("/api/students/:email/courses", async (req, res) => {
  const { email } = req.params;
  const {id, name, description} = req.body;
  if (id && name && description) {
    try {
      const createdCourse = await Course.create({id, name, description, studentEmail: email});
      res.status(201).json(createdCourse.dataValues);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  }
  else {
    res.status(400).json({ error: "Missing fields" });
  }
});

app.get("api/students/:email", async (req, res) => {
  let { email } = req.params;
  console.log(email);

  try {
    const student = await Student.findOne({
      where: { email },
    });
    if (student) {
        console.log("STUDENT FOUND");
      res.status(201).json(student.dataValues);
    } else {
      res.status(404).json({ error: "Student not found" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});

sequelize.sync({ force: true }).then(() => {
  console.log("Database synced");
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});
