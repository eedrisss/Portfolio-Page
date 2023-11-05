
 /* 
 authMiddleware.js
Course: COMP224
Name: Idris Mustapha
Student no: 301207535
10/25/2023 */

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Configure the local strategy
passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user || !user.verifyPassword(password)) {
        return done(null, false, { message: 'Invalid credentials' });
      }
      return done(null, user);
    });
  })
);

// Serialize the user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize the user
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

// Middleware to check if the user is authenticated
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next(); // User is authenticated, proceed to the next middleware
  }
  // User is not authenticated, redirect to the login page
  res.redirect('/login'); // Change '/login' to your actual login route
};

module.exports = isAuthenticated;
