import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'; 

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="logo">elina patjas</div>
      <nav className="nav">
        <Link to="/work">
          {location.pathname === '/work' && <span className="active-dot"></span>}
          Work
        </Link>
        <Link to="/about">
          {location.pathname === '/about' && <span className="active-dot"></span>}
          About
        </Link>
      </nav>
    </header>
  );
}

export default Header;