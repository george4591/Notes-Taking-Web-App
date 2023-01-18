const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./util/app.db",
});

const Student = sequelize.define("student", {
  email: {
    type: Sequelize.STRING,
    primaryKey: true,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
      contains: "stud.ase.ro",
    },
  },
});

const Course = sequelize.define("course", {
  courseId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  title: Sequelize.STRING,
  description: Sequelize.STRING,
});

Student.hasMany(Course, {
  foreignKey: "courseId",
});

module.exports = {
  sequelize,
  Student,
  Course,
};
