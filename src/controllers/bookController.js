"use strict";

const Book = require("../models/bookModel");

const { sequelize } = require("../configs/db");

module.exports = {
  list: async (req, res, next) => {
    // const data = await sequelize.query("SELECT * FROM books") //* klasik sql sorguların yerine ORM kullanıyoruz.
    // const data = await Book.findAndCountAll()
    // const data = await Book.findAll()
    // try {
    //   const data = await Book.findAll({
    //     where: {
    //       isActive: true,
    //     },
    //   });
    //   // throw new Error("Hata fırlattım, yakala!")
    //   console.log(data);
    //   res.status(200).send({
    //     error: false,
    //     books: datas,
    //   });
    // } catch (error) {
    //   next(error)
    // }

    const data = await Book.findAll();
    // throw new Error("Hata fırlattım, yakala!")
    console.log(data);
    res.status(200).send({
      error: false,
      books: data,
    });
  },
  create: async (req, res) => {
    // const { firstName, lastName, email, phone, address, isActive } = req.body;
    // const data = await sequelize.query(
    //   "INSERT INTO books (firstName,lastName,email,phone,address,createdAt,updatedAt,isActive) VALUES (?,?,?,?,?,?,?,?)",
    //   {
    //     replacements: [
    //       firstName,
    //       lastName,
    //       email,
    //       phone,
    //       address,
    //       new Date(),
    //       new Date(),
    //       isActive || true,
    //     ],
    //   }
    // );//* Klasik sql sorgusu
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
