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

    case "UPDATE_COURSE":
      console.log("updating course")
      const updatedCoursesState = [...state.courses]
      const updatedCourseIndex = updatedCoursesState.findIndex( course => course.id === action.payload.course.id)
      updatedCoursesState[updatedCourseIndex] = action.payload.course

      return {
        ...state,
        courses: updatedCoursesState,
        loading: false
      }

    case "COURSE_ADD_STUDENT":
      console.log('adding student to course')
      let newCoursesState = [...state.courses]
      const courseIndex = newCoursesState.findIndex(course => course.id === action.payload.courseId)
      newCoursesState[courseIndex].student_ids.push(action.payload.studentId)
      return {
        ...state,
        courses: newCoursesState,
        loading: false
      }

    case "COURSE_REMOVE_STUDENT":
      console.log('removing student from course')
      const updatedCourseState= [...state.courses]
      courseIndex = updatedCourseState.findIndex(course => course.id === action.payload.courseId)
      const studentIndex = newCoursesState[courseIndex].student_ids(student_id => student_id === action.payload.studentId )
      updatedCourseState[courseIndex].student_ids[studentIndex].splice(studentIndex, 1)
      return {
        ...state,
        courses: updatedCourseState,
        loading: false
      }


    default:
      return state
  }
}

export default coursesReducer