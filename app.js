 /* 
 app.js
Course: COMP224
Name: Idris Mustapha
Student no: 301207535
10/25/2023 */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const passport = require('passport');
const logger = require('morgan');
const session = require('express-session');
const passportLocalMongoose =  require("passport-local-mongoose");
const LocalStrategy = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const User = require('./models/User'); 

//import "mongoose" - required for DB Access
let mongoose = require('mongoose');
// URI
let DB = require('./config/database');

mongoose.connect(process.env.URI || DB.URI, {useNewUrlParser: true, useUnifiedTopology: true});

let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
mongoDB.once('open', ()=> {
  console.log("Connected to MongoDB...");
});



const app = express();
const port = process.env.PORT || 1000; // Use process.env.PORT for Heroku
app.set('port', port);

// Connect to MongoDB
//mongoose.connect('mongodb+srv://musteidris:kLVDGAjvJiFMFpV3@cluster0.2wfqd8w.mongodb.net/users'); 




// Set up EJS templating engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require("express-session")({ 
	secret: "Rusty is a dog", 
	resave: false, 
	saveUninitialized: false
})); 

app.use(passport.initialize()); 
app.use(passport.session()); 

passport.use(new LocalStrategy(User.authenticate())); 
passport.serializeUser(User.serializeUser()); 
passport.deserializeUser(User.deserializeUser());




// Define routes
const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const projectsRouter = require('./routes/projects');
const servicesRouter = require('./routes/services');
const contactmeRouter = require('./routes/contactme');
const secureareaRouter = require('./routes/securearea');
const contactsRouter = require('./routes/contacts');


// Set up routes
app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/projects', projectsRouter);
app.use('/services', servicesRouter);
app.use('/contactme', contactmeRouter);
app.use('/securearea', secureareaRouter);


// Showing register form 
app.get("/register", function (req, res) { 
  res.render("register"); 
}); 

// Showing register form 
app.get("/login", function (req, res) { 
  res.render("login"); 
});

// Handling user signup
app.post("/register", async (req, res) => {
  const { username, password, name, number, email } = req.body;

  try {
    const user = await User.register(new User({ username, name, number, email }), password);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error });
  }
});


// Route to serve the login page
// Route to handle user login
app.post("/login", passport.authenticate("local", {
  successRedirect: "/contacts",
  failureRedirect: "/login?error=1",
}));

// Route to serve the login page
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '/login'));
});

// Passport local strategy setup
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



function isLoggedIn(req, res, next) { 
  if (req.isAuthenticated()) return next(); 
  res.redirect("/login"); 
} 

// Routes for the contacts view in alphabetical order
app.get('/contacts', isLoggedIn, async (req, res) => {
  try {
    const users = await User.find({}, 'name number email').sort({ name: 1 }).exec();
    res.render('contacts', { users });
  } catch (err) {
    console.error(err);
    res.redirect('/');
  }
});


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/login");
}




//  Routes for the update view ..
app.get('/update', isLoggedIn, async (req, res) => {
  try {
    const users = await User.find({}).exec();
    res.render('update', { users });
  } catch (err) {
    console.error(err);
    res.redirect('/');
  }
});


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/login");
}


//Handling user logout 
app.get("/logout", function (req, res) { 
	req.logout(function(err) { 
		if (err) { return next(err); } 
		res.redirect('/login'); 
	}); 
}); 


//update contacts
app.get('/update/:id', isLoggedIn, async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.redirect('/contacts');
    }
    res.render('update', { user }); 
  } catch (err) {
    console.error(err);
    res.redirect('/contacts');
  }
});

app.post('/update/:id', isLoggedIn, async (req, res) => {
  const userId = req.params.id;
  const { name, number, email } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name, number, email },
      { new: true }
    );

    if (!updatedUser) {
      return res.redirect('/contacts');
    }

    res.redirect('/contacts'); 
  } catch (err) {
    console.error(err);
    res.redirect('/contacts'); 
  }
});

// delete contacts

app.get('/delete/:id', isLoggedIn, async (req, res) => {
  const userId = req.params.id;

  try {
    const deletedUser = await User.findByIdAndRemove(userId);

    if (!deletedUser) {
      return res.status(404).send('Entry not found');
    }

    res.redirect('/contacts');
  } catch (err) {
    console.error(err);
    res.redirect('/contacts');
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
