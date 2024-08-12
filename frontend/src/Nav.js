// Import React and React Router:
import React from "react";
import { Link } from "react-router-dom";

// Nav Component:
function Nav() {
  
  // Navbar Structure:
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary rounded-bottom-2">
      <div className="container-fluid">
        {/* Navbar Brand */}
        <Link className="navbar-brand ps-3 pe-5 font-monospace fst-italic" to="/Home">
          The Money Manager
        </Link>
        {/* Navbar Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar Links */}
        <div className="collapse navbar-collapse ps-1" id="navbarNav">
          <ul className="navbar-nav">
            {/* Navigation Links */}
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/loan-details">
                Loan options
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/gold-loan">
                Gold loan
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Service">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Contact">
                Contact us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Adminlogin">
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/login">
                Login/Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// Export Default:
export default Nav;
