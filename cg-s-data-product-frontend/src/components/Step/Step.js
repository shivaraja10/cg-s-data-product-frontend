import React, { useState } from 'react';
import './Step.css';
import InfoCard from '../InfoCard/InfoCard';

const Step = ({ number, title, description, image, isGetStarted = false }) => {
  const [showInfo, setShowInfo] = useState(false);

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
    <div className="step">
      <div className="step__header">
        <div className="step__circle">
          <span className="step__number">{number}</span>
        </div>
        <h3 className="step__title">{title}</h3>
        <button
          className="step__info-icon"
          onMouseEnter={() => setShowInfo(true)}
          onMouseLeave={() => setShowInfo(false)}
          aria-label="Information"
          title="Hover for details"
        >
          ⓘ
        </button>
      </div>
      {showInfo && (
        <InfoCard
          title={title}
          description={description}
          image={image}
        />
      )}
    </div>
  );
};

export default Step;
