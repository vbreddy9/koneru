import React from "react";
import logo from "./assets/banner.webp";


const HeroSection = () => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${logo})` }}
    >
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
           <a
            href="https://book.modento.io/c/e3c519c43483402da1f510401a487e28/Koneru/patient-details"
            className="cta-book"
            target="_blank"
            rel="noopener noreferrer"
          >
           BOOK APPOINTMENT
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
