import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

function ProjectCard({ image, project, client, link, isLight = false }) {
  const cardClass = isLight ? 'project-card project-card-light' : 'project-card project-card-dark';

  return (
    <div className={cardClass}>
      <Link to={link} className="project-card__image-link">
        <div className="project-card__image-container">
          <img src={image} alt={project} className="project-card__image" />
        </div>
      </Link>
      <div className="project-card__info">
        <span className="project-card__title">{project}</span>
        <span className="project-card__client">{client}</span>
      </div>
    </div>
  );
}

export default ProjectCard;