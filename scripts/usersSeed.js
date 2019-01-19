// Manual user initialization
// Type in terminal: node scripts/usersSeed.js

const mongoose = require('mongoose');
const db = require('../models');
const passwordHash = require('password-hash');

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/vetclinic';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

let hashedPassword = passwordHash.generate('admin');

const usersSeed = [{
  username: 'admin',
  password: hashedPassword,
  fullname: 'admin account',
  phone: '949-123-1234',
  email: 'admin@admin.com',
  isAdmin : true,
  userCreated: Date.now()
},
{
  username: 'apensado',
  password: hashedPassword,
  fullname: 'Armando Pensado',
  phone: '949-876-8755',
  email: 'armando@pensadotech.com',
  isAdmin : false,
  userCreated: Date.now()
}
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(usersSeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
