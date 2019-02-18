// Initialize users
const db = require("../models")
const passwordHash = require('password-hash')
require("dotenv").config()
const sysKeys = require('../syskeys')

module.exports = {
  
  initialize: function () {
    
    let adminUser = sysKeys.adminKeys.user
    let hashedPassword = passwordHash.generate(sysKeys.adminKeys.pwd)

    // Mongo documents array
    const usersSeed = [{
        username: adminUser,
        password: hashedPassword,
        fullname: 'admin account',
        phone: '222-123-1234',
        email: 'admin@blueanimalclinic.com',
        isAdmin : true,
        userCreated: Date.now()
      },
      {
        username: 'apensado',
        password: hashedPassword,
        fullname: 'Armando Pensado',
        phone: '949-876-8755',
        email: 'apensado@hotmail.com',
        isAdmin : false,
        userCreated: Date.now()
      }
    ]
    // Add to database
    db.User
      .remove({})
      .then(() => db.User.collection.insertMany(usersSeed))
      .then(data => {
        console.log(`APP-SETUP: ${data.result.n} documents inserted in User collection!`)
      })
      .catch(err => {
        console.error(err);
      })
  }
}