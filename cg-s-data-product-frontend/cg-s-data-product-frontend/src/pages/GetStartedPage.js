import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GetStartedPage.css';

const GetStartedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="get-started-page">
      <div className="get-started-page__content">
        <button
          className="get-started-page__back-btn"
          onClick={() => navigate('/')}
        >
          ← Back to Journey
        </button>

        <div className="get-started-page__hero">
          <h1 className="get-started-page__title">Welcome!</h1>
          <p className="get-started-page__subtitle">
            You've successfully started your data intelligence journey.
          </p>
        </div>

        <div className="get-started-page__cards">
          <div className="get-started-page__card">
            <h2 className="get-started-page__card-title">🚀 Discovery Phase</h2>
            <p className="get-started-page__card-text">
              Begin by understanding your business needs. Our team will help you explore opportunities and define clear objectives for your data transformation.
            </p>
          </div>

          <div className="get-started-page__card">
            <h2 className="get-started-page__card-title">🎨 Prototype Evaluation</h2>
            <p className="get-started-page__card-text">
              We'll create interactive prototypes and gather your feedback. This ensures the solution meets your expectations before moving to production.
            </p>
          </div>

          <div className="get-started-page__card">
            <h2 className="get-started-page__card-title">📊 Data Ingestion</h2>
            <p className="get-started-page__card-text">
              Our experts will seamlessly integrate your data sources and establish robust pipelines for real-time analytics and actionable insights.
            </p>
          </div>
        </div>

        <div className="get-started-page__contact">
          <h2 className="get-started-page__contact-title">Ready to begin?</h2>
          <p className="get-started-page__contact-text">
            Schedule a consultation with our team to get started today.
          </p>
          <button className="get-started-page__contact-btn">
            Contact Our Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStartedPage;
