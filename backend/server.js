// Importing Dependencies
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

// Setting Up Express App
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'finance_data',
});

// Server Connection
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Loan Request Submission
app.post('/loan-request', (req, res) => {
  const { name, mobileNo, email, loanType } = req.body;
  const sql = 'INSERT INTO loan_requests (name, mobileNo, email, loanType) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, mobileNo, email, loanType], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'Error submitting loan request' });
    } else {
      console.log('Data inserted successfully');
      res.json({ success: 'Loan request submitted successfully' });
    }
  });
});

// Get All Loan Requests
app.get('/loan-requests', (req, res) => {
  db.query('SELECT * FROM loan_requests', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Error fetching loan requests from database' });
    } else {
      res.status(200).json({ success: true, data: results });
    }
  });
});

// Delete Loan Request by ID
app.delete('/loan-requests/:requestId', (req, res) => {
  const requestId = req.params.requestId;
  db.query('DELETE FROM loan_requests WHERE id=?', [requestId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Error deleting loan request from database' });
    } else {
      res.status(200).json({ success: true, message: 'Loan request deleted successfully' });
    }
  });
});

// User Registration (Sign-up)
app.post('/signup', (req, res) => {
  const { name, mobileNo, email, password, address } = req.body;

  db.query(
    'INSERT INTO users (name, mobileNo, email, password, address) VALUES (?, ?, ?, ?, ?)',
    [name, mobileNo, email, password, address],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Error saving to database' });
      } else {
        res.status(200).json({ success: true, message: 'Successfully registered' });
      }
    }
  );
});

// POST endpoint for loan submission
app.post('/loan-submit', (req, res) => {
  // Extract loan data from the request body
  const {
    type, amount, details, interestRate, monthlyEMI, tenureYears, tenureMonths, totalPayable} = req.body;

  db.query(
    'INSERT INTO loan_edit (type, amount, details, interestRate, monthlyEMI, tenureYears, tenureMonths, totalPayable) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
    [type, amount, details, interestRate, monthlyEMI, tenureYears, tenureMonths, totalPayable],
    (err, result) => {
      if (err) {
        console.error('Error inserting loan data:', err);
        res.status(500).json({ success: false, message: 'Error submitting loan data' }); // Send error response
      } else {
        console.log('Loan data inserted successfully');
        res.status(201).json({ success: true, message: 'Loan data submitted successfully' }); // Send success response
      }
    }
  );
});


// Read All Users
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Error fetching data from database' });
    } else {
      res.status(200).json({ success: true, data: results });
    }
  });
});

// Read Single User by ID
app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;

  db.query('SELECT * FROM users WHERE id = ?', [userId], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Error fetching user data from database' });
    } else {
      if (results.length > 0) {
        res.status(200).json({ success: true, data: results[0] });
      } else {
        res.status(404).json({ success: false, message: 'User not found' });
      }
    }
  });
});

// Update User
app.put('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  const { name, mobileNo, email, password, address } = req.body;

  db.query(
    'UPDATE users SET name=?, mobileNo=?, email=?, password=?, address=? WHERE id=?',
    [name, mobileNo, email, password, address, userId],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Error updating user in database' });
      } else {
        res.status(200).json({ success: true, message: 'User updated successfully' });
      }
    }
  );
});

// Delete User
app.delete('/users/:userId', (req, res) => {
  const userId = req.params.userId;

  db.query('DELETE FROM users WHERE id=?', [userId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Error deleting user from database' });
    } else {
      res.status(200).json({ success: true, message: 'User deleted successfully' });
    }
  });
});

// User Login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ success: false, message: 'Server error' });
    } else {
      if (result.length > 0) {
        res.json({ success: true, message: 'Login successful' });
      } else {
        res.json({ success: false, message: 'Invalid credentials' });
      }
    }
  });
});

// Contact Details and Messages
app.post('/contact', (req, res) => {
  const { name, mobileNo, email, message } = req.body;
  db.query(
    'INSERT INTO contact_messages (name, mobileNo, email, message) VALUES (?, ?, ?, ?)',
    [name, mobileNo, email, message],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Error saving message to database' });
      } else {
        res.status(200).json({ success: true, message: 'Message sent successfully' });
      }
    }
  );
});

// Get all contact messages
app.get('/contact_messages', (req, res) => {
  db.query('SELECT * FROM contact_messages', (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Error fetching contact messages from database' });
    } else {
      res.status(200).json({ success: true, data: result });
    }
  });
});

// Delete contact message by ID
app.delete('/contact_messages/:messageId', (req, res) => {
  const messageId = req.params.messageId;

  db.query('DELETE FROM contact_messages WHERE id=?', [messageId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Error deleting contact message from database' });
    } else {
      res.status(200).json({ success: true, message: 'Contact message deleted successfully' });
    }
  });
});

// Gold Loan Application Form Submission
app.post('/gold', (req, res) => {
  const { name, mobileNo, goldWeight, goldPurity } = req.body;
  db.query(
    'INSERT INTO goldloan_requests (name, mobileNo, goldWeight, goldPurity) VALUES (?, ?, ?, ?)',
    [name, mobileNo, goldWeight, goldPurity],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Error saving gold loan application to database' });
      } else {
        res.status(200).json({ success: true, message: 'Gold loan requests submitted successfully' });
      }
    }
  );
});

// Gold Loan Request Submission
app.post('/goldloan-request', (req, res) => {
  const { name, mobileNo, goldWeight, goldPurity } = req.body;
  const sql = 'INSERT INTO goldloan_requests (name, mobileNo, goldWeight, goldPurity) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, mobileNo, goldWeight, goldPurity], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'Error submitting gold loan request' });
    } else {
      console.log('Data inserted successfully');
      res.json({ success: 'Gold loan request submitted successfully' });
    }
  });
});

// Get All Gold Loan Requests
app.get('/goldloan-requests', (req, res) => {
  db.query('SELECT * FROM goldloan_requests', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Error fetching gold loan requests from database' });
    } else {
      res.status(200).json({ success: true, data: results });
    }
  });
});

// Delete Gold Loan Request by ID
app.delete('/goldloan-requests/:requestId', (req, res) => {
  const requestId = req.params.requestId;
  db.query('DELETE FROM goldloan_requests WHERE id=?', [requestId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Error deleting gold loan request from database' });
    } else {
      res.status(200).json({ success: true, message: 'Gold loan request deleted successfully' });
    }
  });
});

// Server Listening
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
