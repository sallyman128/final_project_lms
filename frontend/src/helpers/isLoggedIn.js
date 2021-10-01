// const authHeader = () => {
//   let user = JSON.parse(localStorage.getItem("user"))
//   if (user && user.token) {
//     return { 'Authorization': 'Bearer ' + user.token }
//   } else {
//     return {}
//   }
// }

const isLoggedIn = () => {
  const token = localStorage.getItem("jwt")
  return !!token ? true : false
}

export default isLoggedIn