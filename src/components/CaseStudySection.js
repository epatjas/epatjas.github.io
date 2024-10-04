import React from 'react';
import './CaseStudySection.css';

function CaseStudySection({ title, description1, description2, bulletPoints, image }) {
  return (
    <section className="solution-section">
      <div className="solution-content">
        <div className="solution-title">
          <h2>{title}</h2>
        </div>
        <div className="solution-text">
          <p>{description1}</p>
          {description2 && <p>{description2}</p>}
          {bulletPoints && (
            <ul>
              {bulletPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {image && (
        <div className="solution-image">
          <img src={image} alt={title} />
        </div>
      )}
    </section>
  );
}

export default CaseStudySection;


