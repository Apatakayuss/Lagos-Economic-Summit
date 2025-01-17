import React, { useState } from "react";
import "./NewSpeaker.css";

const ImageWithCaption = ({ src, alt, caption, secCaption}) => {
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
      <div className={`caption ${isHovered ? "overlay-visible" : ""}`}>
        {caption}
      </div>
      <div className={`secCaption ${isHovered ? "overlay-visible" : ""}`}>
        {secCaption}
      </div>
    </div>
  );
};

export default ImageWithCaption;






























// import React, { useState } from "react";
// import "./Speaker.css";

// const ImageWithCaption = ({ src, alt, caption, Seccaption, linkedinLink }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <div
//       className={`image-container ${isHovered ? "hovered" : ""}`}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <img src={src} alt={alt} className="image" />
//       <div className={`caption ${isHovered ? "overlay-visible" : ""}`}>
//         <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
//           {caption}
//         </a>
//       </div>

//       <div className={`Seccaption ${isHovered ? "overlay-visible" : ""}`}>
//           {Seccaption}
//       </div>
//     </div>
//   );
// };

// export default ImageWithCaption;
























// import React, { useState } from "react";
// import "./Speaker.css";

// const ImageWithCaption = ({ src, alt, caption }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <div
//       className={`image-container ${isHovered ? "hovered" : ""}`}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
    
//       <img src={src} alt={alt} className="image" />
//       <div className={`caption ${isHovered ? "overlay-visible" : ""}`}>
//         {caption}
//       </div>
//     </div>
//   );
// };

// export default ImageWithCaption;
