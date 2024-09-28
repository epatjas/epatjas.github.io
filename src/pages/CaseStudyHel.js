import React from 'react';
import Header from '../components/Header';
import './CaseStudyHel.css';

function CaseStudyHel() {
  return (
    <div className="light-background">
      <Header isLight={true} />
      <div className="case-study-container">
        <div className="case-study-header">
          <div className="case-study-title-container">
            <h1 className="case-study-title">New Hel.fi</h1>
          </div>
          <div className="case-study-intro">
            <p className="case-study-subtitle">Citizen-centric renewal of the largest website in Finland</p>
            <div className="case-study-details">
              <div className="case-study-detail">
                <h3>Services</h3>
                <p>
                  <span className="pill">UI/UX Design</span>
                  <span className="pill">Design Leadership</span>
                </p>
              </div>
              <div className="case-study-detail">
                <h3>Client</h3>
                <p>City of Helsinki</p>
              </div>
              <div className="case-study-detail">
                <h3>Year</h3>
                <p>2020-2022</p>
              </div>
            </div>
          </div>
        </div>

        <img className="case-study-image" src="/images/main-image.png" alt="New Hel.fi website mockups" />

        <section className="background-section">
          <div className="background-content">
            <div className="background-title">
              <h3>BACKGROUND</h3>
              <h2>Old ways won't open new doors</h2>
            </div>
            <div className="background-text">
              <p>The city of Helsinki's Hel.fi web service is one of the largest websites in Finland. It contains approximately 500 000 pages in six languages. The site has approximately 2 million visitors per month with a yearly increase of about 10% in traffic. The current technical solution will be run down by the end of 2022.</p>
              <p>Instead of migrating the site content, the city decided to invest in building a completely new digital service and renew the site concept and content to better cater different user needs.</p>
            </div>
          </div>
        </section>

        <section className="approach-section">
          <div className="approach-content">
            <div className="approach-header">
              <h3>KEY OBJECTIVES</h3>
              <h2>Translating the Helsinki brand into a digital experience</h2>
            </div>
            <div className="approach-image">
              <img src="/images/Helsinki brand digital experience.png" alt="Helsinki digital experience" />
            </div>
            <div className="approach-steps">
              <div className="approach-step">
                <div className="step-number">1</div>
                <h3>Digital Brand Experience</h3>
                <p>One of the key objectives was to create not just a new visual concept for new hel.fi but also implement it to the whole city organization and streamline the overall digital customer experience across all the different digital solutions within the organization.</p>
              </div>
              <div className="approach-step">
                <div className="step-number">2</div>
                <h3>Building a Solid Design System</h3>
                <p>We designed, tested, and iterated new UI components and page templates and tested them with users. Our work contributed to the now award winning Helsinki Design System to make it even more solid and serve all digital projects across the city.</p>
              </div>
              <div className="approach-step">
                <div className="step-number">3</div>
                <h3>Rapid Prototyping and User Testing</h3>
                <p>We were working in close collaboration with product owners and other experts, facilitating site concepts and creating rapid prototypes to validate them with city dwellers.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="solution-section">
          <div className="solution-content">
            <div className="solution-title">
              <h3>SOLUTION</h3>
              <h2>Integrating design into the city organization</h2>
            </div>
            <div className="solution-text">
              <p>The journey to renew the whole hel.fi is ongoing and will altogether take more than two years. The scale of the project is so massive that the City of Helsinki decided to split it into smaller entities, focusing on one theme and industry at a time.</p>
              <p>We gathered expert teams from various fields and trained them to utilise design thinking methods as part of their day-to-day work. In addition to building a new site, we coach the design team, product owners, and other internal stakeholders, as well as plan design processes and integrate customer-centric thinking into the organisation.</p>
            </div>
          </div>
          <div className="solution-image">
            <img src="/images/digital styleguide.png" alt="Digital Styleguide" />
          </div>
        </section>

        <section className="testimonial-section">
          <div className="testimonial-content">
            <blockquote>
              "Elina has created the new visual and UX concept for city of Helsinki's main website and helped us to build our brand experience in the digital world. Elina has also been instrumental in creating our UX/UI design ways of working and training our UX/UI team and scaling our models across the organisation. Elina is incredible with documentation and building collaboration with software development. She has also contributed a great deal to our team's wellbeing and positive atmosphere."
            </blockquote>
            <div className="testimonial-author">
              <img src="/images/anni leppanen.png" alt="Anni Leppänen" className="author-avatar" />
              <div className="author-info">
                <p className="author-name">Anni Leppänen</p>
                <p className="author-title">Lead Service Designer</p>
                <p className="author-company">City of Helsinki</p>
              </div>
            </div>
          </div>
        </section>

        <section className="selected-projects">
          <h2>Selected projects</h2>
          <p className="projects-subtitle">Few examples of different projects I did during hel.fi renewal</p>
          
          <div className="projects-grid">
            <div className="project-card">
              <img src="/images/Terveyspalvelut.png" alt="Healthcare project" />
              <h3>Healthcare</h3>
              <p>One of the first pilot projects in hel.fi was renewing the most used part of the web service – Helsinki health stations and the services they provide. My goal was to focus on findability and clear user paths to help everydaycitizens find the best possible way to access the services they need.</p>
            </div>
            
            <div className="project-card">
              <img src="/images/senioripalvelut.png" alt="Guiding the senior citizens" />
              <h3>Guiding the senior citizens</h3>
              <p>In this project, my goal was to help senior citizens find relevant services to them. In order to help them understand the service processes, we created visualised user paths with the focus on very clear structure and accessibility.</p>
            </div>
            
            <div className="project-card">
              <img src="/images/decison-making-project.png" alt="Easier access to decision making" />
              <h3>Easier access to decision making</h3>
              <p>Our aim was to help citizens keep abreast of how Helsinki is changing and to make it easier to understand the decision-making processes. We were focusing on making a service where finding and reviewing things quickly is as intuitive as possible.</p>
            </div>
          </div>
        </section>

        {/* Rest of the content */}
      </div>
    </div>
  );
}

export default CaseStudyHel;
