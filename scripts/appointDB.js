const mongoose = require('mongoose');
const db = require('../models');

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/vetclinic';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

const appointSeed = [{
  Date: Number,
  fname: 'Phillip',
  lname: 'Morris',
  birth_date: '08/15/1990',
  phone: '949-555-1255',
  email: 'patient@patient.com',
  doctor: 'Bob Joe',
  appointCreated: Date.now()
},
{
  Date: Number,
  fname: 'Trey',
  lname: 'Barnes',
  birth_date: '03/28/1984',
  phone: '949-123-1234',
  email: 'patient@patient.com',
  doctor: 'Bob Joe',
  appointCreated: Date.now()
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
