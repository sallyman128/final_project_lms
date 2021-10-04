const baseAPI = "http://localhost:9999/api/v1"

const fetchCourses = () => {
  return (dispatch) => {
    dispatch({type: "LOADING_COURSES"})
    fetch(`${baseAPI}/courses`)
      .then( resp => resp.json() )
      .then( data => dispatch({type: "ADD_COURSES", courses: data.courses}))
  }
}

const addCourse = (courseInfo) => {
  return (dispatch) => {
    const configOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        course: courseInfo
      }),
    }

    fetch(`${baseAPI}/courses`, configOptions)
      .then(resp => resp.json())
      .then(data => {
        const payload= {course: data.course}
        dispatch({type:"ADD_COURSE", payload})
      })
  }
}

const deleteCourse = (courseInfo) => {
  return (dispatch) => {
    const configOptions = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        course: courseInfo
      }),
    }

    fetch(`${baseAPI}/courses`, configOptions)
      .then(resp => resp.json())
      .then(() => {
        dispatch({type: "DELETE_COURSE", payload: {course: courseInfo}})
        // dispatch({type: "DELETE_USER_COURSE", payload: courseInfo})
      })
  }
}

export const courseActions = {
  fetchCourses,
  addCourse,
  deleteCourse
}