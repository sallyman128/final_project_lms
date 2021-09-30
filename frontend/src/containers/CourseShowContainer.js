import React from "react";
import CourseShow from "../components/CourseShow";
import {useParams} from 'react-router-dom'

const CourseShowContainer = () => {
  const params = useParams()

  return (
    <div>
      <CourseShow />
    </div>
  )
}

export default CourseShowContainer