import React from "react";
import {Link} from 'react-router-dom'
import './CourseCard.css'

const CourseCard = (props) => {
  return (
    <Link to={`/catalog/${props.courseInfo.id}`} className="courseCard">
      <p>{props.courseInfo.title}</p>
    </Link>
  )
}

export default CourseCard;