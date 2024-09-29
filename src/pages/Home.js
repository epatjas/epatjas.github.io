import React from 'react';
import { Link } from 'react-router-dom';
// Remove this line: import Header from '../components/Header';
import Testimonials from '../components/Testimonials';
import ProjectCard from '../components/ProjectCard';
import './Home.css';
import { getImagePath } from '../utils/imageUtils';

function Home() {
  const highlightedProjects = [
    { id: '01', image: getImagePath('Nova.png'), project: 'Nova Brand', client: 'Otava Learning', link: '/work/NovaBrand' },
    { id: '02', image: getImagePath('hel_fi.png'), project: 'New Hel.fi', client: 'City of Helsinki', link: '/work/Hel_fi' },
    { id: '03', image: getImagePath('Fira.png'), project: 'Fira Brand & Website', client: 'Fira', link: '/work/FiraBrand' },
  ];

  return (
    <div className="home-page dark-theme">
      {/* Remove this line: <Header /> */}
      <main>
        <section className="hero">
          <h1>I'm a Principal Product Designer with 15+ years of experience in crafting high-quality designs, interactions, and products.</h1>
          <p>I strongly believe that attention to detail and a design-centric approach are at the core of creating exceptional user experiences</p>
        </section>

        <section className="about">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>I'm an experienced full-stack product designer working on various projects on a wide range of clients. My unique skillset has helped me to manage extremely complex products and deliver outstanding results.</p>
              <p>I view things holistically and am able to think of a system as a whole. I know how to take responsibility for design decisions and am able to articulate them clearly.</p>
            </div>
            <div className="skills">
              <h3>Your one stop shop for:</h3>
              <div className="skills-tags">
                <span>User interface design</span>
                <span>Interaction design</span>
                <span>User experience design</span>
                <span>Front-end dev</span>
                <span>Branding</span>
                <span>Identity</span>
                <span>Product Strategy</span>
              </div>
            </div>
          </div>
        </section>

        <section className="highlighted-projects">
          <div className="section-header">
            <h2>Highlighted projects</h2>
            <Link to="/work" className="see-all-link">See all ›</Link>
          </div>
          <div className="project-grid">
            {highlightedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                image={project.image}
                project={project.project}
                client={project.client}
                link={project.link}
                isLight={false}
              />
            ))}
          </div>
        </section>

        <Testimonials 
          title="What Clients Say"
          quote="Elina has created the new visual and UX concept for city of Helsinki’s main website and helped us to build our brand experience in the digital world. Elina has also been instrumental in creating our UX/UI design ways of working and training our UX/UI team and scaling our models across the organisation."
          author="Anni Leppänen"
          position="City of Helsinki, Lead Service Designer"
        />

      </main>
    </div>
  );
}

export default Home;