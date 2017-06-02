const todo = (state = [], action) => {
  switch(action.type) {
    case 'GET_TODOS':
      if(action.todolist)
        return action.todolist.userTodos
      return []
    case 'ADD_TODO':
      return [ ...state, action.todoItem ]
    case 'DELETE_TODO':
      return state.filter( todo => todo !== action.itemToDelete )
    default:
      return state;
  }
}

export default todo;
