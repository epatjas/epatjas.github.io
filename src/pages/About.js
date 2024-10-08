import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import './About.css';
import { getImagePath } from '../utils/imageUtils';
import { ArrowUpRight } from 'lucide-react';

const About = () => {
  const location = useLocation();
  const faqRef = useRef(null);

  useEffect(() => {
    if (location.hash === '#faq' && faqRef.current) {
      faqRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);


  const approachItems = [
    { title: "I work fast, I mean like <em>really</em> fast", description: "Quick iteration allows me to zoom through explorations until I arrive at something that feels just right." },
    { title: "Master at taming the chaos", description: "I have the rare ability to jump into the early stages of open-ended projects and rapidly develop structure and systems." },
    { title: "I don't ship junk. Ever.", description: "I believe meticulous care and a design-centric approach are crucial for creating exceptional user experiences." },
    { title: "I think in systems", description: "I develop reusable components for both small features and entire design systems, ensuring consistency and scalability." },
    { title: "I speak also dev", description: "I'm comfortable getting my hands dirty with code—pushing commits to repos and collaborating directly with engineers on implementation." },
    { title: "Show and tell", description: "I regularly share work-in-progress, keeping stakeholders informed and involved throughout the design journey." }
  ];

  const testimonials = [
    {
      quote: "Lightning-fast and visually talented UX designer with deep desire to truly understand user needs equals Elina. I had the privilege of working together with her on a new educational platform for primary-school pupils - her ability to grasp complicated matters and turn them into easy to use solutions just blew my mind. Her commitment to accessibility, combined with the use of clear design system patterns, not only improved the user experience but also significantly sped up my development.",
      author: "Rami Ertimo",
      position: "Front End Architect, Asteroid",
      avatar: getImagePath('rami.png')
    },
    {
      quote: "Elina played a key role in the success of a highly complex project, enhancing our design processes and developing a crucial design system for the organization. She consistently tackled large initiatives with creativity, strategic thinking, and precision. Her ability to manage intricate systems while driving the team's design maturity made a lasting impact. I learned a great deal from working with her, and her contributions were invaluable.",
      author: "Anna Hallikainen",
      position: "Development Director, Otava Learning",
      avatar: getImagePath('anna.png')
    },
    {
      quote: "As a designer, Elina personifies a rare combination of business understanding, technical skills, and good old determination to thrive in the most demanding of circumstances. You can throw her from a high altitude into unknown territories and not only will she land on her feet, she lands already running. Before you know it, Elina makes sure that you have a map, a base camp and – most importantly – a reliable partner to travel with wherever you want to go.",
      author: "Mikko Tirronen",
      position: "Head of Infra, Otava Learning",
      avatar: getImagePath('mikko.png')
    },
    {
      quote: "Elina has created the new visual and UX concept for city of Helsinki's main website and helped us to build our brand experience in the digital world. Elina has also been instrumental in creating our UX/UI design ways of working and training our UX/UI team and scaling our models across the organisation. Elina is incredible with documentation and building collaboration with software development. She has also contributed a great deal to our team's wellbeing and positive atmosphere.",
      author: "Anni Leppänen",
      position: "Lead Service Designer, City of Helsinki",
      avatar: getImagePath('anni.png')
    },
    {
      quote: "Under Elina's leadership, the UX level of this project has been raised to a very high level. Elina's handprint is always extremely high quality and well thought out, and she guided the UX team with admirable serenity. In a short time, the extremely skilled Elina became quite a strong authority to raise the maturity level of UX for the whole organisation!",
      author: "Kristiina Ahonen",
      position: "Senior Content Designer, Kuudes",
      avatar: getImagePath('krisse.png')
    }
  ];

  const faqQuestions = [
    {
      question: "What is an Independent Design Partner?",
      answer: "An Independent Design Partner is an innovative collaboration model where companies engage with seasoned designers on a flexible basis to elevate their product vision. As your design partner, I offer both strategic guidance and hands-on expertise, helping organizations bring their ideas to life efficiently. This model provides access to senior-level design talent without the commitment of a full-time hire, making it ideal for startups and growing companies looking to maximize their design impact."
    },
    {
      question: "What are the benefits of an Independent Design Partner?",
      answer: "Hiring a full-time senior designer can be challenging and risky for startups. As a design partner, I offer a flexible, cost-effective alternative. You'll get senior-level expertise to quickly validate ideas and establish scalable design processes, without the long-term commitment. Drawing from my diverse industry experience, I'll help bring your ideas to life efficiently while guiding you in building your own design capabilities. It's a low-risk way to give your company a strong design edge and maximize impact."
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
              <li>Establish design-centric processes that promote attention to detail</li>
            </ul>
            <a href="https://www.linkedin.com/in/elinapatjas/" className="view-resume">
              View resume <ArrowUpRight className="arrow-icon" size={20} />
            </a>
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
