import React from "react";

const Login = () => {
  return (
    <div>
      <h1>Login </h1>
      <form>
        <label>
          Email: 
          <input type="string" />
        </label>
        <label>
          Password: 
          <input type="password" />
        </label>
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login