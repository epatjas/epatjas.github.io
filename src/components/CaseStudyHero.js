import React, { useEffect, useRef } from 'react';
import './CaseStudyHero.css';

export function CaseStudyHero({ title, subtitle, services, client, year }) {
  const titleRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const resizeTitle = () => {
      const titleElement = titleRef.current;
      const containerElement = containerRef.current;
      if (!titleElement || !containerElement) return;

      const containerWidth = containerElement.offsetWidth;
      const containerHeight = containerElement.offsetHeight;
      let fontSize = 320; // Starting with a larger size
      titleElement.style.fontSize = `${fontSize}px`;

      while ((titleElement.scrollWidth > containerWidth || titleElement.scrollHeight > containerHeight) && fontSize > 20) {
        fontSize -= 2;
        titleElement.style.fontSize = `${fontSize}px`;
      }

      // Ensure the title doesn't become too small
      if (fontSize <= 20) {
        titleElement.style.fontSize = '20px';
        titleElement.style.whiteSpace = 'normal';
      } else {
        titleElement.style.whiteSpace = 'nowrap';
      }
    };

    resizeTitle();
    window.addEventListener('resize', resizeTitle);

    return () => window.removeEventListener('resize', resizeTitle);
  }, [title]);

  return (
    <div className="case-study-hero">
      <div className="case-study-hero-content">
        <div className="case-study-title-container" ref={containerRef}>
          <h1 className="case-study-title" ref={titleRef}>{title}</h1>
        </div>
        <div className="case-study-intro">
          <p className="case-study-subtitle">{subtitle}</p>
          <div className="case-study-details">
            <div className="case-study-detail services">
              <h3>SERVICES</h3>
              <p>
                {services.map((service, index) => (
                  <span key={index} className="pill">{service}</span>
                ))}
              </p>
            </div>
            <div className="case-study-detail client">
              <h3>CLIENT</h3>
              <p>{client}</p>
            </div>
            <div className="case-study-detail year">
              <h3>YEAR</h3>
              <p>{year}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
