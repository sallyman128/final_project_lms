import React from "react";

const CourseShowPublic = ({course}) => {
  return (
    <div>
      <h1>Title: {course.title}</h1>
      <h2>Description: {course.description}</h2>
    </div>
  )
}

export default CourseShowPublic;