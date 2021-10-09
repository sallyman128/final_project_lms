const initState = {
  courses: [],
  loading: false
}

const coursesReducer = (state=initState, action) => {

  switch(action.type) {
    case "LOADING_COURSES_REQUEST":
      console.log("loading courses request")
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
        courses: [...state.courses, action.coursePayload.course],
        loading: false
      }

    case "DELETE_COURSE":
      console.log("deleting course")

      return {
        ...state,
        courses: [...state.courses.filter( (course) => course.id !== action.payload.course.id )],
        loading: false
      }

    case "COURSE_ADD_STUDENT":
      console.log('adding student to course')
      const newCoursesState = [...state.courses]
      const courseIndex = newCoursesState.findIndex(course => course.id === action.payload.courseId)
      newCoursesState[courseIndex].student_ids.push(action.payload.studentId)

      return {
        ...state,
        courses: newCoursesState,
        loading: false
      }

    default:
      return state
  }
}

export default coursesReducer