"use strict";
const express = require("express");
const cors = require("cors");

require("express-async-errors");

const corsOptions = {
  origin: `http://localhost:${process.env.PORT}`,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();
app.use(cors(corsOptions));

app.use(express.json());
// app.all("/", (req, res) => {
//   res.send("Library Management APP");
// });

// ROUTER
app.use(require("./src/routers/BookRouter"));
app.use(require("./src/middlewares/errorHandler"));

app.listen(8000, () => console.log(`server runned http://localhost:8000`));
