import React, { useState } from 'react';
import './Step.css';
import InfoCard from '../InfoCard/InfoCard';

const Step = ({ number, title, description, image, isGetStarted = false }) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const handleClickOutside = () => {
    setShowInfo(false);
  };

  if (isGetStarted) {
    return (
      <div className="step step--get-started">
        <div className="step__circle step__circle--cta">
          <span className="step__text">{title}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="step" onClick={handleClickOutside}>
      <div className="step__header">
        <div className="step__circle">
          <span className="step__number">{number}</span>
        </div>
        <h3 className="step__title">{title}</h3>
        <button
          className="step__info-icon"
          onClick={(e) => {
            e.stopPropagation();
            toggleInfo();
          }}
          aria-label="Toggle information"
          title="Click for more information"
        >
          ⓘ
        </button>
      </div>
      {showInfo && (
        <InfoCard
          title={title}
          description={description}
          image={image}
          onClose={() => setShowInfo(false)}
        />
      )}
    </div>
  );
};

export default Step;
