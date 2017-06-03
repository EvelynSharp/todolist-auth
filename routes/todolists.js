const express = require('express');
const router = express.Router();
const TodoList = require('../models/todolist');

router.get('/', (req, res) => {
  TodoList.find( (err, todolists) => {
      res.json(todolists);
  });
});


router.post('/', (req,res) => {
  let { userId } = req.body;
  new TodoList ({
    userId,
    userTodos: []
  }).save( (err, todolist) => {
    if (err)
      return res.json(err);
    return res.json(todolist);
  });
});

router.put('/', (req, res) => {
  let { userId, type } = req.body;
  if(type === 'ADD') {
    TodoList.findOneAndUpdate(
      { userId: userId },
      { $push: { userTodos: req.body.todoItem }},
      { new: true },
      (err, todolist) => {
        if(err)
          return res.json(err)
        return res.json(todolist)
      }
    )
  } else if (type === 'DELETE') {
    TodoList.findOneAndUpdate(
      { userId: userId },
      { $set: { userTodos: req.body.filteredList }},
      { new: true },
      (err, todolist) => {
        if(err)
          return res.json(err)
        return res.json(todolist)
      }
    )
  }
});


module.exports = router;
