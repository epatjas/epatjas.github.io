import React from 'react';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import './Work.css';

const projects = [
  {
    image: '/images/nova_brand.png',
    project: 'Nova Brand',
    client: 'Otava Learning'
  },
  {
    image: '/images/platform.png',
    project: 'Online Learning Platform',
    client: 'Otava Learning'
  },
  {
    image: '/images/nova ai.png',
    project: 'Nova AI',
    client: 'Otava Learning'
  },
  {
    image: '/images/Fira.png',
    project: 'Fira Brand & Website',
    client: 'Fira'
  },
  {
    image: '/images/hel_fi.png',
    project: 'Hel.fi Renewal',
    client: 'City of Helsinki'
  },
  {
    image: '/images/Coding Company.png',
    project: 'Coding Company Brand',
    client: 'Coding Company'
  },
  // ... Add more projects as needed
];

function Work() {
  return (
    <div className="workPage">
      <Header isLight={true} />
      <main className="work-content">
        <h1 className="work-title">Selected Projects (20-24)</h1>
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} isLight={true} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Work;
