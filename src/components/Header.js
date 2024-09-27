import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header({ isLight = false }) {
  const headerClass = isLight ? 'header header-light' : 'header header-dark';

  return (
    <header className={headerClass}>
      <div className="header-content">
        <Link to="/" className="logo">elina patjas</Link>
        <nav>
          <NavLink to="/work" activeClassName="active">Work</NavLink>
          <NavLink to="/about" activeClassName="active">About</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;