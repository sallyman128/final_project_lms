import React from "react";

const ErrorsList = ({errors}) => {
  return (
    <ul>
      {errors.map( error => <li key={error} className='error-messages'>{error}</li>)}
    </ul>
  )
}

export default ErrorsList