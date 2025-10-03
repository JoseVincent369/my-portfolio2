import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import '../../App.css';
import profileImage from '../../assets/PELAJE.png';

function App() {
  return (
    <div className="App" style={{ width: "100wh" }}>
      {/* Hero Section */}
      <section id="home" className="hero-section">
        {/* Animated Background Elements */}
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
            <div className="shape shape-5"></div>
          </div>
        </div>

        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              {/* Animated Text Elements */}
              <div className="hero-content">
                <div className="greeting-badge">
                  <span>👋 Welcome to My Portfolio</span>
                </div>
                
                <h1 className="hero-title">
                  Hi, I'm <span className="text-gradient">Jose Vicent Pelaje</span>
                </h1>
                
                <h2 className="hero-subtitle mb-4">
                  <span className="typing-text">Full-Stack Developer</span>
                </h2>
                
                <p className="hero-description mb-4">
                  I create <span className="highlight">beautiful, functional websites</span> and applications 
                  that deliver exceptional user experiences. Passionate about turning ideas 
                  into <span className="highlight">digital reality</span> through clean code and innovative design.
                </p>

                {/* Stats Row
                <div className="hero-stats mb-4">
                  <div className="stat-item">
                    <div className="stat-number">3+</div>
                    <div className="stat-label">Projects</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">2+</div>
                    <div className="stat-label">Years Experience</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">100%</div>
                    <div className="stat-label">Client Satisfaction</div>
                  </div>
                </div> */}

                {/* CTA Buttons
                <div className="hero-buttons">
                  <Link to="/projects" className="btn btn-primary btn-lg me-3">
                    <i className="fas fa-rocket me-2"></i>
                    View My Work
                  </Link>
                  <a href="#contact" className="btn btn-outline-light btn-lg">
                    <i className="fas fa-paper-plane me-2"></i>
                    Get In Touch
                  </a>
                </div> */}

                {/* Quick Links
                <div className="quick-links mt-4">
                  <a href="#about" className="quick-link">
                    <i className="fas fa-user me-2"></i>
                    About Me
                  </a>
                  <a href="#projects" className="quick-link">
                    <i className="fas fa-code me-2"></i>
                    Projects
                  </a>
                  <a href="#contact" className="quick-link">
                    <i className="fas fa-envelope me-2"></i>
                    Contact
                  </a>
                </div> */}
              </div>
            </div>

            <div className="col-lg-6 text-center">
              <div className="hero-image">
                {/* Main Profile Image */}
                <div className="profile-container">
                    <div className="profile-image">
                    <div className="image-frame">
                      <div className="image-placeholder glow-effect clickable-image">
                        <img 
                          src={profileImage} 
                          alt="Jose Vicent Pelaje" 
                          className="profile-picture"
                        />
                        <div className="image-overlay">
                          <i className="fas fa-search-plus"></i>
                          <span>View Full Size</span>
                        </div>
                      </div>
                      {/* Status Indicator */}
                      <div className="status-indicator">
                        <div className="status-dot"></div>
                        {/* <span>Available for work</span> */}
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Tech Elements */}
                  <div className="tech-orbits">
                    <div className="orbit orbit-1">
                      <div className="tech-item">React</div>
                    </div>
                    <div className="orbit orbit-2">
                      <div className="tech-item">JavaScript</div>
                    </div>
                    <div className="orbit orbit-3">
                      <div className="tech-item">PHP</div>
                    </div>
                    <div className="orbit orbit-4">
                      <div className="tech-item">Firebase</div>
                    </div>
                  </div>
                </div>

                {/* Achievement Badges */}
                <div style={{marginTop: '200px'}}>
                <div className="achievement-badges" >
                  <div className="achievement-badge">
                    <i className="fas fa-code"></i>
                    <span>Clean Code</span>
                  </div>
                  <div className="achievement-badge">
                    <i className="fas fa-mobile-alt"></i>
                    <span>Responsive</span>
                  </div>
                  <div className="achievement-badge">
                    <i className="fas fa-bolt"></i>
                    <span>Fast</span>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator
          <div className="scroll-indicator">
            <div className="scroll-text">Scroll to explore</div>
            <div className="scroll-arrow">
              <i className="fas fa-chevron-down"></i>
            </div>
          </div> */}
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