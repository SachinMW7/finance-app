import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';

const HomeLoanPage = () => {
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

  const homeLoanAmounts = [
    { 
      type: 'Standard', 
      amount: '₹20,00,000', 
      details: 'Suitable for first-time home loan buyers.',
      interestRate: '7% per annum',
      monthlyEMI: '₹16,533',
      tenureYears: 20,
      tenureMonths: 240,
      totalPayable: '₹39,67,920'
    },
    { 
      type: 'Premium', 
      amount: '₹30,00,000', 
      details: 'Offers additional features and benefits for homeowners.',
      interestRate: '6.5% per annum',
      monthlyEMI: '₹22,933',
      tenureYears: 25,
      tenureMonths: 300,
      totalPayable: '₹68,79,900'
    },
    { 
      type: 'Luxury', 
      amount: '₹50,00,000', 
      details: 'Designed for high-end properties with luxury amenities.',
      interestRate: '6% per annum',
      monthlyEMI: '₹33,643',
      tenureYears: 30,
      tenureMonths: 360,
      totalPayable: '₹1,20,94,480'
    }
  ];

  const handleApplyNow = (loan) => {
    return () => {
      // Pass selected loan details to LoanRequestForm
      const { type, amount } = loan;
      const loanType = `Home Loan - ${type} (${amount})`; // Concatenating loan type with amount
      const loanData = { loanType, amount };
      navigate('/loan-form', { state: { userData, loanData } });
    };
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center text-secondary fw-bold">Home Loan Options</h2>
      <div className="row">
        {homeLoanAmounts.map((loan, index) => (
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

export default HomeLoanPage;
