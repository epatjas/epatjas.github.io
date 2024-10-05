import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

function ProjectCard({ image, project, client, link, isLight = false }) {
  const cardClass = isLight ? 'pc-card pc-card-light' : 'pc-card pc-card-dark';

  return (
    <div className={cardClass}>
      <Link to={link} className="pc-card__image-link">
        <div className="pc-card__image-container">
          <img src={image} alt={project} className="pc-card__image" />
        </div>
      </Link>
      <div className="pc-card__info">
        <span className="pc-card__title">{project}</span>
        <span className="pc-card__client">{client}</span>
      </div>
    </div>
  );
}

export default ProjectCard;