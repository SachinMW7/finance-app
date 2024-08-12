import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';

const PersonalLoanPage = () => {
  const navigate = useNavigate(); 
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user/1');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const personalLoanAmounts = [
    { 
      type: 'Standard', 
      amount: '₹5,00,000', 
      details: 'Suitable for various personal needs.', 
      interestRate: '10% per annum', 
      monthlyEMI: '₹13,775', 
      tenureYears: 5, 
      tenureMonths: 60, 
      totalPayable: '₹8,26,500' 
    },
    { 
      type: 'Premium', 
      amount: '₹10,00,000', 
      details: 'Offers higher loan amount with added benefits.', 
      interestRate: '9.5% per annum', 
      monthlyEMI: '₹21,331', 
      tenureYears: 7, 
      tenureMonths: 84, 
      totalPayable: '₹17,92,344' 
    },
    { 
      type: 'Gold', 
      amount: '₹15,00,000', 
      details: 'Ideal for individuals with excellent credit history.', 
      interestRate: '9% per annum', 
      monthlyEMI: '₹29,100', 
      tenureYears: 10, 
      tenureMonths: 120, 
      totalPayable: '₹34,92,000' 
    }
  ];

  const handleApplyNow = (loan) => {
    return () => {
      const { type, amount } = loan;
      const loanType = `Personal Loan - ${type} (${amount})`; 
      const loanData = { loanType, amount };
      navigate('/loan-form', { state: { userData, loanData } });
    };
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center text-secondary fw-bold">Personal Loan Options</h2>
      <div className="row">
        {personalLoanAmounts.map((loan, index) => (
          <div className="col-md-4" key={index}>
            <div className="card m-3 shadow border-2" style={{ width: '18rem' }}>
              <div className="card-body">
                <h3 className="card-title text-center text-secondary fw-bold">{loan.type}</h3>
                <p className="card-text"><strong>Loan Amount:</strong> {loan.amount}</p>
                <p className="card-text"><strong>Interest Rate:</strong> {loan.interestRate}</p>
                <p className="card-text"><strong>Monthly EMI:</strong> {loan.monthlyEMI}</p>
                <p className="card-text"><strong>Tenure:</strong> {loan.tenureYears} years ({loan.tenureMonths} months)</p>
                <p className="card-text"><strong>Total Payable:</strong> {loan.totalPayable}</p>
                <p className="card-text">{loan.details}</p>
                <button className="btn btn-success" onClick={handleApplyNow(loan)}>Apply Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-primary d-block" onClick={handleGoBack}>Back</button>
      </div>
    </div>
  );
};

export default PersonalLoanPage;
