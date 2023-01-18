const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { sequelize, Student, Course, Note } = require("./util/sequelize");

const app = express();
const port = 3001;

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.post("/api/auth", async (req, res) => {
  const { email } = req.body;
  if (email) {
    try {
      const existingStudent = await Student.findOne({
        where: { email },
        include: {
          model: Course,
          include: "notes",
        },
      });
      console.log(existingStudent);
      if (existingStudent) {
        return res.status(201).json(existingStudent.dataValues);
      } else {
        const student = await Student.create({ email });
        res.status(201).json({ ...student.dataValues, courses: [] });
      }
    } catch (error) {
      console.error(error);
      res.status(404).json({ error });
    }
  } else {
    res.status(400).json({ error: "Missing fields" });
  }
});

app.post("/api/courses/:id/notes", async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  if (id && title) {
    try {
      const newNote = await Note.create({ title, courseId: id, content: "" });
      console.log(newNote);
      res.status(201).json(newNote.dataValues);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  } else {
    res.status(400).json({ error: "Missing fields" });
  }
});

app.get("/api/courses/:id", async(req, res) => {
  const { id } = req.params;
  if (id) {
    try {
      const course = await Course.findOne({ where: { id } });
      if (course) {
        res.status(201).json(course.dataValues);
      } else {
        res.status(404).json({ error: "Course not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  } else {
    res.status(400).json({ error: "Missing fields" });
  }
})

app.put("/api/notes/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  if (id && title && content) {
    try {
      const note = await Note.findOne({ where: { id } });
      if (note) {
        await note.update({ title, content });
        res.status(201).json(note.dataValues);
      } else {
        res.status(404).json({ error: "Note not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  } else {
    res.status(400).json({ error: "Missing fields" });
  }
});

app.delete("/api/notes/:id", async (req, res) => {
  const { id } = req.params;
  if (id) {
    try {
      const note = await Note.findOne({ where: { id } });
      if (note) {
        await note.destroy();
        res.status(201).json({ message: "Note deleted" });
      } else {
        res.status(404).json({ error: "Note not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  } else {
    res.status(400).json({ error: "Missing fields" });
  }
});

app.post("/api/students/:email/courses", async (req, res) => {
  const { email } = req.params;
  const { id, name, description } = req.body;
  if (id && name && description) {
    try {
      const createdCourse = await Course.create({
        id,
        name,
        description,
        studentEmail: email,
      });
      res.status(201).json(createdCourse.dataValues);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  } else {
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
