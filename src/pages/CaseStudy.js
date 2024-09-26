import React from 'react';
import './CaseStudy.css';

function CaseStudy({ title, client, description, challenge, solution, outcome, images }) {
  return (
    <div className="case-study">
      <h1>{title}</h1>
      <p className="client">{client}</p>
      <p className="description">{description}</p>
      <section>
        <h2>Challenge</h2>
        <p>{challenge}</p>
      </section>
      <section>
        <h2>Solution</h2>
        <p>{solution}</p>
      </section>
      <section>
        <h2>Outcome</h2>
        <p>{outcome}</p>
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
