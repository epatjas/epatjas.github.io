import React from 'react';
import './Testimonials.css';

function Testimonial({ title, quote, author, position }) {
  return (
    <div className="testimonial">
      <h2>{title}</h2>
      <blockquote>
        "{quote}"
      </blockquote>
      <cite>
        {author}<br />
        {position}
      </cite>
    </div>
  );
}

export default Testimonial;
