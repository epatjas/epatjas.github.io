import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'; 
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import './About.css';
import { getImagePath } from '../utils/imageUtils';

const About = () => {  // Changed from 'function About()' to 'const About = () =>'
  // Remove the experiences array as it's no longer needed

  const approachItems = [
    { title: "Shared ownership", description: "Whether I work independently or integrate with your team, everyone comes along the process." },
    { title: "I work fast, I mean like <em>really</em> fast", description: "Quick iteration allows us to zoom through explorations until we arrive at something that feels just right." },
    { title: "Show and tell", description: "I frequently share work in progress, usually in the form of screen recordings with a voice over." },
    { title: "Bias for action", description: "I prefer creating tangible artifacts to visualize the team's ideas over lengthy documents that often go ignored." },
    { title: "I work in systems", description: "Whether it's a small feature or an entire design system, I create reusable components for the team." },
    { title: "Design is thinking", description: "I am not afraid to throw away an idea and explore divergent solutions. The more the merrier!" }
  ];

  const testimonials = [
    {
      quote: "Elina is a master at taming the chaos. She has the rare ability to jump into the early stages of open-ended projects and rapidly develop structure and systems. She is proactive, works with little to no direction — and she's also very fast!",
      author: "Anna Hallikainen",
      position: "Development Director, Otava Learning",
      avatar: getImagePath('anna.png')
    },
    {
      quote: "I cannot recommend Elina enough. Truly world-class in every sense of the word. From helping to visualize an ambitious product story & vision, to playing an active role in bringing on senior full-time talent, and everything in between - Elina can seemingly do it all. Our product, team, culture, and customers are in a stronger position thanks to our time together.",
      author: "Rami Ertimo",
      position: "Front End Architect, Asteroid",
      avatar: getImagePath('rami.png')
    },
    {
      quote: "Under Elina's leadership, the UX level of this project has been raised to a very high level. Elina's handprint is always extremely high quality and well thought out, and she guided the UX team with admirable serenity. In a short time, the extremely skilled Elina became quite a strong authority to raise the maturity level of UX for the whole organisation!",
      author: "Kristiina Ahonen",
      position: "Senior Content Designer, Kuudes",
      avatar: getImagePath('krisse.png')
    },
    {
      quote: "Elina has created the new visual and UX concept for city of Helsinki's main website and helped us to build our brand experience in the digital world. Elina has also been instrumental in creating our UX/UI design ways of working and training our UX/UI team and scaling our models across the organisation. Elina is incredible with documentation and building collaboration with software development. She has also contributed a great deal to our team's wellbeing and positive atmosphere.",
      author: "Anni Leppänen",
      position: "Lead Service Designer, City of Helsinki",
      avatar: getImagePath('anni.png')
    }
  ];

  const faqQuestions = [
    {
      question: "What is fractional design leadership?",
      answer: "Fractional leadership is a flexible model where organizations engage part-time design leaders to drive and guide design strategies and initiatives. Fractional Design Leaders provide valuable insights, mentorship, and direction to enhance the overall design capabilities and outcomes of the organization, without the need for full-time employment."
    },
    {
      question: "Why not to hire full-time product designer?",
      answer: "Navigating the hiring process for a full-time designer can be really risky and time-consuming. A bad hire can have detrimental effects on company culture and founders don't always know how to identify the best designer for their long-term needs. Opting to work with me offers a flexible and lower-commitment solution, ideal for situations where time is of the essence and you need to quickly bring your ideas to life without the potential risks associated with a permanent hire. Additionally, as our partnership evolves, I can guide you in building your own dedicated design team, facilitating a seamless transition to capable hands that align with your long-term goals."
    },
    {
      question: "What is your pricing structure?",
      answer: "I focus on bringing exceptional expertise and product intuition with urgency and high craft. That's why I prefer to work with a flat weekly retainer. That way we can focus on the work without worrying about tracking hours, limited revisions, or rigidly defined scopes. We end when the work is done."
    },
    {
      question: "What's your availability?",
      answer: "I'm generally available every weekday through Slack and open to Zoom/in-person meetings on Tuesdays and Thursdays. I find it's best to agree on milestones for the week/month and then focus on delivering those in time, rather than worrying about tracking time."
    }
  ];

  const clients = [
    "Otava Learning",
    "City of Helsinki",
    "Fira",
    "Vaisala",
    "Kotipizza",
    "Hartwall",
    "Kone",
    "Froneri Finland",
    "Metso",
    // Add more clients as needed
  ];

  return (
    <div className="about-page dark-theme">  
      <section className="about-me">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src={getImagePath('elina.png')} alt="Profile" />
          </div>
          <div className="about-text">
            <h3>I help companies ship products fast without compromising quality.</h3>
            <p>I've spent the last decade building products for tech companies. Today, I partner with founders to bring their ideas to life. As your design partner, I will:</p>
            <ul>
              <li>Help you shape your product strategy without drowning in docs</li>
              <li>Quickly create high-fidelity interactive prototypes to validate ideas</li>
              <li>Collaborate directly with engineering teams to iterate swiftly</li>
              <li>Build and nurture a design team that's set up for success</li>
            </ul>
            <a href="/path/to/resume" className="view-resume">View resume →</a>
          </div>
        </div>
      </section>
      
      <section className="approach">
        <h2>Approach</h2>
        <div className="approach-grid">
          {approachItems.map((item, index) => (
            <div key={index} className="approach-item">
              <h3>
                <span className="approach-number">{`0${index + 1}`}</span>{' '}
                <span dangerouslySetInnerHTML={{ __html: item.title }} />
              </h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Testimonials 
        title="What the say"
        testimonials={testimonials}
      />

      <section className="clients-section">
        <h2>Clients</h2>
        <p>I've had the pleasure of working with some great clients along the way. Here are some of them.</p>
        <div className="clients-list-container">
          <div className="clients-list">
            {clients.concat(clients).map((client, index) => (
              <span key={index} className="client-name">{client}</span>
            ))}
          </div>
        </div>
      </section>

      <FAQ questions={faqQuestions} />
    </div>
  );
};

export default About;  // Make sure this line is present
