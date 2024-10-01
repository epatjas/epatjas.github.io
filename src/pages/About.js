import React, { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../components/Footer'; 
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import './About.css';
import { getImagePath } from '../utils/imageUtils';

const About = () => {
  const location = useLocation();
  const faqRef = useRef(null);

  useEffect(() => {
    if (location.hash === '#faq' && faqRef.current) {
      faqRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  // Remove the experiences array as it's no longer needed

  const approachItems = [
    { title: "I work fast, I mean like <em>really</em> fast", description: "Quick iteration allows me to zoom through explorations until I arrive at something that feels just right." },
    { title: "Master at taming the chaos", description: "I have the rare ability to jump into the early stages of open-ended projects and rapidly develop structure and systems." },
    { title: "I don't ship junk. Ever.", description: "I believe meticulous care and a design-centric approach are crucial for creating exceptional user experiences." },
    { title: "I think in systems", description: "I develop reusable components for both small features and entire design systems, ensuring consistency and scalability." },
    { title: "I work with little to no direction", description: "I thrive in ambiguity, turning vague concepts into tangible solutions without needing constant guidance." },
    { title: "Show and tell", description: "I regularly share work-in-progress, keeping stakeholders informed and involved throughout the design journey." }
  ];

  const testimonials = [
    {
      quote: "I cannot recommend Elina enough. Truly world-class in every sense of the word. From helping to visualize an ambitious product story & vision, to playing an active role in bringing on senior full-time talent, and everything in between - Elina can seemingly do it all. Our client's product, team, culture, and customers are in a stronger position thanks to our time together.",
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
    },
    {
      quote: "Elina is a master at taming the chaos. She has the rare ability to jump into the early stages of open-ended projects and rapidly develop structure and systems. She is proactive, works with little to no direction — and she's also very fast!",
      author: "Anna Hallikainen",
      position: "Development Director, Otava Learning",
      avatar: getImagePath('anna.png')
    }
  ];

  const faqQuestions = [
    {
      question: "What is a Fractional Design Partner?",
      answer: "A Fractional Design Partner is an innovative collaboration where companies engage with seasoned designers on a flexible basis to elevate their product vision. As your part-time design partner, I offer both strategic guidance and hands-on expertise, helping organizations bring their ideas to life efficiently. This model provides access to senior-level design talent without the commitment of a full-time hire, making it ideal for startups and growing companies looking to maximize their design impact."
    },
    {
      question: "What are the benefits of a Fractional Design Partner?",
      answer: "Hiring a full-time senior designer can be challenging and risky for startups. As your part-time design partner, I offer a flexible, cost-effective alternative. You'll get senior-level expertise to quickly validate ideas and establish scalable design processes, without the long-term commitment. Drawing from my diverse industry experience, I'll help bring your ideas to life efficiently while guiding you in building your own design capabilities. It's a low-risk way to give your company a strong design edge and maximize impact."
    },
    {
      question: "What is your pricing structure?",
      answer: "I keep things simple with a flat weekly rate. This means we can focus on getting great work done instead of watching the clock. No confusing hourly rates or nickel-and-diming over revisions. We'll work together to bring your ideas to life, and we're done when you're happy with the results."
    },
    {
      question: "What's your availability?",
      answer: "I'm here when you need me. You can reach out any weekday, and I'm flexible for calls or meetings as needed. We'll set clear goals for what needs to get done each week or month, and I'll make sure to deliver on time. This setup means you get the benefits of a dedicated design partner without the full-time commitment. It's all about moving your project forward efficiently while giving you the space to focus on other aspects of your business."
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
            <h3>I help companies ship high-quality products, fast.</h3>
            <p>As your design partner, I will:</p>
            <ul>
              <li>Contribute to product strategy and direction, focusing on actionable insights rather than excessive documentation</li>
              <li>Create rapid, high-fidelity interactive prototypes to test and validate ideas efficiently</li>
              <li>Lead end-to-end design projects, collaborating closely with engineering teams for swift iteration and high-quality implementation</li>
              <li>Come up with features and improvements that ship quickly and with high-quality</li>
              <li>Build and nurture a successful design team within your company</li>
              <li>Establish design-centric processes that promote attention to detail and quality</li>
            </ul>
            <a href="https://www.linkedin.com/in/elinapatjas/" className="view-resume">View resume →</a>
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
        title="What they say"
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

      <FAQ questions={faqQuestions} ref={faqRef} />
    </div>
  );
};

export default About;  // Make sure this line is present
