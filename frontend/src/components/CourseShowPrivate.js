import React from "react";
import StudentsTable from "./StudentsTable";

const CourseShowPrivate = ({course, handleDelete, enrolledStudents, handleShowAssignmentFields, isUserAssignedToCourse, newAssignmentErrors}) => {
  return (
    <div>
      <h1>Title: {course.title}</h1>

      <h2>Description: {course.description}</h2>

      <h3>Students</h3>
      <StudentsTable students={enrolledStudents}/>

      <h3>Assignments</h3>

      <ul id='new-assignment-errors'>
          {newAssignmentErrors.map(error => <li>{error}</li>)}
      </ul>
      <div id="add-assignment">
        {isUserAssignedToCourse ? <button id= "showAssignmentFieldsButton" onClick={() => handleShowAssignmentFields()}>Add Assignment</button> : null }
      </div>
      <ol>
        {course.assignments.map( assignment => {
          return (
            <div key={assignment.id}>
              <li>{assignment.title}</li>
              <i>{assignment.description}</i>
            </div>
          )
        })}
      </ol>

      <button onClick={() => handleDelete(course)}>Delete</button>
    </div>
  )
}

export default CourseShowPrivate;