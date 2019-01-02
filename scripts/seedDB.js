const mongoose = require("mongoose")
const db = require("../models")
const passwordHash = require('password-hash')

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/vetclinic"
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })

let hashedPassword = passwordHash.generate('admin');

const usersSeed = [{
    username: 'admin',
    password: hashedPassword,
    email: 'admin@admin.com',
    userCreated: Date.now()
  },
  {
    username: 'apensado',
    password: hashedPassword,
    email: 'armando@pensadotech.com',
    userCreated: Date.now()
  }
]

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(usersSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!")
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  })