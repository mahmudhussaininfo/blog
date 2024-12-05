import React from "react";
import "./HeroSection.css"; // Import custom styles
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay d-flex justify-content-center align-items-center">
        <div className="hero-content text-center text-light">
          <h1 className="display-4">Welcome to My Blogs</h1>
          <p className="lead">Your journey to excellence starts here.</p>
          <Link href="#about" className="btn btn-warning btn-lg">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
