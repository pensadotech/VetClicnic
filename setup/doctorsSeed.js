// Initialize doctors
const db = require("../models")

module.exports = {

  initialize: function () {

    // Mongo documents array
    const doctorsSeed = [{
        name: 'Dr. Malecek',
        phone: '949-770-1808',
        mobilePhone: '949-123-4567',
        email: 'nicole.malecek@vca.com',
        doctorCreated: Date.now()
      },
      {
        name: 'Dr. Ota',
        phone: '949-770-1808',
        mobilePhone: '714-123-4567',
        email: 'jamie.ota@vca.com',
        doctorCreated: Date.now()
      },
      {
        name: 'Dr. Steenis',
        phone: '949-770-1808',
        mobilePhone: '714-123-4567',
        email: 'jason.steenis@vca.com',
        doctorCreated: Date.now()
      },
      {
        name: 'Dr. Buehler',
        phone: '949-770-1808',
        mobilePhone: '714-123-4567',
        email: 'lisa.buehler@vca.com',
        doctorCreated: Date.now()
      },
      {
        name: 'Dr. Yoo',
        phone: '949-770-1808',
        mobilePhone: '714-123-4567',
        email: 'hee.yoo@vca.com',
        doctorCreated: Date.now()
      },
      {
        name: 'Dr. Pensado',
        phone: '949-770-1808',
        mobilePhone: '714-123-4567',
        email: 'armando@pensadotech.com',
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