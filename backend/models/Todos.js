const mongoose = require("mongoose");

const todosSchema = new mongoose.Schema({
  label: {
    type: String,
    requried: true,
  },
  important: {
    type: Boolean,
    default: false,
  },
});

const Todos = mongoose.model("todos", todosSchema);

module.exports = Todos;
