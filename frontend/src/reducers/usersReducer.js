const initState = {
  currentUser: {
    id: "",
    name: "",
    email: "",
    courseIds: []
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
        currentUser: {
          id: action.userPayload.user.id,
          name: action.userPayload.user.name,
          email: action.userPayload.user.email,
          courseIds: action.userPayload.user.courseIds
        },
        loggedIn: true,
        loading: false
      }

    case "USER_ADD_COURSE":
      console.log("adding course to currentUser course list")
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          courseIds: [...state.currentUser.courseIds, action.coursePayload.course.id]
        },
        loading: false
      }

    case "REMOVE_USER_COURSE":
      console.log("removing course from currentUser course list")
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          courseIds: [...state.currentUser.courseIds.filter( courseId => courseId !== action.payload.course.id )]
        },
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