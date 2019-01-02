const mongoose = require("mongoose")
const db = require("../models")

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/vetclinic"
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })

const usersSeed = [{
    username: 'admin',
    password: '123',
    email: 'admin@admin.com',
    userCreated: Date.now()
  },
  {
    username: 'apensado',
    password: '123',
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