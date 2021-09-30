const usersReducer = (state={user: {name: "", email: "", courses: []}, loading: false}, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      console.log("requesting to login user")
      return {
        ...state,
        loading: true
      }

    // case "LOGGING_IN_USER":
    //   console.log("attempting to log in user")
    //   return {
    //     ...state,
    //     user: {
    //       name: action.name,
    //       email: action.email,
    //       courses: action.courses
    //     }
    //   }
    
    default:
      return state
  }
}