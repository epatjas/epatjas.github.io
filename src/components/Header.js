import React from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

function Header({ isLight = false }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isCaseStudyPage = location.pathname.includes('/work/');

  const headerClass = isLight ? 'header header-light' : 'header header-dark';

  const handleClose = () => {
    navigate('/work'); // This will navigate back to the main work page
  };

  return (
    <header className={`${headerClass} ${isCaseStudyPage ? 'case-study-header' : ''}`}>
      <div className="header-content">
        <Link to="/" className="logo">elina patjas</Link>
        {isCaseStudyPage ? (
          <button onClick={handleClose} className="close-button" aria-label="Close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        ) : (
          <nav>
            <NavLink to="/about" activeClassName="active">About</NavLink>
            <NavLink to="/work" activeClassName="active">Work</NavLink>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;