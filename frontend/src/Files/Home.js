import React from "react";
import { Button, Carousel } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleReadMoreClick = () =>{
navigate("/Service");
  };

  return (
    <container fluid className="p-0">
{/* Image Slider*/}
      <Carousel>
        <Carousel.Item style={{ height: "600px" }}>
          <img
            className="d-block w-100"
            src="http://www.bpmfinancial.com/images/bpm/slide_02-loan.jpg"
            alt="First slide"
            style={{ objectFit: "cover", height: "100%" }}
          />
          <Carousel.Caption className="text-white fw-bold">
            <h1>Home, personal, business loans</h1>
            <p>Join Sachin Finance for expert financial services and advice.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "600px" }}>
          <img
            className="d-block w-100"
            src="https://cdn.mozo.com.au/images/atwood/12618/happy%20couple%20on%20a%20joint%20home%20loan%20happy%20to%20get%20their%20official%20house%20keys.jpg"
            alt="Second slide"
            style={{ objectFit: "cover", height: "100%" }}
          />
          <Carousel.Caption className="text-white fw-bold">
            <h1>More power to you</h1>
            <p>Join Sachin Finance for expert financial services and advice.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "600px" }}>
          <img
            className="d-block w-100"
            src="https://www.bluebricks.com.my/wp-content/uploads/2022/08/The-Pros-of-A-Personal-Loan-1024x576.jpg"
            alt="Third slide"
            style={{ objectFit: "cover", height: "100%" }}
          />
          <Carousel.Caption className="text-white fw-bold">
            <h1>India's fastest-growing financial service provider</h1>
            <p>Join Sachin Finance for expert financial services and advice.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

{/* Welcome Section */}
      <div className="text-center text-white bg-secondary py-5">
        <h1 className="display-4">Welcome to Sachin Finance</h1>
        <p className="lead">Your Financial Hub for Smart Investments</p>
        <Link to="/contact">
          <Button variant="outline-light">Request Loan</Button>
        </Link>
      </div>

{/* Ready to Take Control Section */}
      <div className="text-center bg-light text-secondary py-5">
        <h2 className="fw-normal">Ready to Take Control of Your Finances?</h2>
        <p>Join Sachin Finance for expert financial services and advice.</p>
        <Button variant="outline-secondary" onClick={handleReadMoreClick}>
          Read More
        </Button>
      </div>
    </container>
  );
}

export default Home;
