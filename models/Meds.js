// dependencies
let mongoose = require('mongoose');
var Float = require('mongoose-float').loadType(mongoose, 2);
// Save a reference to the Schema constructor
let Schema = mongoose.Schema;

let MedsSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'Name is required'
  },
  alias: {
    type: [String],
    trim: true
  },
  hours: {
      type: Number,
      trim: true,
  },
  days: {
    type: Number,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  link: {
    type: String,
    trim: true
  },
  controlled: {
    type: Boolean
  },
  injectable: {
    available: Boolean,
    concentration: Float,
    doseCanine: Float,
    doseRangeCanine: [Float],
    doseFeline: Float,
    doseRangeFeline: [Float],
    routes: [String],
    alert: String
  },
  tablet: {
    available: Boolean,
    tabletSizes: [Float],
    doseCanine: Float,
    doseRangeCanine: [Float],
    doseFeline: Float,
    doseRangeFeline: [Float],
    alert: String
  },
  capsule: {
    available: Boolean,
    capsuleSizes: [Float],
    doseCanine: Float,
    doseRangeCanine: [Float],
    doseFeline: Float,
    doseRangeFeline: [Float],
    alert: String
  },
  suspension: {
    available: Boolean,
    doseCanine: Float,
    doseRangeCanine: [Float],
    doseFeline: Float,
    doseRangeFeline: [Float],
    premade: [{ concentration: Float, volume: Float }],
    alert: String
  }

});

// This creates our model from the above schema, using mongoose's model method
var Meds = mongoose.model('Medications', MedsSchema);

// Export the model
module.exports = Meds
;
