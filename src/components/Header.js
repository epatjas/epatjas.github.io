import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo-link">
        <div className="logo">elina patjas</div>
      </Link>
      <nav>
        {/* Your navigation items */}
        <Link to="/about">About</Link>
        <Link to="/work">Work</Link>
        {/* Add any other navigation links */}
      </nav>
    </header>
  );
}

export default Header;