// dependencies
let mongoose = require('mongoose');
// Save a reference to the Schema constructor
let Schema = mongoose.Schema;

let AppointSchema = new Schema({
  Date: {
    type: Number,
    trim: true,
    required: 'Date is required'
  },
  fname: {
    type: String,
    trim: true,
    required: 'First name is required'
  },
  lname: {
    type: String,
    trim: true,
    required: 'Last name is required'
  },
  birth_date: {
    type: Number,
    trim: true,
    required: 'Date of birth is required'
  },
  email: {
    type: String,
    trim: true,
    required: 'Email address or phone is required'
  },
  phone: {
    type: Number,
    trim: true,
    required: 'Email address or phone is required'
  },
  doctor: {
    type: String,
    trim: true,
    required: 'Doctor assigment is required'
  },
  appointCreated: {
    type: Date,
    default: Date.now
  }
});

// This creates our model from the above schema, using mongoose's model method
const Appointment = mongoose.model('Appointments', AppointSchema);

// Export the model
module.exports = Appointment
;
