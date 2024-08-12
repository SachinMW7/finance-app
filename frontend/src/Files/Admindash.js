// Import Statements:
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// AdminDashboard Component:
const AdminDashboard = ({ onLogout }) => {
   // State for checking if the user is an admin:
  const [isAdmin, setIsAdmin] = useState(true);
  // Navigate function for programmatic navigation:
  const navigate = useNavigate();

  // Handle Logout Function:
  const handleLogout = () => {
    setIsAdmin(false);
    navigate('/Adminlogin')
  };

  // Conditional Rendering of Admin Dashboard:
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {isAdmin ? (
            // Render admin dashboard content if isAdmin is true:
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Welcome, Admin!</h2>
                <p className="card-text">This is your admin dashboard.</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-3">
                  <Link to="/users" className="btn btn-primary me-md-2">
                    User Details
                  </Link>
                  <Link to="/messages" className="btn btn-success">
                    User Messages
                  </Link>
                  <Link to="/requests" className="btn btn-warning">
                  Loan Requests
                  </Link>
                  <Link to="/gold-loan-requests" className="btn btn-secondary">
                  GoldLoan Requests
                  </Link>
                </div>
                <button className="btn btn-danger" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
          ) : (
            // Render warning message if isAdmin is false:
            <div className="alert alert-warning mt-3" role="alert">
              Please log in to access the admin dashboard.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
