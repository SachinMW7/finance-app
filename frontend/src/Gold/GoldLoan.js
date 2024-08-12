import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Row, Col} from 'react-bootstrap';

const HomeComponent = () => {
  return (
    <Container fluid className="p-0">
      <Row>
        <Col md={8} className="offset-md-2 text-center">
          <h1 className="fw-bold text-secondary">Welcome to Gold Loan Services</h1>
          <p className="fw-normal">
            With our easy application process, you can get quick access to funds by pledging your gold as collateral.
          </p>
          <p className="fw-lighter">
            Dial <a href="tel:12345678" className="text-decoration-none">1234 5678</a> for more information/applying through the Contact Centre.
          </p>
          <p className="fw-lighter">
            Give a Missed Call or SMS “GOLD” to <a href="sms:9080880367" className="text-decoration-none">9080880367</a> to get a call back from our Contact Centre.
          </p>
        </Col>
      </Row>
      <Row className="">
      <div className=" bg-secondary p-4">
       <div className="text-center text-secondary bg-light p-3">
            <h3 className="display-5">Loan Features</h3>
            <Row className="mb-4">
              <Col md={4}>
                <div className="card p-3 bg-secondary text-white ">
                  <h3 className="mb-3">Loan Amount</h3>
                  <ul className="list-unstyled">
                    <li><span className="fw-bold">Minimum:</span> ₹10,000</li>
                    <li><span className="fw-bold">Maximum:</span> ₹5,00,000</li>
                  </ul>
                </div>
              </Col>
              <Col md={4}>
                <div className="card p-3 bg-secondary text-white ">
                  <h3 className="mb-3">Interest Rate</h3>
                  <ul className="list-unstyled">
                    <li><span className="fw-bold">Minimum:</span> 5%</li>
                    <li><span className="fw-bold">Maximum:</span> 20%</li>
                  </ul>
                </div>
              </Col>
              <Col md={4}>
                <div className="card p-3 bg-secondary text-white  ">
                  <h3 className="mb-3">Tenure</h3>
                  <ul className="list-unstyled">
                    <li><span className="fw-bold">Minimum:</span> 6 Months</li>
                    <li><span className="fw-bold">Maximum:</span> 24 Months</li>
                  </ul>
                </div>
              </Col>
            </Row>
         </div>
        </div>
         <div className="text-center bg-light text-secondary py-5">
              <Link to="/goldloan-form">
               <Button variant="warning">Apply Now</Button>
              </Link>
         </div>
      </Row>
    </Container>
  );
};

export default HomeComponent;