import React from "react";
import ErrorsList from "./ErrorsList";
import 'bootstrap/dist/css/bootstrap.min.css';

const SignupForm = ({ handleSubmit, handleChange, errors }) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <ErrorsList errors={errors} />
      <div className="form-outline form-white mb-4">
        <input 
          type="text" 
          id="name" 
          className="form-control form-control-lg" 
          onChange={(e) => handleChange(e)} 
        />
        <label className="form-label" htmlFor="name">Name</label>
      </div>
      <div className="form-outline form-white mb-4">
        <input 
          type="email" 
          id="email" 
          className="form-control form-control-lg" 
          onChange={(e) => handleChange(e)} 
        />
        <label className="form-label" htmlFor="email">Email</label>
      </div>
      <div className="form-outline form-white mb-4">
        <input 
          type="password" 
          id="password" 
          className="form-control form-control-lg" 
          onChange={(e) => handleChange(e)} 
        />
        <label className="form-label" htmlFor="password">Password</label>
      </div>
      <button className="btn btn-outline-light btn-lg px-5" type="submit">Sign Up</button>
    </form>
  );
}

export default SignupForm;