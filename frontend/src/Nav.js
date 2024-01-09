import React from "react";
import { Link, useNavigate} from "react-router-dom";

function Nav() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary rounded-bottom-2">
      <div className="container-fluid">
        <Link className="navbar-brand ps-5 pe-5 font-monospace fst-italic" to="/Home">
          Sachin Finance
        </Link>
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
        <div className="collapse navbar-collapse ps-5" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Home">
                Home
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
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Adminlogin">
                Admin
              </Link>
            </li>
          </ul>

          {/* Loan button */}
          <button className="btn btn-warning ms-auto" onClick={handleLoginClick}>Login</button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
