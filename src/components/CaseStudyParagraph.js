import React from 'react';
import './CaseStudyParagraph.css';

export const CaseStudyParagraph = ({ title, content, ctaButton }) => {
  return (
    <div className="case-study-paragraph">
      <div className="title-column">
        <h2>{title}</h2>
      </div>
      <div className="content-column">
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        {ctaButton && (
          <div className="cta-button-container">
            <a 
              href={ctaButton.url} 
              target={ctaButton.target} 
              rel={ctaButton.rel} 
              className="cta-button"
            >
              {ctaButton.text}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
