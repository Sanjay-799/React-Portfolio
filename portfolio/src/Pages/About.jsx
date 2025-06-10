import React from "react";
import { About } from "../about";


function AboutPage() {
  return (
    <div className="container">
      <div>
        <h1 className="top-heading mt-4">About Me</h1>
        <div className="main-card">
          <div className="abt-image-container">
            <img 
              src="/images/abt.jpg" 
              alt="Profile" 
              className="abt-image" 
              loading="lazy"
            />
          </div>
          
          <div className="abt-name-container">
            {About.map((abt) => (
              <div className="abt-main-name-card" key={abt.id}>
                <h1 className="abt-main-name mt-3 mb-3">{abt.Name}</h1>
              </div>
            ))}
          </div>
          
          <div className="abt-description-container">
            <p className="abt-des">
              Myself Sanjay Dasari, and I recently graduated with a degree in Computer Science Engineering, 
              specializing in Artificial Intelligence, from Parul University. During my academic journey, 
              I worked on several projects in Data Analytics and Web Development. I also have a strong 
              interest in Machine Learning and enjoy exploring its applications.
            </p>
          </div>
        </div>
        
        <div className="skills-section">
          <h1 className="top-heading">Skills</h1>
          
        </div>
      </div>
    </div>
  );
}

export default AboutPage;