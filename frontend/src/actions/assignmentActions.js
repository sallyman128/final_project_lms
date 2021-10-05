const baseAPI = "http://localhost:9999/api/v1"

const postNewAssignment = (assignmentInfo) => {
  return dispatch => {
    console.log('before config options')
    const configOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        assignment: assignmentInfo
      })
    }
    console.log('after config options')
    fetch(`${baseAPI}/assignments`, configOptions)
      .then(resp => resp.json)
      .then(data => {
        return console.log(data)
      })
    console.log('after fetch')
  }
}


export const assignmentActions = {
  postNewAssignment
}
