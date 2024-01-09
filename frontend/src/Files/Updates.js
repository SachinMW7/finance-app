import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UpdatePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/users/${id}`);
        if (response.data.success) {
          const userData = response.data.data;
          setName(userData.name);
          setEmail(userData.email);
          setMobileNo(userData.mobileNo);
          setPassword(userData.password || "");
          setAddress(userData.address || "");
        } else {
          console.error('Error fetching user data:', response.data.message);
        }
      } catch (error) {
        console.error('Error during user data fetching:', error);
      }
    };

    fetchUserData();
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === "" && email.trim() === "" && mobileNo.trim() === "" && password.trim() === "" && address.trim() === "") {
      alert("Fill the required fields");
      return;
    }

    const isConfirmed = window.confirm("Are you sure you want to update it?");

    if (isConfirmed) {
      axios
        .put(`http://localhost:3001/users/${id}`, { name, email, mobileNo, password, address })
        .then((res) => {
          console.log(res);
          navigate("/users");
        })
        .catch((err) => console.log(err));
    }
  };

  const back = () => {
    navigate("/users");
  };

 
  return (
    <div className="d-flex justify-content-center align-items-center ">
      <div className="bg-white w-50 rounded p-3 col-sm-12 col">
        <form onSubmit={handleSubmit}>
          <h2 className="fw-normal m-3 ">Update User</h2>
          <div className="mb-3">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Mobile No:</label>
            <input
              type="text"
              placeholder="Enter Mobile Number"
              className="form-control"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Address:</label>
            <input
              type="text"
              placeholder="Enter Address"
              className="form-control"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="d-flex justify-content-end">
            <button className="btn btn-danger m-1" onClick={back}>
              Back
            </button>

            <button type="submit" className="btn btn-success m-1">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdatePage;
