import React from 'react';
import './CaseStudyTestimonial.css';

export function CaseStudyTestimonial({ quote, authorName, authorTitle, authorCompany, authorImage }) {
  return (
    <section className="cs-testimonial">
      <div className="cs-testimonial-content">
        <blockquote className="cs-testimonial-quote">{quote}</blockquote>
        <div className="cs-testimonial-author">
          <img src={authorImage} alt={authorName} className="cs-author-avatar" />
          <div className="cs-author-info">
            <p className="cs-author-name">{authorName}</p>
            <p className="cs-author-title">{authorTitle}</p>
            <p className="cs-author-company">{authorCompany}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
