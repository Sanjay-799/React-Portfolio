import React from "react";
import {education} from '../Resume'

function ResumePage() {
  
  

  return (
    <section className="resume-section py-5">
      <div className="container">
        {/* Introduction Section */}
        <div className="intro-section text-center mb-5">
          <h1 className="top-heading">Resume</h1>
          <p className="resume-bio">
            Aspiring Data Analyst with hands-on experience in data analysis, statistical modeling, 
            and data-driven decision-making. Skilled in Python, Excel, Power BI, and MySQL, with 
            a strong foundation in data analysis, reporting, and project execution. Passionate about 
            leveraging data to drive actionable insights and solve real-world problems.
          </p>
        </div>

        {/* Education Section */}
        <div className="education-section mb-5">
          <h2 className="section-heading text-center mb-4">Education</h2>
          <hr className="section-divider" />
          
          <div className="row g-4">
            {education.map((edu, index) => (
              <div className="col-md-6" key={index}>
                <div className="education-card h-100">
                  <span className="education-year">{edu.year}</span>
                  <h3 className="education-degree">{edu.degree}</h3>
                  <p className="education-institution">{edu.institution}</p>
                  <p className="education-performance">{edu.performance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Button */}
        <div className="text-center mt-5">
          <button 
            className="download-btn"
            onClick={() => window.open("https://drive.google.com/file/d/1329TG34PaArnBB1_DY4Q1kWBa8UGo7Ii/view?usp=drive_link", '_blank')}
          >
            DOWNLOAD CV
          </button>
        </div>
      </div>
    </section>
  );
}

export default ResumePage;