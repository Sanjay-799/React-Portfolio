import React from "react";
import { About } from "../about";
import { Data_Bases, DevelopmentSkills, Programming, Visualization } from "../Skills";

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
          <h2 className="section-heading">Development</h2>
          <div className="skills-container">
            <div className="row">
              {DevelopmentSkills.map((dev) => (
                <div className="col-6 col-md-3 mb-3" key={dev.id}>
                  <div className="skill-card">
                    <img 
                      src={dev.image} 
                      alt={dev.Name}
                      className="skill-icon"
                    />
                    <span className="skill-name">{dev.Name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-3">
          <h2 className="section-heading">Programming</h2>
          <div className="skills-container">
            <div className="row">
              {Programming.map((pro) => (
                <div className="col-6 col-md-3 mb-3" key={pro.id}>
                  <div className="skill-card">
                    <img 
                      src={pro.image} 
                      alt={pro.Name}
                      className="skill-icon"
                    />
                    <span className="skill-name">{pro.Name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-3">
          <h2 className="section-heading">Data Visualization</h2>
          <div className="skills-container">
            <div className="row">
              {Visualization.map((data) => (
                <div className="col-6 col-md-3 mb-3" key={data.id}>
                  <div className="skill-card">
                    <img 
                      src={data.image} 
                      alt={data.Name}
                      className="skill-icon"
                    />
                    <span className="skill-name">{data.Name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-3">
          <h2 className="section-heading">Databases</h2>
          <div className="skills-container">
            <div className="row">
              {Data_Bases.map((data) => (
                <div className="col-6 col-md-3 mb-3" key={data.id}>
                  <div className="skill-card">
                    <img 
                      src={data.image} 
                      alt={data.Name}
                      className="skill-icon"
                    />
                    <span className="skill-name">{data.Name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default AboutPage;