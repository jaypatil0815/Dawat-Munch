// Import necessary modules
const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const db = require('./database.js');
const bodyParser = require('body-parser');


const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 3000;

// Create a 'users' table if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE,
  email TEXT UNIQUE,
  password TEXT
)`);

// Root route to check if server is running
app.get('/', (req, res) => {
  res.send('Dawat Restaurant Backend is running');
});

// =============================
// 🔐 SIGNUP
// =============================
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Please fill all fields' });
  }

  try {
    const hash = await bcrypt.hash(password, 10);
    db.run(
      `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`,
      [username, email, hash],
      function (err) {
        if (err) {
          return res.status(400).json({ error: 'Username or Email already exists' });
        }
        res.status(201).json({ message: 'User created successfully', userId: this.lastID });
      }
    );
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// =============================
// 🔑 LOGIN
// =============================
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Please fill all fields' });
  }

  db.get(`SELECT * FROM users WHERE username = ?`, [username], async (err, user) => {
    if (err) return res.status(500).json({ error: 'Internal server error' });
    if (!user) return res.status(400).json({ error: 'User not found' });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Incorrect password' });
    }

    res.json({ message: 'Login successful', userId: user.id });
  });
});

// =============================
// 📝 FEEDBACK
// =============================
app.post('/api/feedback', (req, res) => {
  const {
    customerName,
    customerEmail,
    visitDate,
    orderType,
    overallRating,
    foodRating,
    serviceRating,
    selectedCategories,
    detailedFeedback,
    recommendation,
    timestamp
  } = req.body;

  if (!customerName || !overallRating) {
    return res.status(400).json({ error: 'Name and overall rating required.' });
  }

  db.run(
    `INSERT INTO feedback 
      (customerName, customerEmail, visitDate, orderType, overallRating, foodRating, serviceRating, categories, detailedFeedback, recommendation, timestamp)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      customerName,
      customerEmail,
      visitDate,
      orderType,
      overallRating,
      foodRating,
      serviceRating,
      selectedCategories,
      detailedFeedback,
      recommendation,
      timestamp
    ],
    function (err) {
      if (err) {
        return res.status(500).json({ error: 'Failed to save feedback.' });
      }
      res.json({ message: 'Feedback submitted successfully.' });
    }
  );
});

// =============================
// 🍽️ RESERVATION
// =============================
app.post('/api/reservation', (req, res) => {
  const { name, email, guests, date, time } = req.body;
  if (!name || !email || !guests || !date || !time) {
    return res.status(400).json({ error: 'Please fill all fields.' });
  }

  db.run(
    `CREATE TABLE IF NOT EXISTS reservations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT, email TEXT, guests INTEGER, date TEXT, time TEXT
    )`
  );

  db.run(
    `INSERT INTO reservations (name, email, guests, date, time) VALUES (?, ?, ?, ?, ?)`,
    [name, email, guests, date, time],
    function (err) {
      if (err) {
        return res.status(500).json({ error: 'Reservation failed' });
      }
      res.json({ message: 'Reservation successful' });
    }
  );
});


// =============================
// 📧 CONTACT MESSAGE (NEW)
// =============================
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Please fill out all fields.' });
  }

  // SQL statement to insert data
  const sql = `INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)`;
  const params = [name, email, subject, message];

  db.run(sql, params, function(err) {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: 'Failed to send message.' });
    }
    // Respond with success
    res.status(201).json({ message: 'Your message has been sent successfully!' });
  });
});



// =============================
// 🚀 START SERVER
// =============================
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
