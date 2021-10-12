const initState = {
  students: [],
  loading: false
}

const studentsReducer = (state=initState, action) => {
  switch(action.type) {
    case "LOADING_STUDENTS_REQUEST":
      console.log("loading students request")
      return {
        ...state,
        loading: true
      }

    case "ADD_STUDENTS":
      console.log("adding students")
      return {
        ...state,
        students: action.studentsPayload.students,
        loading: false
      }

    case "STUDENT_ADD_COURSE":
      console.log('adding courseId to student')
      let newStudentsState = [...state.students]
      let studentIndex = newStudentsState.findIndex(student => student.id === action.payload.studentId)
      newStudentsState[studentIndex].course_ids.push(action.payload.courseId)
      return {
        ...state,
        students: newStudentsState,
        loading: false
      }

    case "REMOVE_STUDENTS":
      return {
        ...state,
        ...initState
      }
    
    case "STUDENT_REMOVE_COURSE":
      let updatedStudentsState = [...state.students]
      let thisStudentIndex = updatedStudentsState.findIndex(student => student.id === parseInt(action.payload.studentId))
      let thisCourseIndex = updatedStudentsState[thisStudentIndex].course_ids.findIndex(courseId => courseId === action.payload.courseId)
      updatedStudentsState[thisStudentIndex].course_ids.splice(thisCourseIndex,1)
      return {
        ...state,
        students: updatedStudentsState,
        loading: false
      }

    default:
      return state
  }
}

export default studentsReducer