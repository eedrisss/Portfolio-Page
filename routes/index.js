 /* 
 index.js
COMP224
Idris Mustapha
301207535
10/04/2023 */ 
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Idris Mustapha Portfolio' });
});

module.exports = router;
