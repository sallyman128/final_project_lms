const teachersReducer = (state={
  teachers: [],
  loading: false
  }, action) => {
  switch(action.type) {
    case "LOADING_TEACHERS":
      return {
        ...state,
        teachers: [...state.teachers],
        loading: true
      }
    
    case "GET_TEACHERS":
      return {
        ...state,
        teachers: action.teachers,
        loading: false
      }

    default:
      return state
  }
}

export default teachersReducer