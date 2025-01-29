import React, { useEffect, useRef, useState } from "react"; 
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import "../App.scss";

const Home = () => {  
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
      <>
        <div className="container" ref={titleContainerRef}>
          <div className="text-container" >
            sonaura.fm
          </div>
            <div className="repeated-text">
          <span className="clickable-word" onClick={() => handleWordClick("/lover")}>lover.fm</span>
          <span className="clickable-word" onClick={() => handleWordClick("/echo")}>echo.fm</span>
          <span className="clickable-word" onClick={() => handleWordClick("/focus")}>focus.fm</span>
          <span className="clickable-word" onClick={() => handleWordClick("/zen")}>zen.fm</span>
          <span className="clickable-word" onClick={() => handleWordClick("/boost")}>boost.fm</span>
          <span className="clickable-word" onClick={() => handleWordClick("/soul")}>soul.fm</span>
          </div>

          <div className="footer-text">choose your feelings</div>
        </div> 
        

      </>
    );
};

export default Home;
