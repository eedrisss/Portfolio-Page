const mongoose = require('mongoose');
const schema = mongoose.Schema;

let userSchema = new schema({
username: String, require:true,
  password: String, require:true,
});