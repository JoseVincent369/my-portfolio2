import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-nav">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand fw-bold" to="/home">
          PORTFOLIO
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div 
          className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`} 
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/home"
                onClick={() => setIsNavCollapsed(true)}
              >
                <i className="fas fa-home me-1"></i>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/aboutme"
                onClick={() => setIsNavCollapsed(true)}
              >
                <i className="fas fa-user me-1"></i>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/projects"
                onClick={() => setIsNavCollapsed(true)}
              >
                <i className="fas fa-code me-1"></i>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/contact"
                onClick={() => setIsNavCollapsed(true)}
              >
                <i className="fas fa-envelope me-1"></i>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;