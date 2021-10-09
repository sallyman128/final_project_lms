import React from "react";
import ErrorsList from "./ErrorsList";

const LoginForm = ({handleSubmit, handleChange, errors}) => {
  return (
    <div id='login-form'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <ErrorsList errors={errors}/>
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

export default LoginForm