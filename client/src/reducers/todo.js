const todo = (state = [], action) => {
  switch(action.type) {
    case 'GET_TODOS':
      if(action.todolist)
        return action.todolist.userTodos
      return []
    case 'ADD_TODO':
      return [ ...state, action.newTodo ]
    default:
      return state;
  }
}

export default todo;
