require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = 5000;

app.use(express.json());

//Database
require("./config/db");

//Routes - Todos
app.use("/todos", require("./routes/todos"));

app.listen(PORT, () => console.log(`Listen on ${PORT}`));
