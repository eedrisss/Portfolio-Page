/* 
User.js
Course: COMP224
Name: Idris Mustapha
Student no: 301207535
10/25/2023 */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  name: String,
  number: String,
  email: String,
});

userSchema.plugin(passportLocalMongoose);



const User = mongoose.model('User', userSchema);

module.exports = User;
