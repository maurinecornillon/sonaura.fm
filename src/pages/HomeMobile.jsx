import React, { useEffect, useRef, useState } from "react"; 
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import "../App.scss";

const HomeMobile = () => {
    const titleContainerRef = useRef(null);
    const navigate = useNavigate(); 


    useEffect(() => {
        if (titleContainerRef.current) {
          gsap.fromTo(
            titleContainerRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 5, ease: "power2.out" }
          );
        }
      }, []);
  
   
      
    const handleWordClick = (route) => {
          gsap.to(titleContainerRef.current, {
            opacity: 0,
            y: 100, // 🔽 Disparaît vers le bas
            duration: 3,
            ease: "power2.out",
            onComplete: () => {
              navigate(route); // 🚀 Change l'URL après l'animation
            }
          });
      };
    
  return (
    <div className="container-mobile" ref={titleContainerRef}>
      {/* Footer en haut */}
      <div className="footer-text">choose your feelings</div>

      {/* Texte principal */}
      <div className="text-container">
        sonaura.fm
      </div>
<div className="border"></div>
      {/* Groupe des mots (2 lignes de 3) */}
      <div className="repeated-text-mobile">
      <span className="clickable-word" onClick={() => handleWordClick("/lover")}>lover.fm</span>
          <span className="clickable-word" onClick={() => handleWordClick("/echo")}>echo.fm</span>
          <span className="clickable-word" onClick={() => handleWordClick("/focus")}>focus.fm</span>
      </div>
      <div className="border"></div>
      <div className="repeated-text-mobile">
      <span className="clickable-word" onClick={() => handleWordClick("/zen")}>zen.fm</span>
          <span className="clickable-word" onClick={() => handleWordClick("/boost")}>boost.fm</span>
          <span className="clickable-word" onClick={() => handleWordClick("/soul")}>soul.fm</span>
      </div>
      <div className="border"></div>
      {/* Footer en bas */}
      <div className="footer-text">choose your feelings</div>
    </div>
  );
};

export default HomeMobile;
