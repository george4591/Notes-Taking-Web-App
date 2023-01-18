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
        contains: 'stud.ase.ro'
      }
    },
  });
  
module.exports = {
    sequelize,
    Student
}