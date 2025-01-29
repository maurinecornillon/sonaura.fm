import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../App.scss";

const Header = ({ onNavigate }) => {  
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 5, ease: "power2.out" }
    );
  }, []);

 



  return (
    <div className="header">
      <span className="clickable-word" onClick={() => onNavigate("/")}>
        home
      </span>
      <span className="clickable-word" onClick={() => onNavigate("/contact")}>
        contact
      </span>
    </div> 
  );
};

export default Header;
