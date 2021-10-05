import React from "react";

const StudentsTable = ({students}) => {
  return (
    <table id="students-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {students.map( student => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default StudentsTable