import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    mobileNo: '',
    email: '',
    password: '',
    address: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!formData.name || !formData.mobileNo || !formData.email || !formData.password || !formData.address) {
        setError('Please fill in all fields');
        return;
      }

      const response = await axios.post('http://localhost:3001/signup', formData);
      console.log(response.data);
      navigate('/login');
    } catch (error) {
      console.error(error);
      setError('Error during signup');
    }
  };

  return (
    <div className="container m-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card  p-3 rounded shadow">
            <div className="sub-headings">
              <h2 className="text-secondary text-center fw-bold">Sign Up</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label"><strong>Name</strong></label>
                <input
                  type="text"
                  placeholder="Enter name"
                  className="form-control"
                  name="name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mobileno" className="form-label"><strong>Mobile No</strong></label>
                <input
                  type="number"
                  placeholder="Enter mobile no"
                  className="form-control"
                  name="mobileNo"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label"><strong>Email Address</strong></label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="form-control"
                  name="email"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label"><strong>Password</strong></label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="form-control"
                  name="password"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label"><strong>Address</strong></label>
                <input
                  type="text"
                  placeholder="Enter address"
                  className="form-control"
                  name="address"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                  {error && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  )}
                </div>
                <button className="btn btn-success mb-3 w-100" type="submit">
                  <strong>Sign up</strong>
                  </button>
              <p className="text-center">Already have an account? <Link to="/login">Login</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
