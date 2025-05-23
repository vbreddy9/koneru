import React from "react";
import logo from "./assets/banner.webp";


const HeroSection = () => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${logo})` }}>
      {/* Overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-heading">
          Emergency exam and X-ray for <span className="highlight">$79</span>
          </h1>
          <p className="hero-subheading">
            Comprehensive Exam & X-Rays for{" "}
            <span className="highlight-price">$119</span>
          </p>
          <p className="hero-desc">Take the first step towards your best smile today.</p>
           <a href="tel:+19198519690">
            <button className="call-btn">BOOK APPOINTMENT!</button>
          </a>
         
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
