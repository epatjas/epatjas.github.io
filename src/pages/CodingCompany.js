import React, { useEffect } from 'react';
import './CodingCompany.css';

const CodingCompany = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="case-study-coding-company">
      <div className="container">
        <div className="work-in-progress-banner">
          <p>This case study is a work in progress and will be available soon.</p>
        </div>
      </div>
    </div>
  );
};

export default CodingCompany;
