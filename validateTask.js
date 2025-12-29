//inorder to validate the required fielsds of the incoming requests
function requireFullTask(req, res, next) {
    const body = req.body;
    if (!body || typeof body !== "object") {
      return res.sendStatus(400);
    }
  
    const { title, description, completed } = body;

    if (typeof title !== "string") return res.sendStatus(400);
    if (typeof description !== "string") return res.sendStatus(400);
    if (typeof completed !== "boolean") return res.sendStatus(400);
  
    next();
  }
  
  module.exports = { requireFullTask };