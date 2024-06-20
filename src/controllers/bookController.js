"use strict";

const Book = require("../models/bookModel");

const { sequelize } = require("../configs/db");

module.exports = {
  list: async (req, res, next) => {
    const data = await Book.findAll({
      order: [["updatedAt", "DESC"]],
    });
    // console.log(data);
    res.status(200).send({
      error: false,
      books: data,
    });
  },
  create: async (req, res) => {
    const data = await Book.create(req.body); //! ORM

    res.status(201).send({
      error: false,
      books: data,
    });
  },
  get: async (req, res) => {
    const book = await Book.findByPk(req.params.id);
    res.status(201).send({
      error: false,
      book,
    });
  },
  update: async (req, res) => {
    const book = await Book.findByPk(req.params.id);
    const data = await book.update(req.body);
    res.status(201).send({
      error: false,
      book: data,
    });
  },
  delete: async (req, res) => {
    const book = await Book.findByPk(req.params.id);
    const data = await book.destroy();
    res.status(201).send({
      error: false,
      book: data,
    });
  },
};
