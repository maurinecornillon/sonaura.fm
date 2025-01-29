import React, { useState, useEffect } from "react";
import { Routes, Route,useLocation } from "react-router-dom";
import Background from "./components/Background.jsx";
import TransitionPage from "./components/TransitionPage";
import Echo from "./components/Echo.jsx"
import Lover from "./components/Lover.jsx";
import Focus from "./components/Focus.jsx";
import Zen from "./components/Zen.jsx";
import Boost from "./components/Boost.jsx";
import Soul from "./components/Soul.jsx";
import Contact from "./pages/Contact.jsx";


const App = () => {
 
  return ( 
  <>
      <Background/>
      <Routes>
      <Route path="/" element={<TransitionPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/echo" element={<Echo/>} />
        <Route path="/lover" element={<Lover />} />
        <Route path="/focus" element={<Focus />} />
        <Route path="/zen" element={<Zen />} />
        <Route path="/boost" element={<Boost />} />
        <Route path="/soul" element={<Soul />} />
    </Routes>
    </>
  );
};

export default App;
