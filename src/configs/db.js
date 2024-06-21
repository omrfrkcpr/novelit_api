//* db connect

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.SQLITE_DB_URL);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})(); //* IIFE
// sequelize
//   .authenticate()
//   .then(() => console.log("Db connected"))
//   .catch(() => console.log("Db not connected"));

module.exports = { sequelize };
