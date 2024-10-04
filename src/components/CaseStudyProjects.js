import React from 'react';
import './CaseStudyProjects.css';

function CaseStudyProjects({ title, subtitle, projects }) {
  return (
    <section className="case-study-projects">
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CaseStudyProjects;
