"use strict";
const express = require("express");
const cors = require("cors");
const job = require("./src/configs/cron");

require("express-async-errors");
require("dotenv").config();

const HOST = process.env.HOST || "127.0.0.1";
const SERVER_PORT = process.env.SERVER_PORT || 3000;
const CLIENT_HOST = process.env.CLIENT_HOST;

const app = express();

// Cron job
console.log("Cron job is being started...");
job.start();

app.use(cors({ origin: `${CLIENT_HOST}` }));
app.use(express.json());

app.all("/", (req, res) => {
  res.send("Welcome to Novelit API");
});

// ROUTER
app.use(require("./src/routers/bookRouter"));
app.use(require("./src/middlewares/errorHandler"));

app.listen(SERVER_PORT, () =>
  console.log(`server runned ${HOST}:${SERVER_PORT}`)
);
