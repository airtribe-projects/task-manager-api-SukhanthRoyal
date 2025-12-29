const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const tasksRouter = require("./routes/tasks");
app.use("/tasks", tasksRouter);

module.exports = app;