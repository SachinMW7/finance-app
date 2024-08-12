import React from 'react';

const UserDashboard = () => {
  const handleViewAccount = () => {
    // Handle view account functionality here
    console.log('View Account clicked');
  };

  const handleSettings = () => {
    // Handle settings functionality here
    console.log('Settings clicked');
  };

  const handleLogout = () => {
    // Handle logout functionality here
    console.log('Logout clicked');
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="card p-3 rounded m-5 shadow">
            <div className="sub-headings">
              <h2 className="text-secondary text-center fw-bold">User Dashboard</h2>
            </div>
            <div className="mb-3">
              <p>Welcome to your dashboard!</p>
              <p>Here you can access your account information, settings, and other features.</p>
            </div>
            <div className="mb-3">
              <button className="btn btn-primary w-100" onClick={handleViewAccount}>View Account</button>
            </div>
            <div className="mb-3">
              <button className="btn btn-secondary w-100" onClick={handleSettings}>Settings</button>
            </div>
            <div className="mb-3">
              <button className="btn btn-danger w-100" onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
