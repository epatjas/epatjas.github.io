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
          <h3>Need a design partner?</h3>
          <p>I'm currently prioritizing projects in edtech and healthtech but always curious about new meaningful products. Shoot me a note with your details at elina.patjas@gmail.com</p>
          <p>Available in Fall 24.</p>
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
        <p className="copyright">Design & Development by Elina Patjas. Copyright © 2024.</p>
      </div>
    </footer>
  );
}

export default Footer;