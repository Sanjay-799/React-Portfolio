import React from "react";
import { Link } from "react-router-dom";
import {projects} from '../projects'

function ProjectPage() {
  

  return (
    <div className="container">
      <div>
        <h1 className="top-heading">Projects</h1>
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
                <h2 className="project-title">{project.title}</h2>
                <p className="project-des">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;