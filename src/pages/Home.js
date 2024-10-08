import React from 'react';
import { Link } from 'react-router-dom';
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
      <main>
        <section className="hero">
          <h1>I'm a Principal Product Designer with 15+ years of experience in crafting high-quality designs, interactions and products.</h1>
          <p>I strongly believe that attention to detail and a design-centric approach are at the core of creating exceptional user experiences</p>
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

        <section className="about">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>I'm currently working as a <Link to="/about#faq">Independent Design Partner</Link>, offering product strategy and UX/UI design to companies looking to grow. I combine strategic planning with hands-on design work, helping turn ideas into finished products efficiently.</p>
              <p>My background in both creative and technical areas allows me to coordinate teams and develop clear product plans. I adjust my approach based on each company's needs, whether they're just starting out or expanding. This flexible arrangement lets companies benefit from experienced design leadership without the commitment of a full-time hire.</p>
            </div>
            <div className="skills">
              <h3>Cababilities</h3>
              <div className="skills-tags">
                <span>User interface design</span>
                <span>Interaction design</span>
                <span>User experience design</span>
                <span>Concepting</span>
                <span>Branding</span>
                <span>Identity</span>
                <span>Product Strategy</span>
              </div>
            </div>
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