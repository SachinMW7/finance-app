import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Nav from './Nav';
import Home from './Files/Home';
import About from './Files/About';
import Contact from './Files/Contact';
import Service from './Files/Service';
import Login from './Files/Login';
import Signup from './Files/Signup';
import Admindashboard from './Files/Admindash';
import Adminlogin from './Files/AdminLogin';
import UsersPage from './Files/UsersPage';
import MessagePage from './Files/MessagePage';
import LoanRequestPage from './Files/LoanRequestPage';
import Updates from './Files/Updates';
import LoanDetails from './Files/LoanDetails';
import LoanCard from './Cards/LoanCard';
import HomeLoan from './Cards/HomeLoan';
import PersonalLoan from './Cards/PersonalLoan';
import BusinessLoan from './Cards/BusinessLoan';
import EducationLoan from './Cards/EducationLoan';
import MedicalLoan from './Cards/MedicalLoan';
import VehicleLoan from './Cards/VehicleLoan';
import LoanForm from './Cards/LoanForm'; 
import Form from './Gold/Form'; 
import GoldLoanDetails from './Gold/GoldLoanDetails'; 
import GoldLoan from './Gold/GoldLoan'; 
import LoanCalculator from './Gold/LoanCalculator';
import UserDashboard from './Gold/UserDashboard';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Dashboard" element={<Admindashboard />} />
        <Route path="/Adminlogin" element={<Adminlogin />} />
        <Route path="/users" element={<UsersPage/>} />
        <Route path="/messages" element={<MessagePage/>} />
        <Route path="/requests" element={<LoanRequestPage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Updates/:id" element={<Updates />} />
        <Route path="/loan-details" element={<LoanDetails />} />
        <Route path="/loan-card" element={<LoanCard />} />
        <Route path="/Home-loan" element={<HomeLoan />} />
        <Route path="/personal-loan" element={<PersonalLoan />} />
        <Route path="/medical-loan" element={<MedicalLoan />} />
        <Route path="/vehicle-loan" element={<VehicleLoan />} />
        <Route path="/business-loan" element={<BusinessLoan />} />
        <Route path="/education-loan" element={<EducationLoan />} />
        <Route path="/gold-loan" element={<GoldLoan/>} />
        <Route path="/gold-loan-requests" element={<GoldLoanDetails/>} />
        <Route path="/calculator" element={<LoanCalculator/>} />
        <Route path="/user-dashboard" element={<UserDashboard/>} />
        <Route path="/loan-form" element={<LoanForm />} />
        <Route path="/goldloan-form" element={<Form />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
