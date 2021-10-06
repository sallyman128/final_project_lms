const initState = {
  courses: [],
  loading: false
}

const coursesReducer = (state=initState, action) => {

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

    case "ADD_COURSE":
      console.log("adding new course")
      return {
        ...state,
        courses: [...state.courses, action.payload.course],
        loading: false
      }

    case "DELETE_COURSE":
      console.log("deleting course")
      return {
        ...state,
        courses: [...state.courses.filter( (course) => course.id !== action.payload.course.id )],
        loading: false
      }
    
    default:
      return state
  }
}

export default coursesReducer