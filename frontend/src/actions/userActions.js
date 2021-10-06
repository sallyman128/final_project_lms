const baseAPI = 'http://localhost:9999/api/v1'

const signup = (userInfo) => {
  return (dispatch) => {
    dispatch({type: "LOADING_REQUEST"})
    const configOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: userInfo
      }),
    }

    fetch(`${baseAPI}/users`, configOptions)
      .then( resp => resp.json())
      .then(data => {
        if(data.error) {
          console.log(data.error)
          console.log('user email already has an account')
        } else {
          const userPayload = {user: data.user, courses: data.user_courses}
          const studentsPayload = {students: data.students}
          localStorage.setItem("jwt", data.jwt);
          dispatch({type: "ADD_USER", userPayload})
          dispatch({type: "ADD_STUDENTS", studentsPayload})
        }
      })
  }
}

const login = (userInfo) => {
  return dispatch => {
    dispatch({type: "LOADING_REQUEST"})

    const configOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: userInfo
      }),
    }

    fetch(`${baseAPI}/login`, configOptions)
      .then(resp => resp.json())
      .then( data => {
        if (data.error) {
          console.log(data.error)
        } else {
          const userPayload = {user: {email: data.user.email, name: data.user.name, course_ids: data.user_course_ids} }
          const studentsPayload = {students: data.students}
          localStorage.setItem('jwt', data.jwt)
          dispatch({type: "ADD_USER", userPayload})
          dispatch({type: "ADD_STUDENTS", studentsPayload})
        }
      })
  }
}

const logout = () => {
  return dispatch => {
    localStorage.removeItem('jwt')
    dispatch({type: "REMOVE_USER"})
  }
}

export const userActions = {
  signup,
  login,
  logout
}