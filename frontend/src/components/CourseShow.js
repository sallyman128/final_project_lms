import React from "react";

const CourseShow = ({course, handleDelete}) => {
  return (
    <div>
      <h1>Title: {course.title}</h1>

      <h2>Description: {course.description}</h2>

      <h3>Students</h3>
      <ol>
        {course.students.map( student => <li key={student.id}>{student.name}</li>)}
      </ol>

      <h3>Assignments</h3>
      <ol>
        {course.assignments.map( assignment => <li key={assignment.id}>{assignment.title}</li>)}
      </ol>

      <button onClick={() => handleDelete(course)}>Delete</button>
    </div>
  )
}

export default CourseShow;