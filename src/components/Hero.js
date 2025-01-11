import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted className="hero-video" aria-label="Background video">
        <source src="/Hacker.mp4" type="video/mp4" />
        Tu navegador no soporta reproducción de video.
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="glitch-container">
          <img src="/Logo-personal.jpg" alt="4LEX-42" className="glitch-image" />
        </div>
        <p className="hero-subtitle">Self-taught programmer</p>
      </div>
    </div>
  );
};

export default Hero;
