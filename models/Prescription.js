// dependencies
let mongoose = require('mongoose')
require('mongoose-double')(mongoose)

let SchemaTypes = mongoose.Schema.Types

// Save a reference to the Schema constructor
let Schema = mongoose.Schema

let PrescriptionSchema = new Schema({
  prescriptioNumber: {
    type: SchemaTypes.Number
  },
  startDate: {
    type: Date,
    time: {
      type: Number, default: (new Date()).getTime()
    },
    default: Date.now,
    trim: true,
    required: 'Date is required'
  },
  frequency: {
    type: SchemaTypes.Number
  },
  medDosage: {
    type: SchemaTypes.Double
  },
  doctor: {
    type: Schema.Types.ObjectId,
    ref: 'Doctor'
  },
  patient: {
    type: Schema.Types.ObjectId,
    ref: 'Patient'
  },
  medicine : {
    type: Schema.Types.ObjectId,
    ref: 'Meds'
  },
  RecordCreated: {
    type: Date,
    default: Date.now
  }  
})

// This creates our model from the above schema, using mongoose's model method
const Prescription = mongoose.model('Prescriptions', PrescriptionSchema);

// Export the model
module.exports = Prescription
