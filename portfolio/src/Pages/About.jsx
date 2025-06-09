import React from "react";


function AboutPage() {
  return (
    <div className="container-fluid bg-black text-white py-5 px-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            {/* Flexbox Row for Image + Info */}
            <div className="d-flex align-items-center">
              {/* Profile Image */}
              <img
                src="/images/abt.jpg" 
                alt="Sanjay Dasari"
                className="img-fluid abt-image rounded-circle border border-white me-3"
                style={{ width: "160px", height: "160px" }}
              />

              {/* Name and Basic Info */}
              <div>
                <p className="mb-2"><strong>Name:</strong> Sanjay Dasari</p>
                <p className="mb-2"><strong>Job Role:</strong> Aspiring Data Analyst</p>
                <p className="mb-2"><strong>Experience:</strong> Fresher</p>
                <p className="mb-2"><strong>Address:</strong> Hyderabad, India</p>
              </div>
            </div>

            {/* Skills Section */}
            <h5 className="mt-4">Skills</h5>
            {[
              { name: "SQL", level: 90 },
              { name: "PYTHON", level: 85 },
              { name: "Data Visualization", level: 90 },
              { name: "Statistical Analysis", level: 85 },
            ].map(skill => (
              <div key={skill.name} className="mb-3">
                <div className="d-flex justify-content-between">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="progress" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: `${skill.level}%` }}
                    role="progressbar"
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Section: About Me and Details */}
          <div className="col-md-8">
            <h1 className="main-heading fw-bold">About Me</h1>
            <p className="abt-intro mt-3">
              B.Tech student with proficiency in Python, Power BI, and SQL,
              passionate about data analysis and also interested in machine learning.
              Experienced in applying these tools in multiple projects, which are
              available on my GitHub for review, and eager to contribute my skills to
              data-related roles.
            </p>

            <div className="row mt-4">
              {[
                { label: "Profile", value: "Data Analytics" },
                { label: "Domain", value: "Retail, Ecommerce, BFSI & Digital Marketing" },
                { label: "Education", value: "Bachelor of Engineering" },
                { label: "Language", value: "English, Telugu, Hindi" },
                { label: "BI Tools", value: "Microsoft Power BI" },
                { label: "Other Skills", value: "Excel, Git" },
                { label: "Interest", value: "Traveling, Travel Photography" },
              ].map(({ label, value }) => (
                <div className="col-sm-6 mb-2" key={label}>
                  <strong>{label}:</strong> {value}
                </div>
              ))}
            </div>
            <button className="my-works-button mt-3" onClick={() => {
    window.open("https://www.linkedin.com/in/dasarisanjay799/", '_blank');
  }}>Linkedin</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
