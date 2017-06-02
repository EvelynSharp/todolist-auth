
export const getUserTodos = (userId) => {
  return(dispatch) => {
    fetch('/api/todolists')
      .then( res => res.json() )
      .then( todolists => {
        let todolistArr = todolists.filter( todolist => todolist.userId === userId)
        let todolist = todolistArr[0];
        dispatch({ type: 'GET_TODOS', todolist })
      })
  }
}

export const createTodoList = (userId, firstTodo) => {
  return(dispatch) => {
    fetch('/api/todolists', {
      method: 'POST',
      headers: {
        'ACCEPT': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId, firstTodo})
    }).then( res => res.json() )
      .then( todolist => dispatch({ type: 'GET_TODOS', todolist}))
  }
}

export const addTodoItem = (userId, newTodo) => {
  return(dispatch) => {
    fetch(`/api/todolists`, {
      method: 'PUT',
      headers:{
        'ACCEPT': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId, newTodo })
    }).then( res => res.json() )
      .then( () => dispatch({ type: 'ADD_TODO', newTodo }))
  }
}


export const newUserList = (userId) => {
  return(dispatch) => {

  }
}
