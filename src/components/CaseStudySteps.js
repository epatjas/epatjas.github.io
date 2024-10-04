import React from 'react';
import './CaseStudySteps.css';

export const CaseStudySteps = ({ title, challenges }) => {
  return (
    <div className="case-study-steps">
      <h2>{title}</h2>
      <p>The main challenges identified were:</p>
      <div className="challenges-grid">
        {challenges.map((challenge, index) => (
          <div key={index} className="challenge-card">
            <h3>{String(index + 1).padStart(2, '0')}</h3>
            <p>{challenge}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
