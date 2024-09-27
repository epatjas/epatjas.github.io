import React, { useState } from 'react';
import './FAQ.css';

function FAQ({ questions }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently asked questions</h2>
      <div className="faq-content">
        <div className="faq-list">
          {questions.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleQuestion(index)}
            >
              <div className="faq-question">
                <h3>{item.question}</h3>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
