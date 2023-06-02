const express = require("express");
const router = express.Router();
const Todos = require("../models/Todos");

//Get all todos /todos/
router.get("/", async (req, res) => {
  const todos = await Todos.find({});
  res.json(todos);
});

//Create a todo /todos/
router.post("/", async (req, res) => {
  const { label } = req.body;
  if (!label) {
    throw new Error("Cannot create todos without label");
  }
  const todo = await Todos.create({ label });
  res.send(201);
});

//Update a todo /todos/:id
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { important } = req.body;
  await Todos.updateOne({ _id: id }, { important });
  res.sendStatus(202);
});

//Delete a todo /todos/:id
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Todos.deleteOne({ _id: id });
  res.sendStatus(202);
});

module.exports = router;
