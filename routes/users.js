 /* 
 users.js
Course: COMP224
Name: Idris Mustapha
Student no: 301207535
10/25/2023 */
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
