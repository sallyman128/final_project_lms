import React from "react";
import './CourseCard.css'

const CourseCard = (props) => {
  console.log(props);
  return (
    <div id={props.courseInfo.id} className="course-card">
      <p>course card #{props.courseInfo.id}</p>
      <p>Course ID: {props.courseInfo.courseId}</p>
      <p>Title: {props.courseInfo.title}</p>
    </div>
  )
}

export default CourseCard;