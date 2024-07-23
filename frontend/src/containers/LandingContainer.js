import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/LandingContainer.css';

const LandingContainer = () => {
  return (
    <div className="vh-100 gradient-custom d-flex justify-content-center align-items-center">
      <div className="text-center text-white">
        <h1 className="display-4 fw-bold mb-5">My LMS</h1>
        <div className="row d-flex justify-content-center">
          <div className="col-6 col-md-3 mb-2">
            <Link to="/signup" className="btn btn-outline-light btn-lg w-100">Sign Up</Link>
          </div>
          <div className="col-6 col-md-3 mb-2">
            <Link to="/login" className="btn btn-outline-light btn-lg w-100">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingContainer;