import React from 'react';
import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';
import Header from '../components/Header';
import Footer from '../components/Footer'; 
import './Home.css';

function Home() {
  const highlightedProjects = [
    { id: '01', name: 'Otava Learning', image: '/images/Nova.png' },
    { id: '02', name: 'City of Helsinki', image: '/images/helsinki.png' },
    { id: '03', name: 'Fira', image: '/images/Fira.png' },
    { id: '04', name: 'Vaisala DCX', image: '/images/vaisala.png' },
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
              <div key={project.id} className="project-item">
                <p className="project-title">{project.id} {project.name}</p>
                <div className="project-image-container">
                  <img src={project.image} alt={project.name} />
                </div>
              </div>
            ))}
          </div>
          <Link to="/work" className="see-all">See all ›</Link>
        </section>

        <Testimonials 
          title="What Clients Say"
          quote="Your client quote here"
          author="Client Name"
          position="Client Position"
        />

      </main>
      <Footer />
    </div>
  );
}

export default Home;