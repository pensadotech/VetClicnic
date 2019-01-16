// dependencies
let mongoose = require('mongoose');
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
    concentration: Number,
    doseCanine: Number,
    doseRangeCanine: [Number],
    doseFeline: Number,
    doseRangeFeline: [Number],
    routes: [String],
    alert: String
  },
  tablet: {
    available: Boolean,
    tabletSizes: [Number],
    doseCanine: Number,
    doseRangeCanine: [Number],
    doseFeline: Number,
    doseRangeFeline: [Number],
    alert: String
  },
  capsule: {
    available: Boolean,
    capsuleSizes: [Number],
    doseCanine: Number,
    doseRangeCanine: [Number],
    doseFeline: Number,
    doseRangeFeline: [Number],
    alert: String
  },
  suspension: {
    available: Boolean,
    doseCanine: Number,
    doseRangeCanine: [Number],
    doseFeline: Number,
    doseRangeFeline: [Number],
    premade: [{ concentration: Number, volume: Number }],
    alert: String
  }

});

// This creates our model from the above schema, using mongoose's model method
var Meds = mongoose.model('Medications', MedsSchema);

// Export the model
module.exports = Meds
;
