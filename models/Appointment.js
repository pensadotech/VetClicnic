// dependencies
let mongoose = require('mongoose');
// Save a reference to the Schema constructor
let Schema = mongoose.Schema;

let AppointSchema = new Schema({
  date: {
    type: Date,
    required: 'Date is required'
  },
  title: {
    type: String,
    trim: true,
    required: 'Title is required'
  },
  description: {
    type: String,
    trim: true,
    required: 'Breif description is required'
  },
  doctor: {
    type: Schema.Types.ObjectId,
    ref: 'Doctor'
  },
  patient: {
    type: Schema.Types.ObjectId,
    ref: 'Patient'
  },
  appointCreated: {
    type: Date
  }
});

// This creates our model from the above schema, using mongoose's model method
const Appointment = mongoose.model('Appointments', AppointSchema);

// Export the model
module.exports = Appointment
;
