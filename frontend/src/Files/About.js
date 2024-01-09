import React from "react";
import { Container, Row, Col, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const logoUrls = [
  "https://img.icons8.com/?size=48&id=ix3mV8ChYcgi&format=png",
  "https://img.icons8.com/?size=48&id=UrgbzHxXKotn&format=png",
  "https://img.icons8.com/?size=48&id=yGcWL8copNNQ&format=png",
  "https://img.icons8.com/?size=48&id=16713&format=png",
];

function FinanceAbout() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={10} className="mb-4">
          <Card className="shadow border-2">
            <Card.Img src="https://vakilsearch.com/blog/wp-content/uploads/2022/05/difference-between-trust-society-and-section8-company.jpg" alt="About Us" />

            <Card.Body>
              <Card.Title>
                <h6 className="text-danger fw-normal">About Sachin Finance</h6>
                <h1 className="text-warning fw-normal">India's fastest-growing</h1>
                <h1 className="text-secondary fw-normal">financial service provider</h1>
              </Card.Title>
              <br /><br />
              <Card.Text>
                Welcome to our finance app! We are dedicated to providing you with comprehensive financial services to help you manage your money, plan for the future, and achieve your financial goals.
              </Card.Text>
              <Card.Text>
                Our team of experts is committed to delivering high-quality financial solutions tailored to your individual needs. Whether you are looking for loans, investment advice, or simply want to improve your financial literacy, we've got you covered.
              </Card.Text>
              <Card.Text>
                At our finance app, we prioritize transparency, trust, and customer satisfaction. Explore our range of services and take the first step towards securing your financial future.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
{/* getintouch card */}
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
                  <FontAwesomeIcon icon={faEnvelope} className="me-2 " /> Sachin Finance@gmail.com
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

export default FinanceAbout;
