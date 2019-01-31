// dependencies
let mongoose = require('mongoose');
var Float = require('mongoose-float').loadType(mongoose, 2);
//for the auto-increment _id
// var autoincrement = require('mongoose-auto-increment-2');
// Save a reference to the Schema constructor
let Schema = mongoose.Schema;

let PatientSchema = new Schema({
  patientname: {
    type: String,
    trim: true,
    required: 'Patient name is Required'
  },
  ownername: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
  },
  breed: {
    type: String,
    trim: true
  },
  species: {
    type: String,
    trim: true,
    enum: ["Canine", "Feline"]
  }, 
  age: {
    type: Number,
    trim: true,
    // required: 'Age is Required'
  },
  chartNumber: {
    type: Number,
    default: 0
  },
  weight: {
    type: Float
  },
  color: {
    type: String,
    trim: true
  },
  address: {
    type: String,
    trim: true
  },
  phone: {
    type: String,
    trim: true
  },
  userCreated: {
    type: Date,
    default: Date.now
  }

});

// PatientSchema.plugin(autoincrement,{ field: 'chartNumber' });

// This creates our model from the above schema, using mongoose's model method
var Patient = mongoose.model('Patient', PatientSchema);

// Export the model
module.exports = Patient;
