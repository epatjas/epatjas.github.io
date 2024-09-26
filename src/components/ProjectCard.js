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
        <h3 className="project-card__title">{project}</h3>
        <p className="project-card__client">{client}</p>
      </div>
    </div>
  );
}

export default ProjectCard;