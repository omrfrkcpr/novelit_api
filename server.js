"use strict";
const express = require("express");
const cors = require("cors");

require("express-async-errors");
require("dotenv").config();

const HOST = process.env.HOST;
const SERVER_PORT = process.env.SERVER_PORT;
const CLIENT_PORT = process.env.CLIENT_PORT;

const app = express();
app.use(cors({ origin: `${HOST}:${CLIENT_PORT}` }));
app.use(express.json());

// app.all("/", (req, res) => {
//   res.send("Library Management APP");
// });

// ROUTER
app.use(require("./src/routers/BookRouter"));
app.use(require("./src/middlewares/errorHandler"));

app.listen(SERVER_PORT, () =>
  console.log(`server runned ${HOST}:${SERVER_PORT}`)
);
