import React from "react";
import ErrorsList from "./ErrorsList";

const SignupForm = ({handleSubmit, handleChange, errors}) => {
  return (
    <div id='signup-form'>
      <ErrorsList errors={errors} />

      <form onSubmit={(e) => handleSubmit(e)}>
        <p>
          Name:
          <input type="string" id="name" onChange={(e) => handleChange(e)} />
        </p>
        <p>
          Email: 
          <input type="string" id="email" onChange={(e) => handleChange(e)} />
        </p>
        <p>
          Password:
          <input type="password" id="password" onChange={(e) => handleChange(e)} />
        </p>
        <button type="submit" value="Login">Submit</button>
      </form>
    </div>
  )
}

export default SignupForm