import React from "react";
import {Link} from 'react-router-dom'
import './CourseCard.css'

const CourseCard = ({courseInfo}) => {
  return (
    <Link to={`/courses/${courseInfo.id}`} className="courseCard">
      <p>{courseInfo.title}</p>
    </Link>
  )
}

export default CourseCard;