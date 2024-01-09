import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function MessagePage() {
  const [contactMessages, setContactMessages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContactMessages = async () => {
      try {
        const response = await axios.get('http://localhost:3001/contact_messages');
        if (response.data.success) {
          setContactMessages(response.data.data);
        } else {
          console.error('Error fetching contact messages:', response.data.message);
        }
      } catch (error) {
        console.error('Error during contact messages fetching:', error);
      }
    };

    fetchContactMessages();
  }, []);

  const handleGoBack = () => {
    window.history.back(); 
  };

  const handleLogout = () => {
    navigate('/Adminlogin');
  };

  return (
    <div className="container mt-4">
      <h2 className="m-3 fw-normal text-center">Message Details Page</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Sl. No</th>
              <th>Name</th>
              <th>Mobile Number</th>
              <th>Email</th>
              <th>Message</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {contactMessages.map((message, index) => (
              <tr key={message.id}>
                <td>{index + 1}</td>
                <td>{message.name}</td>
                <td>{message.mobileNo}</td>
                <td>{message.email}</td>
                <td>{message.message}</td>
                <td>{new Date(message.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="btn btn-primary me-2" onClick={handleGoBack}>
        Back
      </button>
      <button className="btn btn-danger " onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default MessagePage;
