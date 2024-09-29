import React from 'react';
import { CaseStudyHero } from '../components/CaseStudyHero';
import { CaseStudyParagraph } from '../components/CaseStudyParagraph';
import { CaseStudyApproach } from '../components/CaseStudyApproach';
import CaseStudySection from '../components/CaseStudySection';
import Header from '../components/Header';
import './FiraBrand.css';
import { getImagePath } from '../utils/imageUtils';

function FiraBrand() {
  return (
    <div className="light-background">
      <Header isLight={false} /> {/* Changed to false for dark variant */}
      <div className="container">
        <CaseStudyHero 
          title="Fira Brand"
          subtitle="I helped Fira to become the bold innovator in the construction industry"
          services={["UI/UX Design", "Brand Design"]}
          client="Fira"
          year="2022"
        />

        <div className="full-width-image">
          <img src={getImagePath('Fira 01.png')} alt="Fira Brand Overview" />
        </div>

        <CaseStudyParagraph 
          title="Background"
          content={[
            "Fira is a construction service company focusing on high-quality project solutions in growing sectors of the construction industry, especially in the Helsinki metropolitan area. The company's goal is to be a bold innovator in the construction industry. As the field is becoming increasingly digital and construction processes are changing, Fira wanted to renew its brand to better reflect their goals. However, the company recognized that its brand and digital presence weren't keeping pace with its ambition as a modern construction innovator."
          ]}
        />

        <CaseStudyApproach 
          title="Becoming the bold innovator of the construction industry"
          image={getImagePath('Fira 02.png')}
          imageAlt="Fira Brand Approach"
          steps={[
            {
              title: "Brand Strategy Workshop",
              description: "We started by conducting workshops with key stakeholders to define Fira's core values, mission, and vision for the future."
            },
            {
              title: "Visual Identity Design",
              description: "Based on the brand strategy, we created a new visual identity that reflected Fira's bold and innovative spirit, including a new logo, color palette, and typography."
            },
            {
              title: "Digital Experience Design",
              description: "We redesigned Fira's digital touchpoints, including their website and internal platforms, to align with the new brand identity and improve user experience."
            }
          ]}
        />

        <CaseStudySection 
          title="Challenge"
          description1="Fira was faced with an outdated brand identity and a website that lacked the sophistication and functionality required to serve its growing client base effectively. The company needed a brand renewal and a new digital platform that would reflect its modern approach to construction, highlight its broad range of services, and provide an improved user experience for clients and partners."
          image={getImagePath('Fira 04.png')}
        />

        <CaseStudySection
          title="Solution"
          description1="The brand renewal began with a thorough analysis of Fira's existing brand identity and market positioning. The findings paved the way for a renewed brand that was modern, bold, and reflective of Fira's industry-leading innovations. We created a new visual identity, including a refreshed logo, color palette, typography, and brand guidelines."
          description2="Simultaneously, the website redesign was undertaken with a focus on improving user experience. The new site incorporated clear, impactful messaging that communicated Fira's innovative approach to construction. We also developed a comprehensive digital design system to ensure a consistent user experience across all platforms."
          image={getImagePath('Fira 05.png')}
        />

        <CaseStudyParagraph 
          title="Results"
          content={[
            "The launch of Fira's new brand identity and website marked a milestone in the company's evolution. The fresh branding positioned Fira as a bold, modern construction leader, while the user-friendly website provided a powerful platform for demonstrating its expertise and services.",
            "In the months following the launch, Fira reported an increase in website traffic, a rise in the average time spent on the site, and a higher conversion rate. The company also received positive feedback from clients and partners who found the new website to be a valuable resource for understanding Fira's offerings."
          ]}
          ctaButton={{
            text: "Visit Fira",
            url: "https://www.fira.fi",
            target: "_blank",
            rel: "noopener noreferrer"
          }}
        />

    
      </div>
    </div>
  );
}

export default FiraBrand;
