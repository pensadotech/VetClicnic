// Initialize doctors
const db = require('../models');

module.exports = {

  initialize: function () {

    let currDate = new Date()
    let nextDate1 = new Date()
    let nextDate2 = new Date()
    let nextDate3 = new Date()
    let nextDate4 = new Date()

    nextDate1.setHours(currDate.getHours() + 1)
    nextDate2.setHours(currDate.getHours() + 2)
    nextDate3.setHours(currDate.getHours() + 3)
    nextDate4.setDate(currDate.getDate() + 1)

    // Mongo documents array
    const appointSeed = [{
        date: nextDate4,
        title: 'Fido Date for Vaccines',
        description: 'Provide vaccines to Fido',
        doctor: null,
        patient: null,
        appointCreated: new Date()
      },
      {
        date: currDate,
        title: 'Boby Nail trim',
        description: 'Trime nails for Boby',
        doctor: null,
        patient: null,
        appointCreated: new Date()
      },
      {
        date: nextDate3,
        title: 'Lobo Vaccines',
        description: 'Sessonal vaccines',
        doctor: null,
        patient: null,
        appointCreated: new Date()
      },
      {
        date: nextDate2,
        title: 'Sorin Vaccines',
        description: 'Sessonal vaccines',
        doctor: null,
        patient: null,
        appointCreated: new Date()
      },
      {
        date: nextDate1,
        title: 'Negra Vaccines',
        description: 'Sessonal vaccines',
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