const Task = require("../models/taskModel");
function toId(param) {
  const n = Number(param);
  return Number.isInteger(n) ? n : null;
}
function list(_req, res) {
  const tasks = Task.getAll();
  res.status(200).json(tasks);
}
function getOne(req, res) {
  const id = toId(req.params.id);
  if (id === null) return res.sendStatus(404);

  const task = Task.getById(id);
  if (!task) return res.sendStatus(404);

  res.status(200).json(task);
}

function create(req, res) {
  const created = Task.create(req.body);
  res.status(201).json(created);
}
function update(req, res) {
  const id = toId(req.params.id);
  if (id === null) return res.sendStatus(404);

  const updated = Task.update(id, req.body);
  if (!updated) return res.sendStatus(404);

  res.status(200).json(updated);
}

function remove(req, res) {
  const id = toId(req.params.id);
  if (id === null) return res.sendStatus(404);

  const ok = Task.remove(id);
  if (!ok) return res.sendStatus(404);

  res.status(200).json({ message: "Task deleted" });
}

module.exports = {
  list,
  getOne,
  create,
  update,
  remove,
};
