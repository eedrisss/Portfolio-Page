 /* 
 projects.js
COMP224
Idris Mustapha
301207535
10/04/2023 */ 
const express = require('express');
const router = express.Router();


const projectsData = [
  { title: 'Black Bell Restaurant', description: 'I worked as part of a team to deliver this project, I work on both the front and backend', image: '/images/blackbelllogo.png', link: 'https://www.blackbellng.com/' },
  { title: 'Mayfair', description: 'I worked on the backend of this website, working on the database the images and quality of the images', image: '/images/mayfair_logo.png', link: 'https://artgidi.com/' },
  { title: 'Artgidi', description: 'I worked as part of a team to build and develop the full functionality of the website', image: '/images/artgidi_logo.png', link: 'https://mayfairdesignstudio.ng/' }
 
];

// Route for displaying the Projects page
router.get('/', (req, res) => {
  res.render('projects', { title: 'Projects worked on', projects: projectsData });
});

module.exports = router;

