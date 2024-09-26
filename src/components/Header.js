import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <NavLink to="/" className="logo">elina patjas</NavLink>
        <nav>
          <NavLink to="/work" activeClassName="active">Work</NavLink>
          <NavLink to="/about" activeClassName="active">About</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;