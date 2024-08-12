// LoanCard.js
import React, { useState } from 'react';

const LoanCard = ({ loan, onEdit }) => {
  const [editableLoan, setEditableLoan] = useState({ ...loan });
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(editableLoan);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableLoan((prevLoan) => ({
      ...prevLoan,
      [name]: value,
    }));
  };

  return (
    <div className="col-md-4">
      <div className="card m-3 shadow border-2" style={{ width: '18rem' }}>
        <div className="card-body">
          <h3 className="card-title text-center text-secondary fw-bold">
            {isEditing ? (
              <input
                type="text"
                name="type"
                value={editableLoan.type}
                onChange={handleInputChange}
              />
            ) : (
              loan.type
            )}
          </h3>
          <p className="card-text">
            <strong>Loan Amount:</strong>{' '}
            {isEditing ? (
              <input
                type="text"
                name="amount"
                value={editableLoan.amount}
                onChange={handleInputChange}
              />
            ) : (
              loan.amount
            )}
          </p>
          <p className="card-text">
            <strong>Interest Rate:</strong>{' '}
            {isEditing ? (
              <input
                type="text"
                name="interestRate"
                value={editableLoan.interestRate}
                onChange={handleInputChange}
              />
            ) : (
              loan.interestRate
            )}
          </p>
          <p className="card-text">
            <strong>Monthly EMI:</strong>{' '}
            {isEditing ? (
              <input
                type="text"
                name="monthlyEMI"
                value={editableLoan.monthlyEMI}
                onChange={handleInputChange}
              />
            ) : (
              loan.monthlyEMI
            )}
          </p>
          <p className="card-text">
            <strong>Tenure:</strong>{' '}
            {isEditing ? (
              <input
                type="text"
                name="tenureYears"
                value={editableLoan.tenureYears}
                onChange={handleInputChange}
              />
            ) : (
              `${loan.tenureYears} years (${loan.tenureMonths} months)`
            )}
          </p>
          <p className="card-text">
            <strong>Total Payable:</strong>{' '}
            {isEditing ? (
              <input
                type="text"
                name="totalPayable"
                value={editableLoan.totalPayable}
                onChange={handleInputChange}
              />
            ) : (
              loan.totalPayable
            )}
          </p>
          <p className="card-text">{loan.details}</p>
          {isEditing ? (
            <button className="btn btn-primary" onClick={handleSave}>
              Save
            </button>
          ) : (
            <button className="btn btn-success" onClick={handleEdit}>
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoanCard;
