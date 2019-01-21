// Initialize doctors
const db = require("../models")

module.exports = {
  
  initialize: function () {

    // Mongo documents array
    const doctorsSeed = [{
        name: 'John Doe',
        phone: '949-123-1234',
        mobilePhone: '949-123-4567',
        email: 'johndoe@doctor.com',
        doctorCreated: Date.now()
      },
      {
        name: 'Bob Joe',
        phone: '949-876-8755',
        mobilePhone: '714-123-4567',
        email: 'bobjoe@doctor.com',
        doctorCreated: Date.now()
      },
      {
        name: 'Susan Roberts',
        phone: '949-876-8755',
        mobilePhone: '714-123-4567',
        email: 'susanroberts@doctor.com',
        doctorCreated: Date.now()
      }
    ]
    // Add to database
    db.Doctor
      .remove({})
      .then(() => db.Doctor.collection.insertMany(doctorsSeed))
      .then(data => {
        console.log(`APP-SETUP: ${data.result.n} documents inserted in Doctor collection!`)
      })
      .catch(err => {
        console.error(err);
      })
  }
}