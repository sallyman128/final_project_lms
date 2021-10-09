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
      const newStudentsState = [...state.students]
      const studentIndex = newStudentsState.findIndex(student => student.id === action.payload.studentId)
      newStudentsState[studentIndex].course_ids.push(action.payload.courseId)
      return {
        ...state,
        students: newStudentsState,
        loading: false
      }

    default:
      return state
  }
}

export default studentsReducer