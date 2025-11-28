import React from 'react';
import './InfoCard.css';

const InfoCard = ({ title, description, onClose }) => {
  return (
    <div className="info-card" onClick={(e) => e.stopPropagation()}>
      <div className="info-card__header">
        <h4 className="info-card__title">{title}</h4>
        <button
          className="info-card__close"
          onClick={onClose}
          aria-label="Close information"
        >
          ✕
        </button>
      </div>
      <p className="info-card__description">{description}</p>
    </div>
  );
};

export default InfoCard;
