import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function GoldLoanRequestPage() {
  const [goldLoanRequests, setGoldLoanRequests] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGoldLoanRequests = async () => {
      try {
        const response = await axios.get('http://localhost:3001/goldloan-requests');
        if (response.data.success) {
          setGoldLoanRequests(response.data.data);
        } else {
          console.error('Error fetching gold loan requests:', response.data.message);
        }
      } catch (error) {
        console.error('Error during gold loan requests fetching:', error);
      }
    };

    fetchGoldLoanRequests();
  }, []);

  const handleDeleteGoldLoanRequest = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/goldloan-requests/${id}`);
      // Filter out the deleted gold loan request from the goldLoanRequests state
      setGoldLoanRequests(goldLoanRequests.filter(request => request.id !== id));
    } catch (error) {
      console.error('Error deleting gold loan request:', error);
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
      <h2 className="m-3 text-center text-secondary fw-bold">Gold Loan Requests Details</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Sl. No</th>
              <th>Name</th>
              <th>Mobile Number</th>
              <th>Gold Weight</th>
              <th>Gold Purity</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {goldLoanRequests.map((request, index) => (
              <tr key={request.id}>
                <td>{index + 1}</td>
                <td>{request.name}</td>
                <td>{request.mobileNo}</td>
                <td>{request.goldWeight}</td>
                <td>{request.goldPurity}</td>
                <td>{new Date(request.created_at).toLocaleString()}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleDeleteGoldLoanRequest(request.id)}>Delete</button>
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

export default GoldLoanRequestPage;
