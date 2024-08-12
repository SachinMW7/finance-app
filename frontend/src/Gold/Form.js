// Import Statements:
import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

// ContactUs Component:
function GoldLoanApplicationForm() {
   // State variables for form data, error message, and success message
  const [formData, setFormData] = useState({
    name: '',
    mobileNo: '',
    goldWeight: '',
    goldPurity: '18', // Default value set to 18 karats
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Event Handlers:
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: Check if all fields are filled
    if (!formData.name || !formData.mobileNo || !formData.goldWeight || !formData.goldPurity) {
      setError('All fields are required');
      return;
    }

     // Submit the form data to the server using Axios
    try {
      const response = await axios.post('http://localhost:3001/gold', formData);
      if (response.data.success) {
        setSuccessMessage('Message sent successfully');
        setError('');
        // Clear the form data after successful submission:
        setFormData({
          name: '',
          mobileNo: '',
          goldWeight: '',
          goldPurity: '18', // Reset gold purity to default value
        });
      } else {
        setError('Error sending message: ' + response.data.message);
        setSuccessMessage('');
      }
    } catch (error) {
      setError('Error during message sending: ' + error.message);
      setSuccessMessage('');
    }
  };

  return (
    <Container className="my-5">
      {/* Contact Form */}
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow border-2">
            <Card.Body>
              <Card.Title className="text-center">
                <h2 className="text-secondary fw-bold">Gold Loan Form</h2>
              </Card.Title>

              {/* Form */}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label><strong>Name</strong></Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="mobileNo">
                  <Form.Label><strong>Mobile Number</strong></Form.Label>
                  <Form.Control
                    type="tel"
                    name="mobileNo"
                    value={formData.mobileNo}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formgoldweight">
                  <Form.Label><strong>Gold weight (grams)</strong></Form.Label>
                  <Form.Control
                    type="number"
                    name="goldWeight"
                    value={formData.goldWeight}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="goldPurity">
                  <Form.Label><strong>Gold Purity (karats)</strong></Form.Label>
                  <Form.Control
                    as="select"
                    name="goldPurity"
                    value={formData.goldPurity} 
                    onChange={handleChange}
                  >
                    <option value="18">18 Karats</option>
                    <option value="22">22 Karats</option>
                    <option value="24">24 Karats</option>
                  </Form.Control>
                </Form.Group>

                <div className="mb-3">
                {/* Error and Success Messages: */}
                  {error && <Alert variant="danger">{error}</Alert>}
                  {successMessage && <Alert variant="success">{successMessage}</Alert>}
                </div>

                <Button variant="success" type="submit">
                  Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default GoldLoanApplicationForm;
