import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import profileImage from '../../assets/PELAJE.png';
// import './AboutMe.css'; // Make sure to import the CSS

const AboutMe = () => {
  const [showModal, setShowModal] = useState(false);

  const skills = {
    frontend: ["React.js", "JavaScript", "HTML/CSS", "Bootstrap", "Tailwind CSS"],
    backend: ["PHP", "Firebase", "MySQL", "REST APIs", "Node.js"],
    tools: ["Git/GitHub", "VS Code", "Figma"]
  };

  const experiences = [
    {
      title: "Lead Developer - Facial Recognition System",
      period: "2024",
      description: "Led development of a PWA attendance system using React.js and Firebase with machine learning integration",
      technologies: ["React.js", "Firebase", "ML", "PWA"],
      color: "#FF6B6B"
    },
    {
      title: "Backend Developer - Community Website",
      period: "2025",
      description: "Developed admin systems and backend architecture for Dicklum community portal",
      technologies: ["PHP", "React.js", "Firebase", "REST APIs"],
      color: "#4ECDC4"
    },
    {
      title: "Full-Stack Developer - E-Commerce Platform",
      period: "2025",
      description: "Built staff management and inventory systems for Bakester Mumshie e-commerce",
      technologies: ["React.js", "Firebase", "Payment API"],
      color: "#45B7D1"
    }
  ];

  const education = {
    degree: "Bachelor of Science in Information Technology",
    school: "Northern Bukidnon State College",
    year: "2025",
    achievements: []
  };

  const handleImageClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  // Close modal on Escape key
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  return (
    <div style={{ marginTop: '30px' }}>
      <section id="about" className="about-section py-5">
        <div className="container">
          {/* Section Header */}
          <div className="section-header text-center mb-5">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Passionate Developer • Quick Learner • Problem Solver</p>
          </div>

          <div className="row">
            {/* Left Column - Personal Info & Education */}
            <div className="col-lg-4">
              {/* Profile Card */}
              <div className="profile-card text-center mb-4 hover-card">
                <div className="profile-image mb-3">
                  <div
                    className="image-placeholder clickable-image"
                    onClick={handleImageClick}
                  >
                    <img
                      src={profileImage}
                      alt="Jose Vicent Pelaje"
                      className="profile-picture"
                    />
                    <div className="image-overlay">
                      {/* <i className="fas fa-search-plus"></i> */}
                      {/* <span>View Full Size</span> */}
                    </div>
                  </div>
                </div>
                <h3 className="profile-name">Jose Vicent Pelaje</h3>
                <p className="profile-title">Full-Stack Developer</p>
                <div className="profile-badges">
                  <span className="badge badge-purple">BSIT Graduate</span>
                  <span className="badge badge-blue">React Developer</span>
                  <span className="badge badge-green">PHP Programmer</span>
                </div>
                <div className="card-hover-effect"></div>
              </div>

              {/* Education Card */}
              <div className="education-card hover-card">
                <h4 className="card-title">
                  <i className="fas fa-graduation-cap me-2"></i>
                  Education
                </h4>
                <div className="education-item">
                  <h5>{education.degree}</h5>
                  <p className="institution">{education.school}</p>
                  <span className="year-badge">{education.year}</span>
                </div>
                <div className="card-hover-effect"></div>
              </div>
            </div>

            {/* Right Column - Skills & Experience */}
            <div className="col-lg-8">
              {/* Introduction */}
              <div className="intro-card mb-4 hover-card">
                <h4 className="card-title">Hello! I'm Jose Vicent Pelaje 👋</h4>
                <p className="intro-text">
                  A passionate and dedicated <strong>BSIT graduate from Northern Bukidnon State College</strong>
                  with hands-on experience in modern web development. I specialize in building responsive
                  and user-friendly applications using <strong>React.js and PHP</strong>.
                </p>
                <p className="intro-text">
                  As a fresh graduate, I bring fresh perspectives, strong problem-solving skills,
                  and eagerness to learn and adapt to new technologies. I'm seeking opportunities
                  where I can contribute to meaningful projects and grow as a professional developer.
                </p>
                <div className="card-hover-effect"></div>
              </div>

              {/* Skills Section */}
              <div className="skills-section mb-4 hover-card">
                <h4 className="card-title mb-4">
                  <i className="fas fa-code me-2"></i>
                  Technical Skills
                </h4>

                <div className="row">
                  {/* Frontend Skills */}
                  <div className="col-md-4">
                    <div className="skill-category">
                      <h6 className="skill-category-title">
                        <i className="fas fa-palette me-2"></i>
                        Frontend
                      </h6>
                      <div className="skills-list">
                        {skills.frontend.map((skill, index) => (
                          <div key={index} className="skill-tag skill-tag-frontend">
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Backend Skills */}
                  <div className="col-md-4">
                    <div className="skill-category">
                      <h6 className="skill-category-title">
                        <i className="fas fa-server me-2"></i>
                        Backend
                      </h6>
                      <div className="skills-list">
                        {skills.backend.map((skill, index) => (
                          <div key={index} className="skill-tag skill-tag-backend">
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tools */}
                  <div className="col-md-4">
                    <div className="skill-category">
                      <h6 className="skill-category-title">
                        <i className="fas fa-tools me-2"></i>
                        Tools
                      </h6>
                      <div className="skills-list">
                        {skills.tools.map((skill, index) => (
                          <div key={index} className="skill-tag skill-tag-tools">
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-hover-effect"></div>
              </div>

              {/* Experience Section */}
              <div className="experience-section hover-card">
                <h4 className="card-title mb-4">
                  <i className="fas fa-briefcase me-2"></i>
                  Project Experience
                </h4>

                <div className="timeline">
                  {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item hover-timeline-item">
                      <div className="timeline-marker" style={{ background: exp.color }}></div>
                      <div className="timeline-content">
                        <h5 className="timeline-title">{exp.title}</h5>
                        <span className="timeline-period" style={{ background: `linear-gradient(135deg, ${exp.color}20, ${exp.color}40)` }}>
                          {exp.period}
                        </span>
                        <p className="timeline-description">{exp.description}</p>
                        <div className="timeline-technologies">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="tech-tag"
                              style={{ background: `linear-gradient(135deg, ${exp.color}20, ${exp.color}40)` }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="card-hover-effect"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="footer-content">
                <h5 className="footer-brand mb-2">Jose Vicent Pelaje</h5>
                <p className="footer-text mb-0">Full-Stack Developer & Problem Solver</p>
                <p>© 2025 Portfolio All rights reserved.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer-links">
                <div className="social-links">
                  <a
                    href="https://www.linkedin.com/in/jose-vincent-pelaje-36a759363/"
                    className="social-link mx-2 text-white"
                    title="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in fa-lg"></i>
                  </a>
                  <a
                    href="https://github.com/JoseVincent369"
                    className="social-link mx-2 text-white"
                    title="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github fa-lg"></i>
                  </a>
                  <a
                    href="https://x.com/Jojee441"
                    className="social-link mx-2 text-white"
                    title="X (Twitter)"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-x-twitter fa-lg"></i>
                  </a>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=josevincentpelaje9@gmail.com"
                    className="social-link mx-2 text-white"
                    title="Email"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-envelope fa-lg"></i>
                  </a>


                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      {showModal && (
        <div
          className="modal-overlay"
          onClick={handleOverlayClick}
        >
          <div className="modal-content">
            <button
              className="modal-close"
              onClick={handleCloseModal}
              aria-label="Close modal"
            >
              <i className="fas fa-times"></i>
            </button>
            <div className="modal-image-container">
              <img
                src={profileImage}
                alt="Jose Vicent Pelaje - Full Size"
                className="modal-image"
              />
            </div>
            <div className="modal-caption">
              <h5>Jose Vicent Pelaje</h5>
              <p>Full-Stack Developer</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutMe;