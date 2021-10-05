const baseAPI = "http://localhost:9999/api/v1"

const postNewAssignment = (assignmentInfo) => {
  return dispatch => {
    dispatch({type: "LOADING_ASSIGNMENT_REQUEST"})
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
    fetch(`${baseAPI}/assignments`, configOptions)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        const payload = data.assignment
        dispatch({type: "ADD_ASSIGNMENT", payload})
      })
  }
}


export const assignmentActions = {
  postNewAssignment
}
