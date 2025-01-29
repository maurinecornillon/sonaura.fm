import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Background = () => { 
  const location = useLocation(); // 🔥 Récupère l'URL actuelle

  const interactiveRef = useRef(null);
  const backgroundRef = useRef(null);
  const overlayRef = useRef(null);


  useEffect(() => {
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const handleMouseMove = (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    const move = () => {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      if (interactiveRef.current) {
        interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(move);
    };

    window.addEventListener("mousemove", handleMouseMove);
    move();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // 🔥 Détermine la couleur en fonction de la page active
  const getBackgroundColor = () => {
    switch (location.pathname) {
      case "/echo":
        return "var(--color-bg2)"; 
      case "/lover":
        return "var(--color-bg5)"; 
      case "/zen":
        return "var(--color-bg4)"; 
      case "/focus":
        return "var(--color-bg3)"; 
      case "/boost":
        return "var(--color-bg6)"; 
      case "/soul":
        return "var(--color-bg7)"; // 🎨 Couleur pour Echo
      default:
        return "var(--color-bg1)"; // 🎨 Couleur par défaut (Home)
    }
  };

 // 🎭 Animation fluide de l'overlay
 useEffect(() => {
  const newColor = getBackgroundColor();

  // On définit la nouvelle couleur sur l'overlay et on anime son opacité
  gsap.set(overlayRef.current, { background: newColor, opacity: 0 });

  gsap.to(overlayRef.current, {
    opacity: 1,
    duration: 2, // ⏳ Transition fluide
    ease: "power2.inOut",
    onUpdate: () => {
      // Met progressivement la nouvelle couleur sur le fond principal
      gsap.set(backgroundRef.current, { background: newColor });
    },
    onComplete: () => {
      // Une fois terminé, on garde la nouvelle couleur et on cache l'overlay
      gsap.set(backgroundRef.current, { background: newColor });
      gsap.set(overlayRef.current, { opacity: 0 });
    }
  });
}, [location.pathname]);


  return (
    <div className="gradient-bg-container">

    <div ref={backgroundRef} className="gradient-bg">
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
        <div className="g5"></div>
        <div className="interactive" ref={interactiveRef}></div>
      </div>
      
    </div>
    <div ref={overlayRef} className="gradient-overlay"></div>

    </div>
  );
};

export default Background;
