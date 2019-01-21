// dependencies
let mongoose = require('mongoose');
var Float = require('mongoose-float').loadType(mongoose, 2);
//for the auto-increment _id
var autoincrement = require('mongoose-auto-increment-2');
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
    trim: true,
    //required: 'Full name is Required'
  },
  breed: {
    type: String,
    trim: true,
    //required: 'Breed is Required'
  },
  species: {
    type: String,
    trim: true,
    enum: ["Canine", "Feline"],
    //required: 'Species is Required, must be "Canine" or "Feline"'
  }, 
  age: {
    type: Number,
    trim: true,
    // required: 'Age is Required'
  },
  chartNumber: {
    type: Number,
    default: 0,
    unique: true,
    trim: true,
    //required: 'Age is Required'
  },
  weight: {
    type: Float,
    //required: 'Weight is Required'
  },
  color: {
    type: String,
    trim: true,
    // required: 'Color is Required'
  },
  address: {
    type: String,
    trim: true,
    // required: 'Patient Address is Required'
  },
  phone: {
    type: String,
    trim: true,
    //required: 'Phone number is Required'
  },
  userCreated: {
    type: Date,
    default: Date.now
  }

});

PatientSchema.plugin(autoincrement,{ field: 'chartNumber' });

// This creates our model from the above schema, using mongoose's model method
var Patient = mongoose.model('Patient', PatientSchema);

// Export the model
module.exports = Patient;
