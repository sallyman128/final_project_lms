const usersReducer = (state={user: {name: "", email: "", courses: []}}, action) => {
  switch (action.type) {
    case "ADD_USER":
      console.log("adding user")
      return {
        ...state,
        user: {
          name: action.name,
          email: action.email,
          courses: action.courses
        }
      }

    default:
      return state
  }
}

export default usersReducer