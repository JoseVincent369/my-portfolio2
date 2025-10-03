import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

function App() {
  const [projects] = useState([
    {
      id: 1,
      title: "Facial Recognition Attendance System",
      role: "Lead Full-Stack Developer",
      description: "Developed a progressive web app using facial recognition technology for automated attendance tracking. Implemented machine learning algorithms and real-time database management.",
      technologies: ["React.js", "Firebase", "Machine Learning", "PWA"],
      link: "https://face-bdf67.web.app/",
      responsibilities: [
        "Led development team and managed project timeline",
        "Implemented facial recognition API integration",
        "Built real-time database architecture",
        "Optimized PWA performance and offline functionality"
      ],
      icon: "🔐",
      accentColor: "#6366F1"
    },
    {
      id: 2,
      title: "Dicklum Community Website",
      role: "Backend & Admin System Developer",
      description: "Collaborated on building a comprehensive community portal with admin dashboard, user management, and content management systems.",
      technologies: ["React.js", "Firebase", "Admin SDK", "REST APIs"],
      link: "https://barangaydicklum.web.app/home",
      responsibilities: [
        "Developed secure admin authentication system",
        "Built real-time data management features",
        "Implemented user role-based access control",
        "Optimized database queries and security rules"
      ],
      icon: "🏠",
      accentColor: "#10B981"
    },
    {
      id: 3,
      title: "Bakester Mumshie E-Commerce",
      role: "Backend & Staff System Developer",
      description: "Contributed to an e-commerce platform specializing in baked goods, focusing on staff management, order processing, and inventory systems.",
      technologies: ["React.js", "Firebase", "Cloud Functions", "Payment API"],
      link: "https://bakestermumshie.web.app/home",
      responsibilities: [
        "Developed staff management dashboard",
        "Implemented order tracking system",
        "Built inventory management features",
        "Integrated payment processing system"
      ],
      icon: "🍰",
      accentColor: "#F59E0B"
    }
  ]);

  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'react', 'firebase', 'fullstack', 'backend'];

  return (
    <div className="App" style={{marginTop: '30px'}}>
      {/* Projects Section */}
      <section id="projects" className="projects-section py-5">
        <div className="container">
          {/* Section Header */}
          <div className="section-header text-center mb-5">
            <h2 className="section-title gradient-text">Featured Projects</h2>
            <p className="section-subtitle">Showcasing my expertise in full-stack development and innovative solutions</p>
             
            {/* Filter Buttons */}
            {/* <div className="filter-buttons mt-4">
              {filters.map(filter => (
                <button
                  key={filter}
                  className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div> */}
          </div>

          {/* Projects Grid */}
          <div className="row g-4">
            {projects.map(project => (
              <div key={project.id} className="col-xl-4 col-lg-6 col-md-6">
                <div 
                  className="project-card"
                  style={{ '--accent-color': project.accentColor }}
                >
                  {/* Project Header */}
                  <div className="project-header">
                    <div className="project-icon">{project.icon}</div>
                    <div className="project-meta">
                      <h4 className="project-title">{project.title}</h4>
                      <span className="project-role">{project.role}</span>
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="project-description">{project.description}</p>
                  
                  {/* Key Responsibilities */}
                  <div className="project-responsibilities">
                    <h6 className="responsibilities-title">
                      <i className="fas fa-tasks me-2"></i>
                      Key Responsibilities
                    </h6>
                    <ul className="responsibilities-list">
                      {project.responsibilities.map((resp, index) => (
                        <li key={index} className="responsibility-item">
                          <i className="fas fa-check-circle me-2"></i>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used */}
                  <div className="project-technologies">
                    <h6 className="technologies-title">
                      <i className="fas fa-code me-2"></i>
                      Technologies Used
                    </h6>
                    <div className="tech-tags">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="project-links">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link-btn"
                    >
                      <i className="fas fa-external-link-alt me-2"></i>
                      View Live Project
                    </a>
                    {/* <button className="project-detail-btn">
                      <i className="fas fa-info-circle me-2"></i>
                      More Details
                    </button> */}
                  </div>

                  {/* Project Hover Effect */}
                  <div className="project-hover-effect"></div>
                </div>
              </div>
            ))}
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
    </div>
  );
}

export default App;