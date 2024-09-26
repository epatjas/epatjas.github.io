import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer'; 
import Testimonials from '../components/Testimonials';
import './About.css';

function About() {
  const experiences = [
    {
      company: "Otava Learning",
      duration: "08/2023—09/2024",
      title: "Principal Designer",
      description: [
        "In my role as Principal Designer, I led the overall design vision for Otava Learning's online learning platform. My work involved crafting a user-centric design, focusing on creating an intuitive and effective learning experience that is both engaging and accessible to all.",
        "As part of a dedicated team, I worked at the intersection of design and technology to transform our approach to education. Drawing on the high standards of the dynamic landscape of the publishing industry, I strived to create a platform that is not just functional, but also enjoyable to use and adds value to the learning journey of each individual user.",
        "Through my work, I aimed to contribute to the advancement of Edtech solutions and champion the importance of good design in facilitating improved learning outcomes."
      ]
    },
    {
      company: "Kuudes",
      duration: "08/2020—07/2023",
      title: "Design Lead",
      description: [
        "At Kuudes I'm spending my days making sense of our clients' business challenges and turning my understanding into great designs. I facilitate ways of working between the client and the team, helping our clients evolve the way they work along the way. My superpower is asking the right questions to understand both the client's position and their users' problems, and coming up with solutions that benefit both.",
        "Design Lead at Otava Oppimisen palvelut (08/2022 -> ongoing)"
      ]
    }
    // Add more experiences as needed
  ];


      return (
    <div className="about-page">
      <section className="about-me">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>I'm a somewhat rare full-stack product designer. Started off my career within business design and product management, but quickly found myself deeply involved with UX research and -design and at the same time digging my toes into front-end development.</p>
            <p>This skillset has helped me to manage extremely complex products and deliver outstanding results. My superpower is seeing the bigger picture, understand both the business objectives and their users' problems, and coming up with solutions that benefit both.</p>
          </div>
          <div className="about-image">
            <img src="/images/elina.png" alt="Elina Patjas" />
          </div>
        </div>
      </section>
      
      <section className="experience">
        <h2>Experience</h2>
        {experiences.map((job, index) => (
          <div key={index} className="job-entry">
            <div className="job-info">
              <h3>{job.company}</h3>
              <span className="job-duration">{job.duration}</span>
              <h4>{job.title}</h4>
            </div>
            <div className="job-description">
              {job.description.map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </section>

      <Testimonials 
        title="What Colleagues Say"
        quote="Under Elina's leadership, the UX level of this project has been raised to a very high level. Elina's handprint is always extremely high quality and well thought out, and she has a great eye for details. In a relatively short time, the extremely skilled Elina became quite a strong authority to raise the maturity level of UX for the whole organization!"
        author="Teemu Haapala"
        position="Head of AI Program"
      />

      <section className="clients">
        <h2>Clients</h2>
        <p>I've had the pleasure of working with some great clients along the way. Here are some them:</p>
        <ul>
          <li>Otava Learning</li>
          <li>City of Helsinki</li>
          <li>Fira</li>
          <li>Vaisala</li>
          <li>Kotipizza</li>
          <li>Hartwall</li>
          <li>Kone</li>
          <li>Froneri Finland</li>
          <li>Metso</li>
          <li>& many more</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
