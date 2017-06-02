const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoList = new Schema({
  userId: { type: String, unique: true, required: true},
  userTodos: { type: Array }
});

module.exports = mongoose.model( 'TodoList', TodoList);
