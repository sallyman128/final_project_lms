import React from "react";

const CourseShow = ({course, handleDelete}) => {
  return (
    <div>
      <h1>Title: {course.title}</h1>

      <h2>Description: {course.description}</h2>

      {/* Show a selection list of students to add to a course */}
      <h3>Students <select /></h3>
      <ol>
        {course.students.map( student => <li key={student.id}>{student.name}</li>)}
      </ol>

      <h3>Assignments <button>Add</button></h3>
      <ol>
        {course.assignments.map( assignment => {
          return (
            <div>
              <li key={assignment.id}>{assignment.title}</li>
              <i key={assignment.id}>{assignment.description}</i>
            </div>
          )
        })}
      </ol>

      <button onClick={() => handleDelete(course)}>Delete</button>
    </div>
  )
}

export default CourseShow;