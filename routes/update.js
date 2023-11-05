/* 
update.js
Course: COMP224
Name: Idris Mustapha
Student no: 301207535
10/25/2023 */


var express = require('express');
var router = express.Router();

// About Me Page
router.get('/', function(req, res, next) {
    res.render('update', { title: 'update' });
});

module.exports = router;