import React from 'react';
import './GetStarted.css';

const GetStarted = () => {
  const handleClick = () => {
    alert('Get Started clicked! Page navigation would go here.');
  };

  return (
    <div className="get-started">
      <button className="get-started__button" onClick={handleClick}>
        <span className="get-started__text">Get Started</span>
      </button>
    </div>
  );
};

export default GetStarted;
