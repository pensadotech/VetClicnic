const mongoose = require('mongoose');
const db = require('../models');

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/vetclinic';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

const appointSeed = [{
  date: Date.now(),
  title: '',
  description: '',
  appointCreated: Date.now()
},
{
  date: Date.now(),
  title: '',
  description: '',
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
