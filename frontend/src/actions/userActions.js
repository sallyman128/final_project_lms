const baseAPI = 'http://localhost:9999/api/v1'

const login = ({email, password}) => {
  return dispatch => {
    dispatch({type: "LOGIN_REQUEST"})

    const configOptions = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          email,
          password
        }
      })
    }
    
    fetch(`${baseAPI}/login`, configOptions)
      .then(resp => resp.json())
      .then(console.log)
      // .then(login in user with a dispatch)
  }
}

export const userActions = {
  login
}