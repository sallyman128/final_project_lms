// export const fetchTeachers = () => {
//   return (dispatch) => {
//     dispatch({type: "LOADING_TEACHERS"})
//     fetch("http://localhost:9999/teachers")
//       .then( resp => resp.json() )
//       .then( teachers => dispatch({type: "GET_TEACHERS", teachers: teachers}))
//   }
// }