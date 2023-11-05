 /* 
 contactme.js
COMP224
Idris Mustapha
301207535
10/04/2023 */ 
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('contactme', { title: 'About Me' });
});

router.post('/submit', (req, res) => {
    
    const { firstName, lastName, contactNumber, email, message } = req.body;
  
    
res.redirect('/');
});
module.exports = router;


