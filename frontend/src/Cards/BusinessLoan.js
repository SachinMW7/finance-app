import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BusinessLoanPage = () => {
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

  const businessLoanAmounts = [
    { 
      type: 'Basic', 
      amount: '₹15,00,000', 
      details: 'Suitable for small business owners. Competitive interest rates.',
      interestRate: '8% per annum', 
      monthlyEMI: '₹12,220', 
      tenureYears: 15,
      tenureMonths: 180,
      totalPayable: '₹27,99,600' 
    },
    { 
      type: 'Advanced', 
      amount: '₹25,00,000', 
      details: 'Offers additional features and benefits for growing businesses.',
      interestRate: '7.5% per annum', 
      monthlyEMI: '₹21,353', 
      tenureYears: 20,
      tenureMonths: 240,
      totalPayable: '₹51,25,520' 
    },
    { 
      type: 'Premium', 
      amount: '₹40,00,000', 
      details: 'Designed for high-end businesses with extensive needs.',
      interestRate: '7% per annum', 
      monthlyEMI: '₹31,393', 
      tenureYears: 25,
      tenureMonths: 300,
      totalPayable: '₹94,17,900' 
    }
  ];

  const handleApplyNow = (loan) => {
    return () => {
      const { type, amount } = loan;
      const loanType = `Business Loan - ${type} (${amount})`;
      const loanData = { loanType, amount };
      navigate('/loan-form', { state: { userData, loanData } });
    };
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center text-secondary fw-bold">Business Loan Options</h2>
      <div className="row">
        {businessLoanAmounts.map((loan, index) => (
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

export default BusinessLoanPage;
