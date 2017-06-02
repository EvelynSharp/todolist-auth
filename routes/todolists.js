const express = require('express');
const router = express.Router();
const TodoList = require('../models/todolist');

router.get('/', (req, res) => {
  TodoList.find( (err, todolists) => {
      res.json(todolists);
  });
});

module.exports = router;
