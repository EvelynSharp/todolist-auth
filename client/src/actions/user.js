const currentUser = (user = {}) => {
  return { type: 'USER', user }
}

export const logout = () => {
  return(dispatch) => {
    fetch('/api/auth/sign_out', {
      method: 'DELETE',
      credentials: 'include',
     }).then( () => dispatch(currentUser()) )
  }
}

const createTodoList = (userId) => {
  fetch('/api/todolists', {
    method: 'POST',
    headers: {
      'ACCEPT': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userId })
  }).then( res => res.json() )
}

export const authenticate = (email, password, title, history) => {
  return (dispatch) => {
    let endpoint = title === 'Register' ? 'signup' : 'signin';
    fetch(`/api/auth/${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify({ email, password })
   }).then( res => res.json() )
     .then( user => {
       dispatch(currentUser(user));
       createTodoList(user._id);
       history.push('/todolist');
    })
  }
}



export const tryFetchUser = (cb) => {
  return (dispatch) => {
    fetch('/api/auth/user', {
      method: 'GET',
      credentials: 'include'
    }).then( res => res.json() )
      .then( user => dispatch(currentUser(user)) )
      .then( () => cb() )
  }
}
