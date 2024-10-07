import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { getImagePath } from '../utils/imageUtils';
import './SocialDock.css';

const SocialDock = () => {
  return (
    <div className="social-dock">
      <a href="https://www.linkedin.com/in/elinapatjas/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedinIn /></a>
      <a href="https://x.com/ElinaPatjas" target="_blank" rel="noopener noreferrer" title="X (Twitter)"><FaXTwitter /></a>
      <a href="https://github.com/epatjas/epatjas.github.io" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /></a>
      <a href="https://read.cv/elinapatjas" target="_blank" rel="noopener noreferrer" title="Read.cv">
        <img src={getImagePath('read-cv-icon.svg')} alt="Read.cv" className="custom-icon" />
      </a>
      <a href="mailto:elina.patjas@gmail.com" title="Email"><MdEmail /></a>
    </div>
  );
};

export default SocialDock;
