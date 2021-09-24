// export const fetchCourses = () => {
//   return (dispatch) => {
//     dispatch({type: "LOADING_COURSES"})
//     fetch("http://localhost:9999/courses")
//       .then( resp => resp.json() )
//       .then( courses => dispatch({type: "GET_COURSES", courses: courses}))
//   }
// }