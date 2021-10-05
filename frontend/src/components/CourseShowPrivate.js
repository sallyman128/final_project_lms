import React from "react";
import StudentsTable from "./StudentsTable";

const CourseShowPrivate = ({course, handleDelete, notEnrolledStudents, enrolledStudents}) => {
  return (
    <div>
      <h1>Title: {course.title}</h1>

      <h2>Description: {course.description}</h2>

      <h3>Students</h3>
      <select name='students-list'>
        <option value='default'>Select to add a student</option>
        {notEnrolledStudents.map( student => <option key={student.id} value={student.id}>{student.name}</option>)}
      </select>
      <button>Add</button>
      <StudentsTable students={enrolledStudents}/>

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

export default CourseShowPrivate;