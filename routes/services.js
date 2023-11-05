/* 
services.js
Course: COMP224
Name: Idris Mustapha
Student no: 301207535
10/25/2023 */

const express = require('express');
const router = express.Router();

// Define routes for the Services page
router.get('/', (req, res) => {
  // Define an array of services (customize with your actual data)
  const services = [
    { title: 'Web Development', description: 'Design and build responsive and user-friendly websites using modern web technologies.' },
    { title: 'Mobile App Development', description: 'Create native or cross-platform mobile applications for iOS and Android platforms.' },
    { title: 'Custom Software Development', description: 'Develop tailored software solutions to meet specific business needs and optimize processes.' },
    { title: 'Backend Development', description: 'Build robust server-side applications and APIs to support web and mobile applications.' },
    { title: 'Frontend Development', description: 'Craft engaging user interfaces and interactive web experiences with HTML, CSS, and JavaScript.' },
    { title: 'Database Design and Management', description: 'Design, implement, and manage databases to efficiently store and retrieve data.' },
    { title: 'E-commerce Solutions', description: 'Develop online stores and e-commerce platforms with secure payment processing.' },
    { title: 'Content Management Systems (CMS)', description: 'Implement and customize CMS solutions for easy content management.' },
    { title: 'UI/UX Design', description: 'Create intuitive and visually appealing user interfaces for enhanced user experiences.' },
    { title: 'Consultation and Technical Support', description: 'Offer expertise and guidance on technology solutions, as well as provide technical support and troubleshooting.' },
    { title: 'Code Reviews and Optimization', description: 'Review and optimize existing codebases for performance, security, and scalability.' },
    { title: 'API Integration', description: 'Integrate third-party APIs and services to enhance functionality and data exchange.' },
    
  ];

  res.render('services', { title: 'Services', services });
});

module.exports = router;
