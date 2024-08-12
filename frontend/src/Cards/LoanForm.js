import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function LoanRequestForm() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    mobileNo: '',
    email: '',
    loanType: location.state ? location.state.loanData.loanType : '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.mobileNo || !formData.email) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/loan-request', formData);
      console.log(response.data);
      setSuccess('Loan request submitted successfully');
      // Clear form data after successful submission
      setFormData({
        name: '',
        mobileNo: '',
        email: '',
        loanType: location.state ? location.state.loanData.loanType : '',
      });
    } catch (error) {
      console.error(error);
      setError('Error during loan request');
    }
  };

  return (
    <div className="container m-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-3 rounded shadow">
            <div className="sub-headings">
              <h2 className="text-secondary text-center fw-bold">Loan Request</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label"><strong>Name</strong></label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mobileNo" className="form-label"><strong>MobileNo</strong></label>
                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  className="form-control"
                  name="mobileNo"
                  value={formData.mobileNo}
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
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="loanType" className="form-label"><strong>Loan Type</strong></label>
                <input
                  type="text"
                  className="form-control"
                  name="loanType"
                  value={formData.loanType}
                  onChange={handleChange}
                  readOnly 
                />
              </div>
              <div className="mb-3">
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}
                {success && (
                  <div className="alert alert-success" role="alert">
                    {success}
                  </div>
                )}
              </div>
              <button className="btn btn-success mb-3 w-100" type="submit">
                <strong>Submit Request</strong>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoanRequestForm;
