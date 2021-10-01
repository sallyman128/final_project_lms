const usersReducer = (state={user: {name: "", email: "", courses: []}}, action) => {
  switch (action.type) {
    case "ADD_USER":
      console.log("adding user")
      return {
        ...state,
        user: {
          name: action.payload.user.name,
          email: action.payload.user.email,
          courses: action.payload.courses
        }
      }

    default:
      return state
  }
}

export default usersReducer