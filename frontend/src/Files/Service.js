import React from "react";
import { Container, Row, Col, CardGroup, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const logoUrls = [
  "https://img.icons8.com/?size=48&id=ix3mV8ChYcgi&format=png",
  "https://img.icons8.com/?size=48&id=UrgbzHxXKotn&format=png",
  "https://img.icons8.com/?size=48&id=yGcWL8copNNQ&format=png",
  "https://img.icons8.com/?size=48&id=16713&format=png",
];

function Services() {
  return (
    <Container className="my-5">
        <h2 className="text-center text-secondary fw-bold  mb-4">Our Services</h2>
        <Row>
          <Col md={4}>
            <Card className="shadow border-2">
              <Card.Body>
                <Card.Title>Investment Management</Card.Title>
                <Card.Text>
                  Maximize your returns with our expert investment management services.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow border-2">
              <Card.Body>
                <Card.Title>Financial Planning</Card.Title>
                <Card.Text>
                  Plan for your financial future with our personalized financial planning services.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow border-2">
              <Card.Body>
                <Card.Title>Loan Solutions</Card.Title>
                <Card.Text>
                  Explore our loan solutions for homes, vehicles, businesses, and personal needs.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      
      <h2 className="text-center m-4 text-secondary fw-bold ">Our Loan Services</h2>
      <CardGroup className="shadow border-2">
        <Card>
          <Card.Img variant="top" src="https://www.indiabullshomeloans.com/uploads/blog/home-loan-terminology-0089480001558616854.jpg" />
          <Card.Body>
            <Card.Title>Home Loan</Card.Title>
            <Card.Text>
            LoanBuild the dream home you've always wanted to or renovate your existing house.            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://thedailynotes.com/wp-content/uploads/2020/06/image001-1.jpg" />
          <Card.Body>
            <Card.Title>Vehicle Loan</Card.Title>
            <Card.Text>
            A credit card is more than just an extension on your credit line, it's your access card to some of the finest privileges in life.            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://www.365credit.com.sg/wp-content/uploads/2020/09/Young-couple-happy-for-getting-loan.jpg" />
          <Card.Body>
            <Card.Title>Business Loan</Card.Title>
            <Card.Text>
            Small to medium and even large businesses, empower your business, invest and grow.            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="http://res-2.cloudinary.com/chqbook/image/upload/q_auto/v1/staging-ghost-assets/Insurance-on-your-home-loan-is-must-to-secure-your-family-Image.jpg" />
          <Card.Body>
            <Card.Title>Personal Loan</Card.Title>
            <Card.Text>
            Travel solo or vacation with family, wedding expenses or home renovations, find loans personalized for you.            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

      <Row className="mt-5">
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
                  <img 
                  key={index} 
                  src={url} 
                  alt={`Logo ${index + 1}`} 
                  style={{ height: '30px', width: 'auto' }} 
                  />
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
