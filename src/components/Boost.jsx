import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import "../App.scss";
import Header from "./Header";

const Boost = () => {  
  const pageRef = useRef(null); 
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

  const handleNavigation = (route) => {
    gsap.to(pageRef.current, {
      opacity: 0,
      y: 100, // 🔽 Fait disparaître toute la page
      duration: 5,
      ease: "power2.out",
      onComplete: () => {
        navigate(route); // 🚀 Change l'URL après l'animation
      }
    });
  };

  return (
    <>
    <div ref={titleContainerRef}>
   
       {/* Première section (Home) */}
       <div className="page-container" ref={pageRef}>
       <Header onNavigate={handleNavigation} />
       <div className="container" >
          <div className="text-container" >
            boost.fm
          </div>
            <div className="repeated-text">
            <span className="clickable-word" onClick={() => handleWordClick("lover.fm")}>playlist #001</span>
            <span className="clickable-word" onClick={() => handleWordClick("echo.fm")}> playlist #002</span>
            <span className="clickable-word" onClick={() => handleWordClick("focus.fm")}>playlist #003</span>
          </div>
          {/* Texte en bas */}
          <div className="footer-text">
            choose your playlist
            </div>
        </div>
        </div>
        </div>
    </>
  );
};

export default Boost;
