import React from 'react';
import './InfoCard.css';

const InfoCard = ({ title, description, image }) => {
  return (
    <div className="info-card" onClick={(e) => e.stopPropagation()}>
      {image && (
        <div className="info-card__image-wrapper">
          <img 
            src={image} 
            alt={title}
            className="info-card__image"
          />
          <div className="info-card__overlay"></div>
        </div>
      )}
      <div className="info-card__content">
        <h4 className="info-card__title">{title}</h4>
        <p className="info-card__description">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
