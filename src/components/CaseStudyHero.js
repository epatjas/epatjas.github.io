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
      const isMobile = window.innerWidth <= 768;

      if (isMobile) {
        let fontSize = 128;
        titleElement.style.fontSize = `${fontSize}px`;
        titleElement.style.transform = 'none';

        while (titleElement.offsetWidth > containerWidth && fontSize > 16) {
          fontSize -= 1;
          titleElement.style.fontSize = `${fontSize}px`;
        }

        if (titleElement.offsetWidth > containerWidth) {
          const scale = containerWidth / titleElement.offsetWidth;
          titleElement.style.transform = `scale(${scale})`;
        }
      } else {
        let fontSize = 320;
        titleElement.style.fontSize = `${fontSize}px`;
        titleElement.style.transform = 'none';

        while (titleElement.offsetWidth > containerWidth && fontSize > 80) {
          fontSize -= 2;
          titleElement.style.fontSize = `${fontSize}px`;
        }

        if (titleElement.offsetWidth > containerWidth) {
          const scale = containerWidth / titleElement.offsetWidth;
          titleElement.style.transform = `scale(${scale})`;
          titleElement.style.transformOrigin = 'left top';
        }
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
