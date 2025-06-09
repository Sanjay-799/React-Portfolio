import React from "react";
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleProjectsClick = () => {
    navigate('/projects');
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-image-container">
          <img 
            src="/images/abt.jpg" 
            alt="Sanjay Dasari" 
            className="hero-image"
            width={250}
            height={250}
            loading="lazy"
          />
        </div>
        
        <div className="hero-content">
          <span className="hero-greeting">HELLO!</span>
          <h1 className="hero-title">
            I'm <span className="hero-name">Sanjay Dasari</span>
          </h1>
          {/* <span className="hero-role">Engineer</span> */}
          <h2 className="hero-subtitle">Aspiring Data Analyst</h2>
          <p className="hero-description">
            Transforming raw data into meaningful insights with Python, SQL, and Power BI
          </p>
          <button 
            className="hero-button"
            onClick={handleProjectsClick}
            aria-label="View my projects"
          >
            VIEW MY WORKS
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomePage;