const usersReducer = (state={user: {name: "", email: "", courses: []}, loading: false}, action) => {
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

    default:
      return state
  }
}

export default usersReducer