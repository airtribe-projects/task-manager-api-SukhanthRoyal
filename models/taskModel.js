const { tasks: seedTasks } = require("../task.json");
let tasks = seedTasks.map((t) => ({ ...t }));

let currentId = tasks.reduce((max, t) => (t.id > max ? t.id : max), 0);

function getAll() {
  return tasks;
}

function getById(id) {
  return tasks.find((t) => t.id === id) || null;
}

function create({ title, description, completed }) {
  const task = {
    id: ++currentId, 
    title,
    description,
    completed,
  };
  tasks.push(task);
  return task;
}

function update(id, { title, description, completed }) {
  const idx = tasks.findIndex((t) => t.id === id);
  if (idx === -1) return null;

  const updated = { id, title, description, completed };
  tasks[idx] = updated;
  return updated;
}

function remove(id) {
  const idx = tasks.findIndex((t) => t.id === id);
  if (idx === -1) return false;
  tasks.splice(idx, 1);
  return true;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
