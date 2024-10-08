// Import Statements:
import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

// URLs of your logo images
const logoUrls = [
  "https://img.icons8.com/?size=48&id=ix3mV8ChYcgi&format=png",
  "https://img.icons8.com/?size=48&id=UrgbzHxXKotn&format=png",
  "https://img.icons8.com/?size=48&id=yGcWL8copNNQ&format=png",
  "https://img.icons8.com/?size=48&id=16713&format=png",
];

// ContactUs Component:
function ContactUs() {
   // State variables for form data, error message, and success message
  const [formData, setFormData] = useState({
    name: '',
    mobileNo: '',
    email: '',
    message: '',
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
    if (!formData.name || !formData.mobileNo || !formData.email || !formData.message) {
      setError('All fields are required');
      return;
    }

     // Submit the form data to the server using Axios
    try {
      const response = await axios.post('http://localhost:3001/contact', formData);
      if (response.data.success) {
        setSuccessMessage('Message sent successfully');
        setError('');
        // Clear the form data after successful submission:
        setFormData({
          name: '',
          mobileNo: '',
          email: '',
          message: '',
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
                <h2 className="text-secondary fw-bold">Send us a Message</h2>
              </Card.Title>

              {/* Form */}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label><strong>Name</strong></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="mobileNo">
                  <Form.Label><strong>Mobile Number</strong></Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter your mobile number"
                    name="mobileNo"
                    value={formData.mobileNo}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label><strong>Email address</strong></Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label><strong>About your Loan and others</strong></Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Type your message here"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
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

      {/* GetInTouch Card */}
      <Row className="mt-4">
        <Col md={12} className="text-center">
          <Card className="shadow border-2">
            <Card.Body>
              <Card.Title>
                <h2 className="text-secondary fw-bold ">Get In Touch</h2>
              </Card.Title>
              <Card.Text>
                Have questions or suggestions? 
                <br />
                Feel free to reach out to us!
              </Card.Text>
              <ul className="list-group list-group-flush">
                <li className="list-group-item ">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 " /> 123 kovil Street, pollachi City
                </li>
                <li className="list-group-item ">
                  <FontAwesomeIcon icon={faEnvelope} className="me-2 " /> The Money Manager@gmail.com
                </li>
                <li className="list-group-item ">
                  <FontAwesomeIcon icon={faPhone} className="me-2 " /> +91 90808 80367
                </li>
              </ul>

              {/* Logo Buttons */}
              <div className="d-flex justify-content-around mt-3">
                {logoUrls.map((url, index) => (
                  <img key={index} src={url} alt={`Logo ${index + 1}`} style={{ height: '30px', width: 'auto' }} />
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;
