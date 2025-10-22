const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./restaurant.db');

// Create users table if not exists
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    email TEXT UNIQUE,
    password TEXT
  )`);
    // Create feedback table if not exists
  db.run(
    `CREATE TABLE IF NOT EXISTS feedback (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      customerName TEXT,
      customerEmail TEXT,
      visitDate TEXT,
      orderType TEXT,
      overallRating INTEGER,
      foodRating INTEGER,
      serviceRating INTEGER,
      categories TEXT,
      detailedFeedback TEXT,
      recommendation TEXT,
      timestamp TEXT
    )`
  );
     // Add this reservations table creation
  db.run(
    `CREATE TABLE IF NOT EXISTS reservations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT,
      guests INTEGER,
      date TEXT,
      time TEXT
    )`
  );
  //contacts atable new
  db.run(
    `CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      subject TEXT NOT NULL,
      message TEXT NOT NULL,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )`
  );
});

module.exports = db;
