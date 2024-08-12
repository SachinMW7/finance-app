import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function UsersPage() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/users');
      if (response.data.success) {
        setUsers(response.data.data);
      } else {
        console.error('Error fetching data:', response.data.message);
      }
    } catch (error) {
      console.error('Error during data fetching:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleGoBack = () => {
    window.history.back();
  };

  const handleLogout = () => {
    navigate('/Adminlogin');
  };

  const handleDeleteUser = async (userId) => {
    try {
      const response = await axios.delete(`http://localhost:3001/users/${userId}`);
      if (response.data.success) {
        fetchData();
      } else {
        console.error('Error deleting user:', response.data.message);
      }
    } catch (error) {
      console.error('Error during user deletion:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="m-3 text-center text-secondary fw-bold">Users Details</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover ">
          <thead className="table-dark">
            <tr>
              <th>Sl. No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th> {/* Display password */}
              <th>Mobile No</th>
              <th>Address</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td> {/* Display password */}
                <td>{user.mobileNo}</td>
                <td>{user.address}</td>
                <td>{new Date(user.created_at).toLocaleString()}</td>
                <td>
                  <Link to={`/Updates/${user.id}`} className="btn btn-warning me-2">
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to="/signup" className="btn btn-success  me-2">
        Add User
      </Link>
      <button className="btn btn-primary me-2" onClick={handleGoBack}>
        Back
      </button>
      <button className="btn btn-danger " onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default UsersPage;
