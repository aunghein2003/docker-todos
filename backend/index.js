require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

const PORT = 5000;

app.use(express.json());
app.use(cors());

//Database
require("./config/db");

//Routes - Todos
app.use("/todos", require("./routes/todos"));

app.listen(PORT, () => console.log(`Listen on ${PORT}`));
