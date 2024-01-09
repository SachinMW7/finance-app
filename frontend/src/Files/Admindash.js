import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminDashboard = ({ onLogout }) => {
  const [isAdmin, setIsAdmin] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAdmin(false);
    navigate('/Adminlogin')
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {isAdmin ? (
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
                </div>
                <button className="btn btn-danger" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
          ) : (
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
