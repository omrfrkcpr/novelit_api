//* Book Model
const { DataTypes } = require("sequelize");
const { sequelize } = require("../configs/db");

const Book = sequelize.define("book", {
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isbn: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
  },
  genre: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  publicationYear: {
    type: DataTypes.BIGINT,
  },
  image: {
    type: DataTypes.TEXT,
  },
});

sequelize.sync();
// sequelize.sync({ alter: true });

module.exports = Book;
