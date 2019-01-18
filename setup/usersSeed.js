// Initialize users
const db = require("../models")
const passwordHash = require('password-hash')

module.exports = {
  
  initialize: function () {

    // hash initial password
    let hashedPassword = passwordHash.generate('admin')

    // Mongo documents array
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