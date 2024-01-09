import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLoginClick = () => {
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    if (username === 'monish' && password === 'm') {
      navigate('/Dashboard');
      setError('');
    } else {
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
              <form>
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
                <div className="mb-3">
                  {error && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  className="btn btn-success w-100"
                  onClick={handleLoginClick}
                >
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
