import React from 'react';
import { Link } from "react-router-dom";

const LoanCard = ({ title, image, link }) => {
  return (
    <div className="col-md-4">
      <div className="card m-3 shadow border-2" style={{ width: '18rem' }}>
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <Link to={link}>
            <button className="btn btn-success">More Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const GoldLoanCard = () => {
  const goldLoanDetails = {
    title: 'Gold Loan',
    image: 'https://www.visboo.com/wp-content/uploads/2020/02/gold-loan1-1.jpg', // Add your gold loan image URL
    link: "/gold-loan"
  };

  return (
    <LoanCard {...goldLoanDetails} />
  );
};

const App = () => {
  const homeLoanDetails = {
    title: 'Home Loan',
    image: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202211/home-loan-closure-checklist-sixteen_nine.jpg?size=948:533',
    link: "/home-loan"
  };

  const businessLoanDetails = {
    title: 'Business Loan',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFbH4hEMSud7OtGbpTtCLiM2Yt0a6P4qt59Lpdv_yISyJZieE2rfNRvDlHpq6H3NsfUBs&usqp=CAU',
    link: "/business-loan"
  };
  
  const educationLoanDetails = {
    title: 'Education Loan',
    image: 'https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/blog/education-loan/education-loan-india-benefits-interest-rate-717x404.jpg',
    link: "/education-loan"
  };

  const autoLoanDetails = {
    title: 'Automobile Loan',
    image: 'https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/blog/tax-benefits-on-car-loan-717x404.jpg',
    link: "/vehicle-loan" 
  };

  const personalLoanDetails = {
    title: 'Personal Loan',
    image: 'https://www.valueresearchonline.com/content-assets/images/52507_personal-loan__w660__.jpg',
    link: "/personal-loan"
  };

  const medicalLoanDetails = {
    title: 'Medical Loan',
    image: 'https://navi.com/blog/wp-content/uploads/2022/02/medical-loan.jpg',
    link: "/medical-loan"
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center text-secondary fw-bold">Available Loan Options </h2>
      <div className="row">
        <LoanCard {...homeLoanDetails} />
        <LoanCard {...personalLoanDetails} />
        <LoanCard {...medicalLoanDetails} />
        <LoanCard {...autoLoanDetails} />
        <LoanCard {...businessLoanDetails} />
        <LoanCard {...educationLoanDetails} />
        <GoldLoanCard /> {/* Gold Loan card */}
      </div>
    </div>
  );
};

export default App;
