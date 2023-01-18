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
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  studentEmail: {
    type: Sequelize.STRING,
    references: {
      model: Student,
      key: "email",  
    },
  },
  name: Sequelize.STRING,
  description: Sequelize.STRING,
});

Student.hasMany(Course, {
  foreignKey: "studentEmail",
});

Course.belongsTo(Student, {
  foreignKey: "studentEmail",
});

module.exports = {
  sequelize,
  Student,
  Course
};
