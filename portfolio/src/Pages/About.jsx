import React from "react";

function AboutPage() {
  const skills = [
    { name: "SQL", level: 90 },
    { name: "Python", level: 85 },
    { name: "Data Visualization", level: 90 },
    { name: "Statistical Analysis", level: 85 },
  ];

  const personalDetails = [
    { label: "Profile", value: "Data Analytics" },
    { label: "Domain", value: "Retail, Ecommerce, BFSI & Digital Marketing" },
    { label: "Education", value: "Bachelor of Engineering" },
    { label: "Language", value: "English, Telugu, Hindi" },
    { label: "BI Tools", value: "Microsoft Power BI" },
    { label: "Other Skills", value: "Excel, Git" },
    { label: "Interest", value: "Traveling, Travel Photography" },
  ];

  return (
    <section className="about-section bg-black text-white py-5">
      <div className="container">
        <div className="row g-4">
          {/* Left Column - Profile and Skills */}
          <div className="col-lg-4">
            <div className="profile-card d-flex align-items-center mb-4">
              <img
                src="/images/abt.jpg"
                alt="Sanjay Dasari"
                className="profile-image rounded-circle border border-2 border-white me-4"
                width="160"
                height="160"
              />
              <div className="profile-info">
                <p className="mb-2"><strong>Name:</strong> Sanjay Dasari</p>
                <p className="mb-2"><strong>Job Role:</strong> Aspiring Data Analyst</p>
                <p className="mb-2"><strong>Experience:</strong> Fresher</p>
                <p className="mb-2"><strong>Location:</strong> Hyderabad, India</p>
              </div>
            </div>

            <div className="skills-section">
              <h3 className="section-title mb-4">Skills</h3>
              {skills.map((skill) => (
                <div key={skill.name} className="skill-item mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: `${skill.level}%` }}
                      aria-valuenow={skill.level}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - About Me and Details */}
          <div className="col-lg-8">
            <h1 className="top-heading mb-4">About Me</h1>
            <p className="about-text lead mb-5">
              B.Tech student with proficiency in Python, Power BI, and SQL,
              passionate about data analysis and machine learning.
              Experienced in applying these tools in multiple projects, which are
              available on my GitHub for review, and eager to contribute my skills to
              data-related roles.
            </p>

            <div className="details-section">
              <div className="row">
                {personalDetails.map((detail) => (
                  <div className="col-md-6 mb-3" key={detail.label}>
                    <p className="mb-1">
                      <strong>{detail.label}:</strong> {detail.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <button 
              className="btn btn-outline-light mt-4"
              onClick={() => window.open("https://www.linkedin.com/in/dasarisanjay799/", '_blank')}
            >
              View My LinkedIn Profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;