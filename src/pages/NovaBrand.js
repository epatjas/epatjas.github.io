import React from 'react';
import { CaseStudyHero } from '../components/CaseStudyHero';
import { CaseStudyParagraph } from '../components/CaseStudyParagraph';
import { CaseStudyApproach } from '../components/CaseStudyApproach';
import CaseStudySection from '../components/CaseStudySection';
// Remove this line: import Header from '../components/Header';
import './NovaBrand.css'; 

function NovaBrand() {
  return (
    <div className="nova-brand-page light-background">
      {/* Remove this line: <Header isLight={true} /> */}
      <div className="container">
        <CaseStudyHero 
          title="Nova Brand"
          subtitle="Building the best way to support and enhance learning experiences."
          services={["Product Strategy", "Branding", "UI/UX Design"]}
          client="Otava Learning"
          year="2023-2024"
        />

        <div className="full-width-image">
          <img src="/images/Nova 01.png" alt="Nova Brand Overview" />
        </div>

        <CaseStudySection 
          title="Where education meets innovation"
          description1="Otava Learning, a major Finnish publishing company specializing in educational materials, found itself at a crossroads in the digital age. As the company shifted its strategy towards service centricity, moving away from marketing individual products, it became apparent that their digital services were disconnected and lacked a unified user experience."
          description2="This fragmentation was hindering Otava's ability to provide a cohesive, user-friendly platform for online learning."
          image="/images/Nova 02.png" 
        />

        <img src="/images/Nova 03.png" alt="Nova Brand Hero" className="full-width-image" />
        <img src="/images/Nova 04.png" alt="Nova Brand Hero" className="full-width-image" />
        <img src="/images/Nova 05.png" alt="Nova Brand Hero" className="full-width-image" />

        <CaseStudySection
          title="Embracing a new chapter"
          description1="The primary challenge was to create a cohesive brand identity for Otava Learning's new online learning platform, Nova. This task encompassed several key objectives:"
          bulletPoints={[
            "Unify the user experience across all digital services, addressing the existing fragmentation.",
            "Align the new brand with Otava's strategic shift towards service centricity.",
            "Develop a comprehensive design system to ensure consistency across all Otava products.",
            "Create a brand that would resonate with both educators and students while maintaining Otava's reputation for quality educational content."
          ]}
          image="/images/Nova 06.png" 
        />
         <div className="full-width-image">
          <img src="/images/Nova 07.png" alt="Nova Brand Overview" />
        </div>

        <div className="full-width-image">
          <img src="/images/Nova 08.png" alt="Nova Brand Overview" />
        </div>


        <CaseStudyApproach 
          title="A better future for every learner."
          image="/images/Nova 09.png"
          steps={[
            {
              title: "Strategic Brand Foundations",
              description: "I began by establishing the core strategic elements of the Nova brand. This involved developing brand values that aligned with Otava's shift towards service centricity. I crafted a mission statement that articulated Nova's purpose in the educational technology landscape, and a vision statement that painted a picture of the future Nova aims to create. These foundational elements were designed to guide all subsequent branding and design decisions, ensuring a cohesive and purposeful brand identity."
            },
            {
              title: "Bringing Nova's vision to life",
              description: "With the strategic foundations in place, I turned my attention to creating a distinctive visual identity for Nova. This encompassed designing a memorable logo, selecting an appropriate color palette, and choosing typography that balanced readability with modern aesthetics. I also developed guidelines for photography and iconography, ensuring all visual elements worked in harmony to convey Nova's brand essence. This comprehensive visual system was crafted to be adaptable across various digital platforms while maintaining consistency."
            },
            {
              title: "Speaking the same language",
              description: "To bridge the gap between strategy and visual identity, I created a shared design system. This system went beyond mere visual guidelines, serving as a unified design language for all of Otava's digital products. It included detailed specifications for UI components, page templates, and interaction patterns. By documenting these elements in a centralized resource, we enabled teams across Otava to implement the Nova brand consistently, improving user experience across all digital services and streamlining the development process for future projects."
            }
          ]}
        />

<CaseStudySection 
  title="Igniting a learning revolution"
  description1="The solution delivered was a complete brand package for Nova, encompassing both strategic and visual elements:"
  bulletPoints={[
    "Brand Strategy: We provided clearly defined brand values, a compelling mission statement, and an inspiring vision that aligned with Otava's new service-centric focus.",
    "Visual Identity: The new visual identity included a distinctive logo, a carefully curated color palette, typography that balanced readability with modernity, guidelines for photographic style, and an intuitive iconography system.",
    "Tone of Voice: We established guidelines for Nova's communication style, ensuring consistency in messaging across all platforms and touchpoints.",
    "Design System: A comprehensive design system was created and documented, serving as a single source of truth for implementing the Nova brand across all Otava products. This system included detailed specifications for UI components, page templates, and interaction patterns."
  ]}
  image="/images/Nova 11.png"
/>
    <div className="full-width-image">
          <img src="/images/Nova 12.png" alt="Nova Brand Overview" />
        </div>

        <div className="full-width-image">
          <img src="/images/Nova 13.png" alt="Nova Brand Overview" />
        </div>

        <div className="full-width-image">
          <img src="/images/Nova 14.png" alt="Nova Brand Overview" />
        </div>


        <CaseStudyParagraph 
          title="Bright horizons"
          content={[
            "While specific metrics would provide a more concrete measure of success, the initial outcomes of the Nova brand launch were promising. The Nova online learning platform was launched with a cohesive brand identity, marking a significant milestone in Otava Learning's digital transformation. This successful integration was immediately apparent in the improved user experience, with early feedback indicating a noticeable enhancement in navigation and overall interaction across Otava's digital services.",
            "The implementation of the shared design system yielded good results in brand consistency. Across Otava's product line, the new unified digital presence reinforced the company's commitment to cohesive, user-centric design. This consistency didn't go unnoticed - both internal stakeholders and end-users provided positive feedback on the new brand identity, highlighting its modern appeal and improved usability.",
            "Perhaps one of the most significant outcomes was the boost in operational efficiency. The comprehensive design system streamlined design and development processes, leading to more efficient creation of new materials and updates to existing products. This not only improved the speed of product development but also ensured that all new offerings maintained the high standard of quality and consistency set by the Nova brand.",
            "These initial results suggest that the Nova brand successfully supported Otava Learning's strategic shift towards service centricity and digital innovation in the educational publishing sector, setting a strong foundation for future growth and development."
          ]}
          ctaButton={{
            text: "Visit Nova",
            url: "https://nova.otava.fi",
            target: "_blank",
            rel: "noopener noreferrer"
          }}
        />
      </div>
    </div>
  );
}

export default NovaBrand;
