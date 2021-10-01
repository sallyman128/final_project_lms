const initState = {
  user: {
    name: "",
    email: "",
    courses: []
  },
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
        loading: false
      }

    case "REMOVE_USER":
      console.log("removing user")
      return {
        ...state,
        user: initState.user,
        loading: initState.loading
      }

    default:
      return state
  }
}

export default usersReducer