import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Nav from "./Nav";
import Home from "./Files/Home";
import About from "./Files/About";
import Contact from "./Files/Contact";
import Service from "./Files/Service";
import Login from "./Files/Login";
import Signup from "./Files/Signup";
import Admindashboard from './Files/Admindash';
import Adminlogin from './Files/AdminLogin';
import UsersPage from './Files/UsersPage';
import MessagePage from './Files/MessagePage';
import Updates from './Files/Updates';
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        {/* Display Home component for the root URL */}
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Dashboard" element={<Admindashboard />} />
        <Route path="/Adminlogin" element={<Adminlogin />} />
        <Route path="/users" element={<UsersPage/>} />
        <Route path="/messages" element={<MessagePage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Updates/:id" element={<Updates />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
