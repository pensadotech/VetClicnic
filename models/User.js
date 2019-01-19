// dependencies
let mongoose = require('mongoose');
// Save a reference to the Schema constructor
let Schema = mongoose.Schema;

let UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: 'Username is Required'
  },
  password: {
    type: String,
    trim: true,
    required: 'Password is Required',
    validate: [
      function (input) {
        return input.length >= 6;
      },
      'Password should be longer.'
    ]
  },
  fullname: {
    type: String,
    trim: true,
    required: 'Full name is Required'
  },
  phone: {
    type: String,
    trim: true,
    required: 'Phone is Required'
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
  },
  isAdmin:{
    type: Boolean
  },
  userCreated: {
    type: Date,
    default: Date.now
  }

});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model('User', UserSchema);

// Export the model
module.exports = User;
