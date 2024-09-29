import React from 'react';
import './Footer.css'; 

function Footer({ currentPath, isLight }) {
  const excludePaths = ['/work/NovaBrand', '/work/Hel_fi', '/work/FiraBrand'];
  
  if (excludePaths.includes(currentPath)) {
    return null;
  }

  return (
    <footer className={`footer ${isLight ? 'light-theme' : 'dark-theme'}`}>
      <div className="footerContent">
        <div className="quote">
          <p>Quality rarely happens by accident. You have to work for it.</p>
        </div>
        <div className="callToAction">
          <a href="/contact" className="collabLink">
            Let's collab
            <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
      <div className="footerBottom">
        <nav className="footerNav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/work">Work</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
        <p className="copyright">&copy; 2024 Elina Patjas. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;