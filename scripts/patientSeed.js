// Manual Patients initialization
// Type in terminal: node scripts/patientSeed.js

const mongoose = require('mongoose');
const db = require('../models');

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/vetclinic';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true
});

const patientsSeed = [{
    patientname: 'Peanut',
    ownername: 'Aja Magdaleno',
    email: 'aja.magdaleno@gmail.com',
    breed: 'Fox Terrier',
    species: 'Canine',
    age: 4,
    chartNumber: 1,
    weight: 12.50,
    color: 'white / brown',
    address: '123 Main Street',
    phone: '951-246-2134',
    created: Date.now()
  },
  {
    patientname: 'Cynthia',
    ownername: 'Juliana Perry',
    email: '',
    breed: 'Calico Cat',
    species: 'Canine',
    age: 5,
    chartNumber: 2,
    weight: 15.00,
    color: 'grey / tan',
    address: '456 First Street',
    phone: '951-987-1790',
    created: Date.now()
  },
  {
    patientname: 'Sorin',
    ownername: 'James Rodgick',
    email: 'rodgick@yahoo.com',
    breed: 'Black Cat',
    species: 'Feline',
    age: 4,
    chartNumber: 3,
    weight: 22.22,
    color: 'black',
    address: '3456 Center Street',
    phone: '714-234-8765',
    created: Date.now()
  },
  {
    patientname: 'Lobo',
    ownername: 'Armando Pensado',
    email: 'apensado@hotmail.com',
    breed: 'Fat dog',
    species: 'Canine',
    age: 10,
    chartNumber: 4,
    weight: 30.33,
    color: 'brown',
    address: '3456 Center Street',
    phone: '714-234-8765',
    created: Date.now()
  }
];

db.Patient
  .remove({})
  .then(() => db.Patient.collection.insertMany(patientsSeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });