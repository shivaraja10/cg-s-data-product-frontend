import React from 'react';
import './JourneyMap.css';
import Step from '../Step/Step';
import GetStarted from '../GetStarted/GetStarted';

const JourneyMap = () => {
  const steps = [
    {
      number: 1,
      title: 'Discovery Phase',
      description:
        'Explore and understand the business requirements. Conduct stakeholder interviews, analyze market trends, and identify key opportunities for innovation and growth.',
    },
    {
      number: 2,
      title: 'Prototype Evaluation',
      description:
        'Design and test interactive prototypes. Gather user feedback through iterative testing, refine concepts, and validate the direction before full development.',
    },
    {
      number: 3,
      title: 'Data Ingestion',
      description:
        'Integrate data sources and pipelines. Set up robust data collection, transformation, and storage systems to support real-time analytics and insights.',
    },
  ];

  return (
    <div className="journey-map">
      <div className="journey-map__container">
        {/* Desktop diagonal path */}
        <svg className="journey-map__svg" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid meet">
          {/* Curved dashed connector path */}
          <path
            className="journey-map__path"
            d="M 150 350 Q 300 150, 450 350 T 750 350"
            fill="none"
            stroke="url(#purpleGradient)"
            strokeWidth="3"
            strokeDasharray="8,6"
          />
          <defs>
            <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9333EA" />
              <stop offset="50%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#D8B4FE" />
            </linearGradient>
          </defs>
        </svg>

        {/* Steps container */}
        <div className="journey-map__steps">
          {steps.map((step) => (
            <Step
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
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
