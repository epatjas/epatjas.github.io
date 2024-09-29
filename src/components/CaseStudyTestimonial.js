import React from 'react';
import './CaseStudyTestimonial.css';

export function CaseStudyTestimonial({ quote, authorName, authorTitle, authorCompany, authorImage }) {
  return (
    <section className="case-study-testimonial">
      <div className="testimonial-content">
        <blockquote>{quote}</blockquote>
        <div className="testimonial-author">
          <img src={authorImage} alt={authorName} className="author-avatar" />
          <div className="author-info">
            <p className="author-name">{authorName}</p>
            <p className="author-title">{authorTitle}</p>
            <p className="author-company">{authorCompany}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
