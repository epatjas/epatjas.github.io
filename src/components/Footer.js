import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="quote">
          <p>Quality rarely happens by accident.</p>
          <p>You have to work for it.</p>
        </div>
        <div className="callToAction">
          <a href="/contact" className="collabLink">
            <img src="/images/arrow.svg" alt="Arrow" className="arrow-icon" />
            Let's collab
          </a>
        </div>
      </div>
      <div className="footerBottom">
        <nav className="footerNav">
          <ul>
            <li><a href="/">Overview</a></li>
            <li><a href="/work">Work</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
        <p className="copyright">&copy; 2024 elina patjas</p>
      </div>
    </footer>
  );
}

export default Footer;