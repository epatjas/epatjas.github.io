import React from 'react';
import './CaseStudyVideo.css';

export const CaseStudyVideo = ({ videoSrc, posterSrc, title }) => {
  return (
    <div className="case-study-video">
      {title && <h2 className="video-title">{title}</h2>}
      <div className="video-wrapper">
        <video controls poster={posterSrc} width="100%">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};
