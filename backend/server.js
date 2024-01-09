const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'finance_data',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// User Registration
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

// Read all users
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

// Read single user by ID
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

// Update user
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

// Delete user
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

// Contact details
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
  const sql = 'SELECT * FROM contact_messages';
  db.query(sql , (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Error fetching contact messages from database' });
    } else {
      res.status(200).json({ success: true, data: result });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
