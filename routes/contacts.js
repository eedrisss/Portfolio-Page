
/* 
contacts.js
// Course: COMP224
// Name: Idris Mustapha
// Student no: 301207535
// 10/25/2023 */
const express = require('express');
const router = express.Router();
// const isAuthenticated = require('../authMiddleware'); // Import the authentication middleware
const User = require('../models/User'); 

// Route to serve the contacts list view
router.get('/', async (req, res) => {
  try {
    const users = await User.find({}).exec();
    res.render('contacts', { users });
  } catch (err) {
    console.error(err);
    res.redirect('/');
  }
});

module.exports = router;
