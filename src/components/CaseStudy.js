import React from 'react';
import './CaseStudy.css';

function CaseStudy({ title, subtitle, services, client, year, background, challenge, approach, solution, images }) {
  return (
    <div className="case-study">
      <section className="hero">
        <h1 className="project-title">{title}</h1>
        <p className="project-subtitle">{subtitle}</p>
        <div className="project-details">
          <div className="detail">
            <h2>Services</h2>
            <p>{services}</p>
          </div>
          <div className="detail">
            <h2>Client</h2>
            <p>{client}</p>
          </div>
          <div className="detail">
            <h2>Year</h2>
            <p>{year}</p>
          </div>
        </div>
      </section>

      <section className="background">
        <h2>Background</h2>
        <p>{background}</p>
      </section>

      <section className="challenge">
        <h2>Challenge</h2>
        <p>{challenge}</p>
      </section>

      <section className="approach">
        <h2>Approach</h2>
        <p>{approach}</p>
      </section>

      <section className="solution">
        <h2>Solution</h2>
        <p>{solution}</p>
      </section>

      <div className="image-gallery">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Project image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default CaseStudy;
