const initState = {
  assignments: [],
  loading: false
}

const assignmentsReducer = (state=initState, action) => {
  switch(action.type) {
    case "LOADING_ASSIGNMENT_REQUEST":
      console.log("loading assignment request")
      return {
        ...state,
        loading: true
      }

    case "ADD_ALL_ASSIGNMENTS":
      console.log("adding all assignments")
      return {
        ...state,
        assignments: [...action.assignmentsPayload.assignments],
        loading: false
      }

    case "ADD_ASSIGNMENT":
      console.log('adding assignment')
      return {
        ...state,
        assignments: [...state.assignments, action.payload],
        loading: false
      }

    default:
      return state
  }
}

export default assignmentsReducer