const express = require('express');
const router = express.Router();
const TodoList = require('../models/todolist');

router.get('/', (req, res) => {
  TodoList.find( (err, todolists) => {
      res.json(todolists);
  });
});


router.post('/', (req,res) => {
  let { userId, firstTodo } = req.body;
  new TodoList ({
    userId,
    userTodos: [firstTodo]
  }).save( (err, todolist) => {
    if (err)
      return res.json(err);
    return res.json(todolist);
  });
});

router.put('/', (req, res) => {
  let { userId, newTodo } = req.body;
  TodoList.findOneAndUpdate(
    { userId: userId },
    { $push: { userTodos: newTodo }},
    { new: true },
    (err, todolist) => {
      if(err)
        return res.json(err)
      return res.json(todolist)
    }
  )
});


module.exports = router;
