import React from "react";
import {Link} from 'react-router-dom'
import './CourseCard.css'

const CourseCard = (props) => {
  console.log(props);
  return (
    <Link to={`/catalog/${props.courseInfo.id}`} className="card">
      <p>{props.courseInfo.courseId}</p>
      <p>{props.courseInfo.title}</p>
    </Link>
  )
}

export default CourseCard;