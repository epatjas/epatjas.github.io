import React from 'react';
import { CaseStudyHero } from '../components/CaseStudyHero';
import CaseStudySection from '../components/CaseStudySection';
import { CaseStudyApproach } from '../components/CaseStudyApproach';
import { CaseStudyParagraph } from '../components/CaseStudyParagraph';
import { getImagePath } from '../utils/imageUtils';
import './Nova_ai.css';

const NovaAI = () => {
  return (
    <div className="case-study-nova-ai">
      <div className="container">
        <CaseStudyHero
          title="Nova AI"
          subtitle="Leveraging LLMs to automate exercise generation for adaptive learning"
          services={['Concepting', 'Product Design']}
          client="Nova"
          year="2024"
        />

        <div className="full-width-image">
          <img src={getImagePath('nova ai 01.png')} alt="Nova AI hero image" />
        </div>

        <CaseStudyParagraph
          title="The challenge"
          content={[
            "As the Principal Product Designer at Nova Learning, my primary objective was to create a tool that would help to streamline our team's tasks and the innovative solutions we developed through a proof of concept that creates adaptive learning exercises. The goal was to leverage large language models (LLMs) to automate the generation of exercises for differentiated learning materials across all grade levels and subject areas."
          ]}
        />

        <div className="image-row">
          <div className="image-column">
            <img src={getImagePath('nova ai 02.png')} alt="Nova AI concept 1" />
          </div>
          <div className="image-column">
            <img src={getImagePath('nova ai 03.png')} alt="Nova AI concept 2" />
          </div>
          <div className="image-column">
            <img src={getImagePath('nova ai 04.png')} alt="Nova AI concept 3" />
          </div>
        </div>

        <CaseStudySection
          title="The vision and PoC"
          description1="I knew we needed to find a way to radically transform our approach to content creation. Our goal was to utilize the ability to generate a virtually limitless number of exercises tailored to specific learning objectives. By automating the exercise generation process, we aim to enhance the quality and relevance of the learning materials while simultaneously reducing the workload on our content team."
          description2="Working closely with our engineering and curriculum teams, I led the conceptualization and design of a proof of concept for the AI-powered exercise generator tool. The key was finding a way to seamlessly integrate the LLM with our existing learning materials, such as PDF textbooks and course content."
        />

        <CaseStudyApproach
          title="Our approach to integrating LLMs"
          image={getImagePath('nova ai 05.png')}
          imageAlt="Nova AI approach illustration"
          steps={[
            {
              title: "Extract key concepts",
              description: "Extract key concepts and insights from the educational materials to generate relevant exercises"
            },
            {
              title: "Generate content",
              description: "Generate exercise prompts, questions, and answers based on the extracted information"
            },
            {
              title: "Evaluate and refine",
              description: "Evaluate and refine LLM-generated content to ensure educational accuracy"
            }
          ]}
        />

        <CaseStudyParagraph
          title="The impact"
          content={[
            "The results of our proof of concept were even better than anticipated. We were able to generate thousands of unique, curriculum-aligned exercises from a single source material - a feat that would have taken countless hours through traditional methods.",
            "This not only saved our content writers countless hours of work but also dramatically increased the potential for tailored, adaptive learning experiences for students across various subjects and grade levels.",
            "The truly exciting part was seeing how this automated tool could differentiate the learning experience. The proof of concept showed that teachers could easily tailor the exercises to each student's skill level, ensuring that every learner was engaged and challenged appropriately."
          ]}
        />

        <div className="image-row">
          <div className="image-column">
            <img src={getImagePath('nova ai 06.png')} alt="Nova AI result 1" />
          </div>
          <div className="image-column">
            <img src={getImagePath('nova ai 07.png')} alt="Nova AI result 2" />
          </div>
          <div className="image-column">
            <img src={getImagePath('nova ai 08.png')} alt="Nova AI result 3" />
          </div>
        </div>

        <CaseStudyParagraph
          title="Next steps"
          content={[
            "While this AI-powered exercise generation tool is not yet implemented in the actual platform, the proof of concept has proven to be highly promising. As we move forward, we plan to refine the tool further and explore integration possibilities into our learning management systems.",
            "Next steps include exploring ways to further enhance the exercise generation process, such as incorporating customized feedback and progress tracking features. We also aim to expand the tool's capabilities to cover more subject areas, grade levels, and curriculum standards while ensuring the highest quality of AI-generated learning materials possible.",
            "Through this proof of concept project, Nova Learning has demonstrated the potential for AI to revolutionize the way we approach adaptive learning. We plan to keep pushing the boundaries of what's possible, and I'm excited to see the lasting impact this innovative learning experience will have on students around the world over the coming years."
          ]}
        />
      </div>
    </div>
  );
};

export default NovaAI;