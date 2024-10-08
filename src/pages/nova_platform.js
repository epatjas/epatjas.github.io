import React, { useEffect } from 'react';
import { CaseStudyHero } from '../components/CaseStudyHero';
import { CaseStudyApproach } from '../components/CaseStudyApproach';
import { CaseStudyParagraph } from '../components/CaseStudyParagraph';
import { getImagePath } from '../utils/imageUtils';
import Header from '../components/Header'; // Add this import
import { CaseStudyVideo } from '../components/CaseStudyVideo';
import { CaseStudySteps } from '../components/CaseStudySteps';
import './nova_platform.css';

const NovaPlatform = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const approachStyles = {
    '--approach-background': '#F9FBFD',
    '--step-background': '#E8EDF7',
    '--step-number-color': '#272626'
  };

  return (
    <div className="case-study-nova-platform">
      <Header isLight={false} /> {/* Add this line */}
      <div className="container">
        <CaseStudyHero
          title="Nova Platform"
          subtitle="I led the design vision of the new online learning platform with a focus on inspiring learning experiences."
          services={['Product Design', 'Design Leadership']}
          client="Nova"
          year="202-202"
        />

        <div className="full-width-image">
          <img src={getImagePath('nova-platform-01.png')} alt="Nova Platform hero image" />
        </div>

        <CaseStudyParagraph
          title="Revolutionizing Digital Learning for Every Student"
          content={[
            "Otava, a leading educational content provider in Finland, recognized the need to transform its digital learning materials for primary schools. The existing digital learning ecosystem was fragmented, with teachers using two separate digital teaching materials and experiencing usability issues. The user experience for both teachers and students needed significant improvement to meet modern educational needs."
          ]}
        />

        <div className="image-row">
          <div className="image-column">
            <img src={getImagePath('nova-platform-02.png')} alt="Nova Platform illustration 1" />
          </div>
          <div className="image-column">
            <img src={getImagePath('nova-platform-03.png')} alt="Nova Platform illustration 2" />
          </div>
        </div>

        <CaseStudySteps
          title="Challenges"
          challenges={[
            "Fragmented digital learning materials",
            "Poor user experience for teachers and students",
            "Lack of visual appeal and motivation in existing materials",
            "Inconsistent content conceptualization",
            "Difficulty in content creation and management",
            "Limited support for diverse teaching methods"
          ]}
        />



        <div style={approachStyles}>
          <CaseStudyApproach
            title="Our Approach"
            image={getImagePath('nova-platform-04.png')}
            imageAlt="Nova Platform approach illustration"
            steps={[
              {
                title: "User-Centered Design",
                description: "We brought users (teachers and students) into the center of the design process, ensuring their needs were prioritized."
              },
              {
                title: "Holistic View",
                description: "We considered the entire learning experience, integrating technology, pedagogy, and content creation into a cohesive system."
              },
              {
                title: "Iterative Development:",
                description: "We adopted an iterative approach, continuously refining the platform based on user feedback and testing."
              },
              {
                title: "Design System Creation:",
                description: "We developed a comprehensive design system to ensure consistency and efficiency in the platform's development."
              },
              {
                title: "Cross-Functional Collaboration",
                description: "We worked closely with educators, content creators, and technology experts to create a well-rounded solution."
              }
            ]}
          />
        </div>

        <CaseStudyVideo
          videoSrc="/path/to/nova_platform_demo.mp4"
          posterSrc={getImagePath('nova_platform_video_poster.png')}
        />

        <CaseStudyParagraph
          title="Enhanced content editor"
          content={[
            "Recognizing the importance of high-quality, adaptable learning materials, we developed a user-friendly content creation tool.",
            "This editor simplifies the process of creating and managing digital learning materials, allowing educators to focus on crafting engaging content rather than grappling with complex tools.",
            "The editor supports various content types and teaching methods, providing flexibility to accommodate diverse pedagogical approaches."
          ]}
        />

<div className="full-width-image">
          <img src={getImagePath('nova-platform-05.png')} alt="Nova Platform image" />
        </div>

        <CaseStudyParagraph
          title="Improved user interfaces"
          content={[
            "We undertook a complete redesign of both teacher and student interfaces. The new interfaces are more intuitive and engaging, with a focus on enhancing the overall user experience.",
            "For students, we incorporated visual elements that appeal to primary school age groups, using design principles that motivate learning and maintain engagement.",
            "The teacher interface was optimized for efficiency, allowing educators to manage classes, assign work, and track progress with ease."
          ]}
        />

<div className="full-width-image">
          <img src={getImagePath('nova-platform-06.png')} alt="Nova Platform image" />
        </div>

        <CaseStudyParagraph
          title="Nova Design System"
          content={[
            "To ensure consistency across the platform and facilitate efficient development, we created a comprehensive design system. This system includes visual styles, reusable components, and clear guidelines for implementation.",
            "By establishing this foundation, we not only improved the aesthetic cohesion of the platform but also streamlined the development process, allowing for faster iterations and updates."
          ]}
        />

        <div className="image-row">
          <div className="image-column">
            <img src={getImagePath('nova-platform-07.png')} alt="Nova Platform impact 1" />
          </div>
          <div className="image-column">
            <img src={getImagePath('nova-platform-08.png')} alt="Nova Platform impact 2" />
          </div>
        </div>

        <CaseStudyParagraph
          title="Accessibility features"
          content={[
            "Inclusivity was a key consideration in our design process. We implemented a range of accessibility features to cater to students with different learning needs.",
            "This included ensuring compatibility with various assistive technologies, providing alternative text for images, and allowing for customizable text sizes and color contrasts.",
            "These features ensure that the platform can be effectively used by all students, regardless of their individual needs or challenges."
          ]}
        />

<div className="full-width-image">
          <img src={getImagePath('nova-platform-09.png')} alt="Nova Platform image" />
        </div>

        <CaseStudyParagraph
          title="The impact"
          content={[
            "The launch of the Nova Platform marks a significant milestone in Otava's digital learning journey. While it's too early to report on sales figures or widespread adoption rates, the initial outcomes and feedback are highly promising.",
            "One of the most notable achievements is the successful consolidation of two separate digital teaching materials into a single, cohesive platform. This unification has streamlined the digital learning ecosystem for both teachers and students, creating a more integrated and seamless experience. Users no longer need to navigate between different systems, which has greatly simplified the learning and teaching process."
          ]}
        />
        <div className="full-width-image">
          <img 
            src={getImagePath('nova-platform-10.png')} 
            alt="Nova Platform image" 
            onError={(e) => {
              console.error("Error loading image:", e);
              e.target.style.display = 'none';
            }}
          />

<CaseStudyParagraph
          title="Significant usability improvements"
          content={[
            "The focus on user-centered design has yielded impressive results in terms of usability. Our System Usability Score (SUS) has seen a remarkable increase, rising to 85 from a baseline of 66. This score places the Nova Platform in the 'excellent' usability range, indicating that users find the new system intuitive and easy to use. Similarly, our Customer Satisfaction Score (CSAT) has reached 84, up from a baseline of 74, reflecting high user satisfaction with the new platform.",
          ]}
        />
        <div className="full-width-image">
          <img src={getImagePath('nova-platform-11.png')} alt="Nova Platform image" />
        </div>

        <CaseStudyParagraph
          title="Positive feedback"
          content={[
            "Early feedback from teachers and students has been overwhelmingly positive. Users have reported finding the new platform more engaging and intuitive than its predecessors. Teachers have particularly appreciated the streamlined interface and the ease with which they can now create and manage digital learning materials. Students have responded well to the more visually appealing and interactive elements of the platform, which seem to be fostering greater engagement with the learning content.",
            "While it's still early days, these initial results suggest that the Nova Platform is well-positioned to transform the digital learning experience for Otava's users. The improvements in usability, user satisfaction, and content creation efficiency lay a strong foundation for future growth and adoption. As we continue to gather data and feedback, we anticipate seeing the full impact of these improvements on learning outcomes and user engagement in the coming months."
          ]}
        />

        </div>
      </div>
    </div>
  );
};

export default NovaPlatform;