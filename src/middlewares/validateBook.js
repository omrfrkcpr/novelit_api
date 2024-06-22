"use strict";

module.exports = {
  validateBook: (req, res, next) => {
    const { title, author, isbn, genre, publicationYear } = req.body;

    if (title.trim().length > 50 || title.trim().length < 2) {
      return res.status(400).send({
        error: true,
        message: "Title must be between 2 and 50 characters",
      });
    } else if (author.trim().length > 50 || author.trim().length < 2) {
      return res.status(400).send({
        error: true,
        message: "Author must be between 2 and 50 characters",
      });
    } else if (!isbn.trim().includes("-")) {
      return res.status(400).send({
        error: true,
        message: "Please enter a valid ISBN code",
      });
    } else if (
      genre.trim().length > 12 ||
      genre.trim().length < 2 ||
      genre.trim().includes(" ")
    ) {
      return res.status(400).send({
        error: true,
        message:
          "Genre must be between 2 and 12 characters, and should not contain spaces",
      });
    } else if (publicationYear > new Date().getFullYear()) {
      return res.status(400).send({
        error: true,
        message: "Please enter a valid publication year",
      });
    } else if (publicationYear < 1500) {
      return res.status(400).send({
        error: true,
        message:
          "Books dating back to years older than 1500 cannot be recorded.",
      });
    } else {
      next();
    }
  },
};
