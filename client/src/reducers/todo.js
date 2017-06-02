const todo = (state = [], action) => {
  switch(action.type) {
    case 'GET_TODOS':
      return action.todolist.userTodos
    default:
      return state;
  }
}

export default todo;
