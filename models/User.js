const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  password: String,
  phone: String,
  email: String,
},
{
  timestamps: true
});

module.exports = mongoose.model('User', UserSchema);