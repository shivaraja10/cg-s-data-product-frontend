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
        {/* Title Section */}
        <div className="journey-map__title">
          <h1>Your Data Intelligence Journey</h1>
          <p>Follow our proven roadmap to transform your business with data insights</p>
        </div>

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
