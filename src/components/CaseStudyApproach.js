import React from 'react';
import './CaseStudyApproach.css';

export function CaseStudyApproach({ title, image, imageAlt, steps }) {
  return (
    <section className="case-study-approach">
      <div className="approach-content">
        <div className="approach-header">
          <h3>APPROACH</h3>
          <h2>{title}</h2>
        </div>
        <div className="approach-image">
          <img src={image} alt={imageAlt} />
        </div>
        <div className="approach-steps">
          {steps.map((step, index) => (
            <div key={index} className="approach-step">
              <div className="step-number">{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
