const coursesReducer = (state={
  courses: [],
  loading: false
  }, action) => {
  switch(action.type) {
    case "LOADING_COURSES":
      console.log("loading courses")
      return {
        ...state,
        courses: [...state.courses],
        loading: true
      }
    
    case "ADD_COURSES":
      console.log("adding courses")
      return {
        ...state,
        courses: action.courses,
        loading: false
      }
    
    default:
      return state
  }
}

export default coursesReducer