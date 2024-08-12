import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        setError('Please enter both email and password');
        return;
      }

      const response = await axios.post('http://localhost:3001/login', {
        email,
        password,
      });

      if (response.data.success) {
        setSuccessMessage('Login successful');
        // Reload the page after successful login
        window.location.reload();
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred during login');
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="card p-3 rounded m-5 shadow">
            <div className="sub-headings">
              <h2 className="text-secondary text-center fw-bold">Log In</h2>
            </div>
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address:
                </label>
                <input
                  required
                  type="text"
                  placeholder="Enter email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input
                  required
                  type="password"
                  placeholder="Enter password"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}
                {successMessage && (
                  <div className="alert alert-success" role="alert">
                    {successMessage}
                  </div>
                )}
              </div>
              <button
                type="button"
                className="btn btn-success mb-3 w-100"
                onClick={handleLogin}
              >
                Login
              </button>
              <p className="text-center">
                Don't have an account? <Link to="/signup">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
