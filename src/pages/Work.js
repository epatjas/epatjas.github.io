import React from 'react';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import './Work.css';
import { getImagePath } from '../utils/imageUtils';

const projects = [
  {
    image: getImagePath('nova_brand.png'),
    project: 'Nova Brand',
    client: 'Otava Learning',
    link: '/work/NovaBrand'
  },
  {
    image: getImagePath('platform.png'),
    project: 'Online Learning Platform',
    client: 'Otava Learning',
    link: '/work/nova_platform'
  },
  {
    image: getImagePath('nova ai.png'),
    project: 'Nova AI',
    client: 'Otava Learning',
    link: '/work/Nova_ai'
  },
  {
    image: getImagePath('Fira.png'),
    project: 'Fira Brand & Website',
    client: 'Fira',
    link: '/work/FiraBrand'
  },
  {
    image: getImagePath('hel_fi.png'),
    project: 'Hel.fi Renewal',
    client: 'City of Helsinki',
    link: '/work/Hel_fi'
  },
  {
    image: getImagePath('Coding company.png'),
    project: 'Coding Company Brand',
    client: 'Coding Company',
    link: '/work/CodingCompany'
  },
  // ... Add more projects as needed
];

function Work() {
  return (
    <div className="workPage">
      <Header isLight={false} />
      <main className="work-content">
        <h1 className="work-title">Selected Projects</h1>
        <h2 className="work-subtitle">(20-24)</h2>
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
