import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GetStarted.css';

const GetStarted = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/get-started-page');
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
