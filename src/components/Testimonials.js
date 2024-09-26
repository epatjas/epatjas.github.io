import React from 'react';
import './Testimonials.css';

function Testimonials({ title, quote, author, role }) {
  return (
    <div className="testimonial">
      <h2>{title}</h2>
      <div className="testimonial-content">
        <blockquote>
          "{quote}"
        </blockquote>
        <cite>
          {author}<br />
          {role}
        </cite>
      </div>
    </div>
  );
}

export default Testimonials;
