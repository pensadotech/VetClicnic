// dependencies
let mongoose = require("mongoose");
// Save a reference to the Schema constructor
let Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

let PatientSchema = new Schema( {
  patientname: {
    type: String,
    trim: true,
    required: "Patient name is Required"
  },
  ownername : {
    type: String,
    trim: true,
    required: "Full name is Required"
  },
  breed: {
    type: String,
    trim: true,
    required: "Breed is Required"
  },
  age: {
    type: Number,
    trim: true,
    required: "Age is Required"
  },
  weight: {
    type: Number,
    trim: true,
    required: "Weight is Required"
  },
  color: {
    type: String,
    trim: true,
    required: "Color is Required"
  },
  chartNumber: {
    type: ObjectId,
    trim: true,
  },
  userCreated: {
    type: Date,
    default: Date.now
  }

})

// This creates our model from the above schema, using mongoose's model method
var Patient = mongoose.model("Patient", PatientSchema)


// Export the model
module.exports = Patient