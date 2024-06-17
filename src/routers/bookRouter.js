"use strict";
const router = require("express").Router();
const books = require("../controllers/BookController");
const validateIdHandler = require("../middlewares/validateIdHandler");

router.route("/books").get(books.list).post(books.create);

router
  .route("/books/:id")
  .all(validateIdHandler)
  .get(books.get)
  .put(books.update)
  .patch(books.update)
  .delete(books.delete);

// app.use(router)
module.exports = router;
