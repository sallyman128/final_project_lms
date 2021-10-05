import React from "react";

const StudentsTable = ({students}) => {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
      </tr>
      {students.map( student => (
        <tr key={student.id}>
          <td>{student.name}</td>
          <td>{student.email}</td>
        </tr>
      ))}
    </table>
  )
}

export default StudentsTable