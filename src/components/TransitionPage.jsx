import React, { useState, useEffect } from "react";
import gsap from "gsap";
import Home from "../pages/Home"; 
import HomeMobile from "../pages/HomeMobile";
import "../App.scss";

const phrases = [
  "welcome here.",
  "no matter how you feel.",
  "listen.",
];

const TransitionPage = () => {
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [showHome, setShowHome] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // 📌 Vérifie si mobile

  useEffect(() => {
    // 📌 Met à jour la valeur de isMobile si la fenêtre est redimensionnée
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (phraseIndex < phrases.length) {
      let phrase = phrases[phraseIndex];
      let typedText = "";
      let charIndex = 0;

      const typingInterval = setInterval(() => {
        if (charIndex < phrase.length) {
          typedText += phrase[charIndex];
          setCurrentPhrase(typedText);
          charIndex++;
        } else {
          clearInterval(typingInterval);

          setTimeout(() => {
            gsap.to(".typing-text", {
              opacity: 0,
              duration: 1,
              onComplete: () => {
                setCurrentPhrase(""); 
                setPhraseIndex((prevIndex) => prevIndex + 1);
                gsap.to(".typing-text", { opacity: 1, duration: 0 });
              },
            });
          }, 1000);
        }
      }, 10);

      return () => clearInterval(typingInterval);
    } else {
      setTimeout(() => {
        setShowHome(true);
      }, 2000);
    }
  }, [phraseIndex]);

  if (showHome) {
    return isMobile ? <HomeMobile /> : <Home />; // 📌 Change de composant selon mobile ou desktop
  }

  return (
    <div className="transition-container">
      <h1 className="typing-text">{currentPhrase}</h1>
    </div>
  );
};

export default TransitionPage;
