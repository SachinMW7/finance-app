import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const GoldLoanEMICalculator = () => {
  // State variables for form data and calculated loan details
  const [formData, setFormData] = useState({
    loanAmount: '500000',
    interestRate: '15',
    tenure: '12', // Default tenure in months (1 year)
  });
  const [loanDetails, setLoanDetails] = useState(null);

  // Function to handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to calculate loan details
  const calculateLoanDetails = () => {
    const { loanAmount, interestRate, tenure } = formData;
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const nper = parseFloat(tenure);

    // Calculating EMI
    const emi = (principal * rate * Math.pow(1 + rate, nper)) / (Math.pow(1 + rate, nper) - 1);

    // Calculating total interest payable
    const totalInterest = emi * nper - principal;

    // Calculating total amount payable
    const totalAmountPayable = principal + totalInterest;

    // Setting loan details
    setLoanDetails({ emi, totalInterest, totalAmountPayable });
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md={6} className="offset-md-3">
          <h1 className="text-center">Gold Loan EMI Calculator</h1>
          <Form className="mt-4">
            <Form.Group className="mb-3" controlId="formLoanAmount">
              <Form.Label>Loan Amount</Form.Label>
              <Form.Select name="loanAmount" value={formData.loanAmount} onChange={handleChange}>
                <option value="10000">₹10,000</option>
                <option value="25000">₹25,000</option>
                <option value="50000">₹50,000</option>
                <option value="75000">₹75,000</option>
                <option value="100000">₹1,00,000</option>
                <option value="150000">₹1,50,000</option>
                <option value="200000">₹2,00,000</option>
                <option value="400000">₹4,00,000</option>
                <option value="500000">₹5,00,000</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formInterestRate">
              <Form.Label>Interest Rate (%)</Form.Label>
              <Form.Select name="interestRate" value={formData.interestRate} onChange={handleChange}>
                <option value="5">5%</option>
                <option value="6">6%</option>
                <option value="7">7%</option>
                <option value="8">8%</option>
                <option value="9">9%</option>
                <option value="10">10%</option>
                <option value="11">11%</option>
                <option value="12">12%</option>
                <option value="13">13%</option>
                <option value="14">14%</option>
                <option value="15">15%</option>
                <option value="16">16%</option>
                <option value="17">17%</option>
                <option value="18">18%</option>
                <option value="19">19%</option>
                <option value="20">20%</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTenure">
              <Form.Label>Tenure</Form.Label>
              <Form.Select name="tenure" value={formData.tenure} onChange={handleChange}>
                <option value="6">6 Months</option>
                <option value="12">1 Year (12 Months)</option>
                <option value="24">2 Year (24 Months)</option>
                <option value="36">3 Years (36 Months)</option>
              </Form.Select>
            </Form.Group>
            <Button variant="primary" onClick={calculateLoanDetails}>
              Calculate
            </Button>
          </Form>
          {loanDetails && (
            <div className="mt-4">
              <p className="fw-bold">EMI: ₹{loanDetails.emi.toFixed(2)}</p>
              <p className="fw-bold">Interest Payable: ₹{loanDetails.totalInterest.toFixed(2)}</p>
              <p className="fw-bold">Total Amount Payable: ₹{loanDetails.totalAmountPayable.toFixed(2)}</p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default GoldLoanEMICalculator;
