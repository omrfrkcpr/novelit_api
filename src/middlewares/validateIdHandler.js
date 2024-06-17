const Book = require("../models/bookModel");

module.exports = async (req, res, next) => {
  const book = await Book.findByPk(req.params.id);
  if (book) {
    next();
  } else {
    res.errorStatusCode = 404;
    throw new Error("Book info not found", {
      cause: `Sent book id info: ${req.params.id}`,
    });
  }
};
