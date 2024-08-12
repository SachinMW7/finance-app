import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoanRequestPage() {
  const [loanRequests, setLoanRequests] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLoanRequests = async () => {
      try {
        const response = await axios.get('http://localhost:3001/loan-requests');
        if (response.data.success) {
          setLoanRequests(response.data.data);
        } else {
          console.error('Error fetching loan requests:', response.data.message);
        }
      } catch (error) {
        console.error('Error during loan requests fetching:', error);
      }
    };

    fetchLoanRequests();
  }, []);

  const handleDeleteLoanRequest = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/loan-requests/${id}`);
      // Filter out the deleted loan request from the loanRequests state
      setLoanRequests(loanRequests.filter(request => request.id !== id));
    } catch (error) {
      console.error('Error deleting loan request:', error);
    }
  };

  const handleGoBack = () => {
    window.history.back(); 
  };

  const handleLogout = () => {
    navigate('/Adminlogin');
  };

  return (
    <div className="container mt-4">
      <h2 className="m-3 text-center text-secondary fw-bold">Loan Request Details</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Sl. No</th>
              <th>Name</th>
              <th>Mobile Number</th>
              <th>Email</th>
              <th>Loan Type</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loanRequests.map((request, index) => (
              <tr key={request.id}>
                <td>{index + 1}</td>
                <td>{request.name}</td>
                <td>{request.mobileNo}</td>
                <td>{request.email}</td>
                <td>{request.loanType}</td>
                <td>{new Date(request.created_at).toLocaleString()}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleDeleteLoanRequest(request.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="btn btn-primary me-2" onClick={handleGoBack}>
        Back
      </button>
      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default LoanRequestPage;
