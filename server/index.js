// required modules and imports
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

//  initialize express app
const app = express();

// set up middleware
app.use(cors()); // middleware for allowing cross-origin resource sharing
app.use(express.json()); //built in middleware for parsing JSON sent in requests

// use pool from pg package to create database connection
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'questionsdb',
  password: '9335425Cp!',
  port: 5432
});

// middleware for user authentication
const authenticateToken = (req, res, next) => {
  // get the token from the authorization header
  const authHeader = req.headers['authorization'];
  const token = authHeader ? authHeader.split(' ')[1] : null;
  // if the token is not provided, return an error
  if (!token) return res.sendStatus(401);
  // verify token
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  })
}; 

// Get all questions
app.get('/questions', (req, res) => {
	const sql = 'SELECT * FROM questions';
	pool.query(sql, (error, results) => {
		if (error) {
			return res.status(500).send(error);
		}
		res.json(results.rows);
	});
});

// Get all choices
app.get('/choices', (req, res) => {
		const sql = 'SELECT * FROM choices';
		pool.query(sql, (error, results) => {
      if (error) {
				return res.status(500).send(error);
			}
			res.json(results.rows);
    });
});

// Get all quizzes
app.get('/quizzes', (req, res) => {
		const sql = 'SELECT * FROM quizzes';
		pool.query(sql, (error, results) => {
      if (error) {
				return res.status(500).send(error);
			}
			res.json(results.rows);
    });
});

// post request handler for new user
app.post('/register', async (req, res) => {
  // extracting the username and password from the body of the request object using destructuring
    const {username, email, password} = req.body;
    // use bcrypt to create an encrypted hash of the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // insert the username and password into the registration database
    try {
      // query the database to insert into the registration table
      await pool.query(`INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`, [username, email, hashedPassword]);
      res.status(201).send('User successfully registered');
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
);

// post request handler for login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // query the database to find the username
  try {
    const { rows } = await pool.query(`SELECT * FROM users WHERE username = $1`, [username]); // get row with mathing username, if it exists
    if (rows.length > 0) { // user with given username exists within table
      // check if password matches
      const passwordIsValid = await bcrypt.compare(password, rows[0].password);

      if (passwordIsValid) {
        // create a json web token
        const token = jwt.sign(
          { username }, 
          process.env.JWT_SECRET, 
          { expiresIn: '1h' }
        );
        res.json({token});
      } else {
        // if username/password not valid
        res.status(403).send('Invalid password');
      }
    } else {
      // if user doesnt exist
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
})

// define server port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});