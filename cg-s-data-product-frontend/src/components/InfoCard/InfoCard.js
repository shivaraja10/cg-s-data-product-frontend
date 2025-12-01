import React from 'react';
import './InfoCard.css';

const InfoCard = ({ title, description, image, onClose }) => {
  return (
    <div className="info-card" onClick={(e) => e.stopPropagation()}>
      {image && (
        <div className="info-card__image-wrapper">
          <img 
            src={image} 
            alt={title}
            className="info-card__image"
          />
        </div>
      )}
      <div className="info-card__content">
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
    </div>
  );
};

export default InfoCard;
