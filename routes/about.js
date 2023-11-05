 /* 
 about.js
COMP224
Idris Mustapha
301207535
10/04/2023 */ 
var express = require('express');
var router = express.Router();

// About Me Page
router.get('/', function(req, res, next) {
    res.render('about', { title: 'About Me' });
});

module.exports = router;
