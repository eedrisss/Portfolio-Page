/* 
securearea.js
Course: COMP224
Name: Idris Mustapha
Student no: 301207535
10/25/2023 */

var express = require('express');
var router = express.Router();

//Secure Area Page
router.get('/', function(req, res, next) {
    res.render('securearea', { title: 'Secure Area' });
});

module.exports = router;