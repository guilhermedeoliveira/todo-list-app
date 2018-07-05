const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Todo = mongoose.model('Todo');

module.exports = app => {
  app.get('/api/todos/:id', requireLogin, async (req, res) => {
    const todo = await Todo.findOne({
      _user: req.user.id,
      _id: req.params.id
    });

    res.send(todo);
  });

  app.get('/api/todos', requireLogin, async (req, res) => {
    const todos = await Todo.find({ _user: req.user.id });

    res.send(todos);
  });

  app.post('/api/todos', requireLogin, async (req, res) => {
    const { title, content } = req.body;

    const todo = new Todo({
      title,
      content,
      _user: req.user.id
    });

    try {
      await todo.save();
      res.send(todo);
    } catch (err) {
      res.send(400, err);
    }
  });
};
