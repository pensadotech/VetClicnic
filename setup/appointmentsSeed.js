// Initialize doctors
const db = require('../models');

module.exports = {

  initialize: function () {
    // Mongo documents array
    const appointSeed = [{
        date: new Date(),
        title: 'Fido Date for Vaccines',
        description: 'Provide vaccines to Fido',
        doctor: null,
        patient: null,
        appointCreated: new Date()
      },
      {
        date: new Date(),
        title: 'Boby Nail trim',
        description: 'Trime nails for Boby',
        doctor: null,
        patient: null,
        appointCreated: new Date()
      }
    ]

    // Add to database
    db.Appointment
      .remove({})
      .then(() => db.Appointment.collection.insertMany(appointSeed))
      .then(data => {
        console.log(`APP-SETUP: ${data.result.n} documents inserted in Appointment collection!`)
      })
      .catch(err => {
        console.error(err);
      });
  }

};