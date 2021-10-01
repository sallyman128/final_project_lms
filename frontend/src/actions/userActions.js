const baseAPI = 'http://localhost:9999/api/v1'

const signup = (userInfo) => {
  return (dispatch) => {
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
        console.log(data)
        if(data.error) {
          // dont login user
          console.log(data.error)
        } else {
          const payload = {user: data.user, courses: data.user_courses}
          localStorage.setItem("jwt", data.jwt);
          dispatch({type: "ADD_USER", payload})
        }
      })
  }
}

export const userActions = {
  signup,

}