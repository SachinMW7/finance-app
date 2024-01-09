import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

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
        navigate('/home');
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 ">
          <div className="card p-3 rounded m-5 shadow">
            <div className="sub-headings">
              <h2 className="text-secondary text-center fw-bold">Log In</h2>
            </div>
            <form >
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  <strong>Email Address:</strong>
                </label>
                <input
                  type="text"
                  placeholder="Enter email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  <strong>Password:</strong>
                </label>
                <input
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
                </div>
              <button
                type="button"
                className="btn btn-success mb-3 w-100"
                onClick={handleLogin}
              >
                <strong>Login</strong>
              </button>
              <p className="text-center">Don't have an account? <Link to="/signup">Click here</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
