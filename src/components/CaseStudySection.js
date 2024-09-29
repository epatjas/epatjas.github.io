import React from 'react';
import './CaseStudySection.css';

function CaseStudySolution({ title, description1, description2, image }) {
  return (
    <section className="solution-section">
      <div className="solution-content">
        <div className="solution-title">
          <h2>{title}</h2>
        </div>
        <div className="solution-text">
          <p>{description1}</p>
          <p>{description2}</p>
        </div>
      </div>
      <div className="solution-image">
        <img src={image} alt="Digital Styleguide" />
      </div>
    </section>
  );
}

export default CaseStudySolution;


