import React from 'react';
import Header from '../components/Header'; // Adjust the path if necessary
import './Home.css';

function Home() {
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
              <p>I'm an experienced product designer working on various projects on a wide range of clients. My unique skillset has helped me to manage extremely complex products and deliver outstanding results.</p>
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

        <section className="projects">
          <h2>Highlighted projects</h2>
          <div className="project-grid">
            <div className="project-item">
              <img src="/path-to-otava-image.jpg" alt="Otava Learning" />
              <p>01 Otava Learning</p>
            </div>
            <div className="project-item">
              <img src="/path-to-helsinki-image.jpg" alt="City of Helsinki" />
              <p>02 City of Helsinki</p>
            </div>
            <div className="project-item">
              <img src="/path-to-fira-image.jpg" alt="Fira" />
              <p>03 Fira</p>
            </div>
            <div className="project-item">
              <img src="/path-to-vaisala-image.jpg" alt="Vaisala DCX" />
              <p>04 Vaisala DCX</p>
            </div>
          </div>
          <a href="/work" className="see-all">See all ›</a>
        </section>

        <section className="testimonial">
          <h2>What Clients Say</h2>
          <blockquote>
            "Elina has created the new visual and UX concept for city of Helsinki's main website and helped us to build our brand experience in the digital world. Elina has also been instrumental in creating our UX/UI design ways of working and training our UX/UI team and scaling our models across the organisation."
          </blockquote>
          <cite>Anni Leppänen<br />Lead Service Designer, City of Helsinki</cite>
        </section>
      </main>
    </div>
  );
}

export default Home;