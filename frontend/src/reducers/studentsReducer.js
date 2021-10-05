const initState = {
  students: [],
  loading: false
}

const studentsReducer = (state=initState, action) => {
  switch(action.type) {
    // case "LOADING_STUDENTS":
    //   console.log("loading students")
    //   return {
    //     ...state,
    //     loading: true
    //   }

    case "ADD_STUDENTS":
      console.log("adding students")
      return {
        ...state,
        students: action.studentsPayload.students,
        loading: false
      }
    default:
      return state
  }
}

export default studentsReducer