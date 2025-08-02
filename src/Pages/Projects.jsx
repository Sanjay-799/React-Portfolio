import React from "react";
import { Link } from "react-router-dom";
import {projects} from '../projects'

function ProjectPage() {
  

  return (
    <div className="container">
      <div>
        <h1 className="top-heading mt-3">Projects</h1>
      </div>
      <div className="row">
        {projects.map((project) => (
          <div className="col-12 col-md-4 mb-4" key={project.id}>
            <div className="project-card">
              <div>
                {project.link ? (
                  <Link to={project.link}>
                    <img 
                      className="project-img img-fluid" 
                      src={project.image} 
                      alt={project.title} 
                    />
                  </Link>
                ) : (
                  <img 
                    className="project-img img-fluid" 
                    src={project.image} 
                    alt={project.title} 
                  />
                )}
              </div>
              <div className="project-content">
                <a href={project.Live} style={{ color: "white", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                  <h2 className="project-title">{project.title}</h2>
                </a>
                <p className="project-des">{project.description}</p>
              </div>

            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="background">
          <div className="bg-card">
          <h1 className="project-bg-heading">More projects on <span className="project-span">Github</span> </h1>
          <p className="project-bg-para">I love to solve business problems & uncover hidden data stories</p>
          <a href="https://github.com/Sanjay-799" ><button className="download-btn">GITHUB</button></a>
        </div>
      </div>
     </div>

    </div>
  );
}

export default ProjectPage;