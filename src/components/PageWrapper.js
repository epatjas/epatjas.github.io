import React from 'react';
import { useLocation } from 'react-router-dom';
import './PageWrapper.css';

function PageWrapper({ children }) {
  const location = useLocation();
  const isWorkPage = location.pathname === '/work';

  return (
    <div className={`page-wrapper ${isWorkPage ? 'work-page' : ''}`}>
      {children}
    </div>
  );
}

export default PageWrapper;
