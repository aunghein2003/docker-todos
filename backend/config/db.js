const mongoose = require("mongoose");

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
