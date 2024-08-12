// Import Statements:
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// AdminLogin Component:
const AdminLogin = ({ onLogin }) => {
  // State variables for username, password, and error messages:
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // Navigate function for programmatic navigation:
  const navigate = useNavigate();

  // Handle Login Click Function:
  const handleLoginClick = () => {
    // Check if both username and password are entered:
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

     // Check if the entered username and password are correct:
    if (username === 'admin' && password === '123') {
      // Navigate to the admin dashboard on successful login
      navigate('/Dashboard');
      // Clear any previous error messages:
      setError('');
    } else {
      // Display an error message for incorrect login:
      setError('Incorrect username or password. Please try again.');
    }
  };

  return (
    <div className="container m-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title text-secondary text-center fw-bold">Admin Login</h2>
              {/* Admin Login Form */}
              <form>
                {/* Input fields for username */}
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    <strong>Username:</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                {/* Input fields for password */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    <strong>Password:</strong>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                 {/* Display error message if there is an error */}
                <div className="mb-3">
                  {error && (
                    <div className="alert alert-danger" role="alert">
                     {error}
                    </div>
                  )}
                </div>
                {/* Login button */}
                <button type="button" className="btn btn-success w-100" onClick={handleLoginClick}>
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
