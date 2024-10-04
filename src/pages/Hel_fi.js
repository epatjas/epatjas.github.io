import React, { useEffect } from 'react';
import { CaseStudyHero } from '../components/CaseStudyHero';
import { CaseStudyParagraph } from '../components/CaseStudyParagraph';
import { CaseStudyApproach } from '../components/CaseStudyApproach';
import { CaseStudyTestimonial } from '../components/CaseStudyTestimonial';
import CaseStudyProjects from '../components/CaseStudyProjects';
import './Hel_fi.css'; 
import Header from '../components/Header';
import CaseStudySection from '../components/CaseStudySection';
import { getImagePath } from '../utils/imageUtils';

function Hel_fi() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectsData = {
    title: "Selected projects",
    subtitle: "Few examples of different projects I did during hel.fi renewal",
    projects: [
      {
        title: "Healthcare",
        image: getImagePath('Terveyspalvelut.png'),
        description: "One of the first pilot projects in hel.fi was renewing the most used part of the web service - Helsinki health stations and the services they provide. My goal was to focus on findability and clear user paths to help everydaycitizens find the best possible way to access the services they need."
      },
      {
        title: "Guiding the senior citizens",
        image: getImagePath('Senioripalvelut.png'),
        description: "In this project, my goal was to help senior citizens find relevant services to them. In order to help them understand the service processes, we created visualised user paths with the focus on very clear structure and accessibility."
      },
      {
        title: "Easier access to decision making",
        image: getImagePath('decision-making-project.png'),
        description: "Our aim was to help citizens keep abreast of how Helsinki is changing and to make it easier to understand the decision-making processes. We were focusing on making a service where finding and reviewing things quickly is as intuitive as possible."
      }
    ]
  };

  return (
    <div className="light-background">
      <Header isLight={false} />
      <div className="container">
        {/* Existing content wrapped in the container */}
        <CaseStudyHero 
          title="New Hel.fi"
          subtitle="Citizen-centric renewal of the largest website in Finland"
          services={["UI/UX Design", "Design Leadership"]}
          client="City of Helsinki"
          year="2020-2022"
        />

        <div className="full-width-image">
          <img src={getImagePath('main-image.png')} alt="Hel.fi project overview" />
        </div>

        <CaseStudyParagraph
          title="Old ways won't open new doors"
          content={[
            "The city of Helsinki's Hel.fi web service is one of the largest websites in Finland. It contains approximately 500 000 pages in six languages. The site has approximately 2 million visitors per month with a yearly increase of about 10% in traffic. The current technical solution will be run down by the end of 2022.",
            "Instead of migrating the site content, the city decided to invest in building a completely new digital service and renew the site concept and content to better cater different user needs."
          ]}
        />

        <CaseStudyApproach 
          title="Translating the Helsinki brand into a digital experience"
          image={getImagePath('Helsinki brand digital experience.png')}
          imageAlt="Helsinki digital experience"
          steps={[
            {
              title: "Digital Brand Experience",
              description: "One of the key objectives was to create not just a new visual concept for new hel.fi but also implement it to the whole city organization and streamline the overall digital customer experience across all the different digital solutions within the organization."
            },
            {
              title: "Building a Solid Design System",
              description: "We designed, tested, and iterated new UI components and page templates and tested them with users. Our work contributed to the now award winning Helsinki Design System to make it even more solid and serve all digital projects across the city."
            },
            {
              title: "Rapid Prototyping and User Testing",
              description: "We were working in close collaboration with product owners and other experts, facilitating site concepts and creating rapid prototypes to validate them with city dwellers."
            }
          ]}
        />

        <CaseStudySection
          title="Integrating design into the city organization"
          description1="The journey to renew the whole hel.fi is ongoing and will altogether take more than two years. The scale of the project is so massive that the City of Helsinki decided to split it into smaller entities, focusing on one theme and industry at a time."
          description2="We gathered expert teams from various fields and trained them to utilise design thinking methods as part of their day-to-day work. In addition to building a new site, we coach the design team, product owners, and other internal stakeholders, as well as plan design processes and integrate customer-centric thinking into the organisation."
          image={getImagePath('digital styleguide.png')}
        />

        <CaseStudyTestimonial 
          quote="Elina has created the new visual and UX concept for city of Helsinki's main website and helped us to build our brand experience in the digital world. Elina has also been instrumental in creating our UX/UI design ways of working and training our UX/UI team and scaling our models across the organisation. Elina is incredible with documentation and building collaboration with software development. She has also contributed a great deal to our team's wellbeing and positive atmosphere."
          authorName="Anni Leppänen"
          authorTitle="Lead Service Designer"
          authorCompany="City Of Helsinki"
          authorImage={getImagePath('anni leppanen.png')}
        />

        <CaseStudyProjects 
          title={projectsData.title}
          subtitle={projectsData.subtitle}
          projects={projectsData.projects}
        />
        {/* Other components */}
      </div>
    </div>
  );
}

export default Hel_fi;
