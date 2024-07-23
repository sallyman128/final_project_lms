import React from "react";

const ErrorsList = ({ errors }) => (
  <div>
    {errors.length > 0 && (
      <div className="alert alert-danger">
        {errors.map((error, index) => (
          <p key={index}>{error}</p>
        ))}
      </div>
    )}
  </div>
);

export default ErrorsList;