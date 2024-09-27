import React, { useRef } from 'react';
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import './Testimonials.css';

function Testimonials({ title, testimonials = [] }) {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth;
      carouselRef.current.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (!testimonials || testimonials.length === 0) {
    return null; // or return a placeholder component
  }

  return (
    <section className="testimonials">
      <h2>{title}</h2>
      <div className="testimonials-carousel-container">
        <div className="testimonials-carousel" ref={carouselRef}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <p className="author-name">{testimonial.author}</p>
                  <p className="author-position">{testimonial.position}</p>
                </div>
                <img src={testimonial.avatar} alt={testimonial.author} className="author-avatar" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-controls">
        <button className="carousel-control prev" onClick={() => scrollCarousel('prev')}>
          <IoChevronBackOutline />
        </button>
        <button className="carousel-control next" onClick={() => scrollCarousel('next')}>
          <IoChevronForwardOutline />
        </button>
      </div>
    </section>
  );
}

export default Testimonials;
