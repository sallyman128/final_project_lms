export const fetchCourses = () => {
  return (dispatch) => {
    dispatch({type: "LOADING_COURSES"})
    fetch("http://localhost:9999/api/v1/courses")
      .then( resp => resp.json() )
      .then( courses => dispatch({type: "GET_COURSES", courses}))
  }
}