const todo = (state = [], action) => {
  switch(action.type) {
    case 'GET_TODOS':
      if(action.todolist)
        return action.todolist.userTodos
      return []
    // case 'ADD_TODOLIST':
    //   return [ action.newTodo ]
    default:
      return state;
  }
}

export default todo;
