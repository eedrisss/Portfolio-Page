/* 
Course: COMP224
Name: Idris Mustapha
Student no: 301207535
10/25/2023 */
// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcrypt');
// const User = require('../models/User'); // Adjust the path as needed

// // Route to serve the login page
// router.get('/login', (req, res) => {
//   res.sendFile(path.join(__dirname, '/login'));
// });

// Route to handle user login
// router.post('/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const user = await User.findOne({ username });

//     if (!user || !user.validPassword(password)) {
//       // Authentication failed
//       res.redirect('/login?error=1');
//       return;   
//     }

//     // Authentication succeeded, set the session
//     req.session.user = user;
//     res.redirect('/contacts');
//   } catch (error) {
//     console.error(error);
//     res.redirect('/login?error=1');
//   }
// });

// module.exports = router;
