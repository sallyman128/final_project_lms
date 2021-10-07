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
    dispatch({type: "LOADING_COURSES"})
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
        const coursePayload = {course: data.course}
        dispatch({type:"ADD_COURSE", coursePayload})
        dispatch({type: "USER_ADD_COURSE", coursePayload})
      })
  }
}

const deleteCourse = (courseInfo) => {
  return (dispatch) => {
    // dispatch({type: "LOADING_COURSES"})
    const configOptions = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        course: courseInfo
      })
    }

    fetch(`${baseAPI}/courses/${courseInfo.id}`, configOptions)
      .then( resp => resp.json())
      .then( data => {
        if(data.error) {
          console.log('couldnt delete course (in fetch)')
          console.log(data)
        } else {
          const payload = {course: courseInfo}
          dispatch({type: "DELETE_COURSE", payload})
          dispatch({type: "REMOVE_USER_COURSE", payload})
        } 
      })
  }
}

export const courseActions = {
  fetchCourses,
  addCourse,
  deleteCourse
}