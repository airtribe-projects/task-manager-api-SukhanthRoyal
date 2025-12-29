// routes/tasks.js
const express = require("express");
const router = express.Router();

const ctrl = require("../controllers/tasksController");
const { requireFullTask } = require("../middleware/validateTask");

router.get("/", ctrl.list);
router.get("/:id", ctrl.getOne);
router.post("/", requireFullTask, ctrl.create);
router.put("/:id", requireFullTask, ctrl.update);

router.delete("/:id", ctrl.remove);

module.exports = router;