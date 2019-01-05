// dependencies
let mongoose = require("mongoose");
// Save a reference to the Schema constructor
let Schema = mongoose.Schema;

let MedicineSchema = new Schema( {
  name: {
    type: String,
    trim: true,
    required: "Name is Required"
  },
  description : {
    type: String,
    trim: true,
    required: "Brief description is Required"
  },
  brand: {
    type: String,
    trim: true,
    required: "Brand name is Required"
  },
  location: {
    type: String,
    unique: true,
    required: "Physical location of medicine required"
  },
  userCreated: {
    type: Date,
    default: Date.now
  }

})

// This creates our model from the above schema, using mongoose's model method
var Medicine = mongoose.model("Medicine", MedicineSchema)


// Export the model
module.exports = Medicine