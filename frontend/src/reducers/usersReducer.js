const initState = {
  user: {
    name: "",
    email: "",
    courses: []
  },
  loggedIn: false,
  loading: false
}

const usersReducer = (state=initState, action) => {
  switch (action.type) {
    case "LOADING_REQUEST":
      console.log("loading user request")
      return {
        ...state,
        loading: true
      }

    case "ADD_USER":
      console.log("adding user")
      return {
        ...state,
        user: {
          name: action.payload.user.name,
          email: action.payload.user.email,
          courses: action.payload.courses
        },
        loggedIn: true,
        loading: false
      }

    case "REMOVE_USER":
      console.log("removing user")
      return {
        ...state,
        ...initState
      }

    default:
      return state
  }
}

export default usersReducer