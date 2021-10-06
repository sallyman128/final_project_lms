const initState = {
  user: {
    id: "",
    name: "",
    email: "",
    course_ids: []
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
          id: action.userPayload.user.id,
          name: action.userPayload.user.name,
          email: action.userPayload.user.email,
          course_ids: action.userPayload.user.course_ids
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