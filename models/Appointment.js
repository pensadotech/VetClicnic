// dependencies
let mongoose = require('mongoose');
// Save a reference to the Schema constructor
let Schema = mongoose.Schema;

let AppointSchema = new Schema({
  Date: {
    type: Date,
    time: {
      type: Number, default: (new Date()).getTime()
    },
    default: Date.now,
    trim: true,
    required: 'Date is required'
  },
  Title: {
    type: String,
    trim: true,
    required: 'Title is required'
  },
  Description: {
    type: String,
    trim: true,
    required: 'Breif description is required'
  },
  Doctor: {
    type: Schema.Types.ObjectId,
    ref: 'Doctor'
  },
  Patient: {
    type: Schema.Types.ObjectId,
    ref: 'Patient'
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
