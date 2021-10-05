import React from "react";
import StudentsTable from "./StudentsTable";

const CourseShowPrivate = ({course, handleDelete, enrolledStudents, handleShowAssignmentFields, isUserAssignedToCourse}) => {
  return (
    <div>
      <h1>Title: {course.title}</h1>

      <h2>Description: {course.description}</h2>

      <h3>Students</h3>
      {/* <select name='students-list'>
        <option value='default'>Select to add a student</option>
        {notEnrolledStudents.map( student => <option key={student.id} value={student.id}>{student.name}</option>)}
      </select>
      <button>Add</button> */}
      <StudentsTable students={enrolledStudents}/>

      <h3>Assignments</h3>
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