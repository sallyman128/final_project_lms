import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/LandingContainer.css';

const LandingContainer = () => {
  return (
    <div className="vh-100 gradient-custom d-flex justify-content-center align-items-center">
      <div className="text-center text-white">
        <h1 className="display-4 fw-bold mb-5">My LMS</h1>
        <div className="d-flex justify-content-center">
          <div className="mx-2">
            <Link to="/signup" className="btn btn-outline-light btn-lg">Sign Up</Link>
          </div>
          <div className="mx-2">
            <Link to="/login" className="btn btn-outline-light btn-lg">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingContainer;