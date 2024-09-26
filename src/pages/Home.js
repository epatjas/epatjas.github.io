import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Testimonials from '../components/Testimonials';
import ProjectCard from '../components/ProjectCard';
import './Home.css';

function Home() {
  const highlightedProjects = [
    { id: '01', image: '/images/Nova.png', project: 'Nova Brand', client: 'Otava Learning', link: '/work/nova-brand' },
    { id: '02', image: '/images/helsinki.png', project: 'Online learning platform', client: 'Otava Learning', link: '/work/online-learning-platform' },
    { id: '03', image: '/images/Fira.png', project: 'Nova AI', client: 'Otava Learning', link: '/work/nova-ai' },
  ];

  return (
    <div className="home-page">
      <Header />
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
          <h2>Highlighted projects</h2>
          <div className="project-grid">
            {highlightedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                image={project.image}
                project={project.project}
                client={project.client}
                link={project.link}
              />
            ))}
          </div>
          <Link to="/work" className="see-all">See all ›</Link>
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