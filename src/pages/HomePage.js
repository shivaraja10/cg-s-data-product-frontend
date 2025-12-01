import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/HomePage.css';

const HomePage = () => {
  const [hoveredPhase, setHoveredPhase] = useState(null);
  const navigate = useNavigate();

  const phases = [
    {
      id: 1,
      title: 'Discovery Phase',
      subtitle: 'Understand Your Data',
      description: 'Begin your data intelligence journey by exploring your unique business needs and data landscape. We help you gain clarity on what data matters most to drive growth.',
      position: 'left',
      details: ['Data Assessment', 'Goal Alignment'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=350&fit=crop',
      color: '#A855F7'
    },
    {
      id: 2,
      title: 'Prototype Evaluation',
      subtitle: 'Build & Test Solutions',
      description: 'Transform insights into actionable prototypes. We design and evaluate data solutions that align perfectly with your business objectives and technical requirements.',
      position: 'right',
      details: ['Solution Design', 'Testing & Validation'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=350&fit=crop',
      color: '#9333EA'
    },
    {
      id: 3,
      title: 'Data Ingestion',
      subtitle: 'Deploy & Integrate',
      description: 'Seamlessly integrate data from multiple sources into your system. We ensure smooth data flow and continuous optimization for maximum business impact.',
      position: 'left',
      details: ['Integration', 'Continuous Improvement'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=350&fit=crop',
      color: '#7E22CE'
    }
  ];

  return (
    <div className="home-page">
      <div className="home-page__header">
        <h1>Data Product</h1>
        <p>Transform your business with intelligent data solutions</p>
      </div>

      <div className="home-page__timeline">
        {phases.map((phase) => (
          <div 
            key={phase.id} 
            className={`home-page__phase home-page__phase--${phase.position}`}
            onMouseEnter={() => setHoveredPhase(phase.id)}
            onMouseLeave={() => setHoveredPhase(null)}
          >
            <div className="home-page__phase-content">
              <div className="home-page__phase-number" style={{ borderColor: phase.color }}>
                {phase.id}
              </div>
              <div className="home-page__phase-text">
                <h2 style={{ color: phase.color }}>{phase.title}</h2>
                <p className="home-page__phase-subtitle">{phase.subtitle}</p>
                <p className="home-page__phase-description">{phase.description}</p>
                <div className="home-page__phase-tags">
                  {phase.details.map((detail, idx) => (
                    <span key={idx} className="home-page__tag" style={{ borderColor: phase.color, color: phase.color }}>
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {hoveredPhase === phase.id && (
              <div className="home-page__phase-image" style={{ backgroundImage: `url(${phase.image})` }}>
                <div className="home-page__phase-image-overlay"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="home-page__cta">
        <button className="home-page__cta-btn" onClick={() => navigate('/get-started')}>Start Your Data Journey</button>
      </div>
    </div>
  );
};

export default HomePage;
