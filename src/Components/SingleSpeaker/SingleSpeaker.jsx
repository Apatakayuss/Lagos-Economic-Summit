import React, { useState } from "react";
import "./SingleSpeaker.css";

const HoverCaptionImage = ({ src, alt, caption, secCaption, linkedinUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`image-container ${isHovered ? "hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={src} alt={alt} className="image" />
            <div className={`overlay ${isHovered ? "overlay-visible" : ""}`}>
            <div className={`caption ${isHovered ? "overlay-visible" : ""}`}>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer"
        onMouseEnter={(e) => (e.target.style.color = '#fff')}
        
        >
            
          {caption}
        </a>
        </div>
      </div>
      <div className={`secCaption ${isHovered ? "overlay-visible" : ""}`}>
        {secCaption}
      
      </div>
    </div>
  );
};

export default HoverCaptionImage;
