import React, { useState } from 'react';
import './JourneyMap.css';
import Step from '../Step/Step';
import GetStarted from '../GetStarted/GetStarted';

const JourneyMap = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  const steps = [
    {
      number: 1,
      title: 'Discovery Phase',
      description:
        'Explore and understand the business requirements. Conduct stakeholder interviews, analyze market trends, and identify key opportunities for innovation and growth.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    },
    {
      number: 2,
      title: 'Prototype Evaluation',
      description:
        'Design and test interactive prototypes. Gather user feedback through iterative testing, refine concepts, and validate the direction before full development.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
    },
    {
      number: 3,
      title: 'Data Ingestion',
      description:
        'Integrate data sources and pipelines. Set up robust data collection, transformation, and storage systems to support real-time analytics and insights.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop',
    },
  ];

  return (
    <div className="journey-map">
      <div className="journey-map__container">
        {/* Title Section */}
        <div className="journey-map__title">
          <h1>Your Data Intelligence Journey</h1>
          <p>Follow our proven roadmap to transform your business with data insights</p>
        </div>

        {/* Steps container */}
        <div className="journey-map__steps">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`journey-map__step-wrapper ${hoveredStep === step.number ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredStep(step.number)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <Step
                number={step.number}
                title={step.title}
                description={step.description}
                image={step.image}
              />
            </div>
          ))}
        </div>

        {/* Get Started button */}
        <div className="journey-map__cta">
          <GetStarted />
        </div>
      </div>
    </div>
  );
};

export default JourneyMap;