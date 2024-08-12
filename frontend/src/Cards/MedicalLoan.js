import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';

const MedicalLoanPage = () => {
  const navigate = useNavigate(); // Get the navigate function

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user details from MySQL database
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user/1'); // Replace '1' with the actual user ID
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const medicalLoanAmounts = [
    { 
      type: 'Basic', 
      amount: '₹5,00,000', 
      details: 'Basic medical loan for essential medical expenses.',
      interestRate: '8% per annum',
      monthlyEMI: '₹4,111',
      tenureYears: 10,
      tenureMonths: 120,
      totalPayable: '₹4,93,320'
    },
    { 
      type: 'Standard', 
      amount: '₹10,00,000', 
      details: 'Standard medical loan for moderate medical expenses.',
      interestRate: '7.5% per annum',
      monthlyEMI: '₹8,097',
      tenureYears: 15,
      tenureMonths: 180,
      totalPayable: '₹14,57,460'
    },
    { 
      type: 'Advanced', 
      amount: '₹20,00,000', 
      details: 'Advanced medical loan for extensive medical treatments.',
      interestRate: '7% per annum',
      monthlyEMI: '₹16,533',
      tenureYears: 20,
      tenureMonths: 240,
      totalPayable: '₹39,67,920'
    }
  ];

  const handleApplyNow = (loan) => {
    return () => {
      // Pass selected loan details to LoanRequestForm
      const { type, amount } = loan;
      const loanType = `Medical Loan - ${type} (${amount})`; // Concatenating loan type with amount
      const loanData = { loanType, amount };
      navigate('/loan-form', { state: { userData, loanData } });
    };
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center text-secondary fw-bold">Medical Loan Options</h2>
      <div className="row">
        {medicalLoanAmounts.map((loan, index) => (
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

export default MedicalLoanPage;
