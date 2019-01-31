const mongoose = require('mongoose');
const db = require('../models');

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/vetclinic';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true
});

doctor = {}
patience = {}

const appointSeed = [{
    date: new Date(),
    title: 'Fido Date for Vaccines',
    description: 'Provide vaccines to Fido',
    doctor: null,
    patient: null,
    appointCreated: new Date()
  },
  {
    date: new Date(),
    title: 'Boby Nail trim',
    description: 'Trime nails for Boby',
    doctor: null,
    patient: null,
    appointCreated: new Date()
  }
];

db.Appointment
  .remove({})
  .then(() => db.Appointment.collection.insertMany(appointSeed))
  .then(data => {
    console.log(data.result.n + ' appointments set!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });