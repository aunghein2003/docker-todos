const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = 5000;
const URL = process.env.MONGO_URI;

if (!URL) {
  throw new Error("Mongo Uri was not found!");
}

mongoose
  .connect(URL)
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((err) => console.log("Error connecting to mongodb", err));

app.listen(PORT, () => console.log(`Listen on ${PORT}`));
