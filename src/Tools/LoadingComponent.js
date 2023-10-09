import React from 'react';
import './YourCSSFile.css';  // Import your CSS file

const LoadingComponent = () => {
  return (
    <div className="loading">
      <p>Please wait ...</p>
      <span>
        <i></i>
        <i></i>
      </span>
    </div>
  );
};

export default LoadingComponent;
