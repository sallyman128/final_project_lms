const coursesReducer = (state={
  courses: [],
  loading: false
  }, action) => {
  switch(action.type) {
    case "LOADING_COURSES":
      return {
        ...state,
        courses: [...state.courses],
        loading: true
      }
    
    case "GET_COURSES":
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