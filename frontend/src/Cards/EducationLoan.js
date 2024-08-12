import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EducationLoanPage = () => {
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

  const educationLoanAmounts = [
    { 
      type: 'Undergraduate', 
      amount: '₹10,00,000', 
      details: 'Suitable for undergraduate students pursuing higher education.',
      interestRate: '6% per annum', 
      monthlyEMI: '₹9,927', 
      tenureYears: 10,
      tenureMonths: 120,
      totalPayable: '₹11,91,240'
    },
    { 
      type: 'Graduate', 
      amount: '₹20,00,000', 
      details: 'Offers additional features and benefits for graduate students.',
      interestRate: '5.5% per annum', 
      monthlyEMI: '₹19,854', 
      tenureYears: 15,
      tenureMonths: 180,
      totalPayable: '₹35,73,720'
    },
    { 
      type: 'Postgraduate', 
      amount: '₹30,00,000', 
      details: 'Designed for postgraduate students with higher loan requirements.',
      interestRate: '5% per annum', 
      monthlyEMI: '₹29,781', 
      tenureYears: 20,
      tenureMonths: 240,
      totalPayable: '₹71,47,440'
    }
  ];

  const handleApplyNow = (loan) => {
    return () => {
      const { type, amount } = loan;
      const loanType = `Education Loan - ${type} (${amount})`;
      const loanData = { loanType, amount };
      navigate('/loan-form', { state: { userData, loanData } });
    };
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center text-secondary fw-bold">Education Loan Options</h2>
      <div className="row">
        {educationLoanAmounts.map((loan, index) => (
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

export default EducationLoanPage;
