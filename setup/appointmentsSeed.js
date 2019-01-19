// Initialize doctors
const db = require('../models');

module.exports = {

  initialize: function () {
    // Mongo documents array
    const appointSeed = [{
      date: new Date(2018, 11, 24),
      time: (new Date()).getTime(Number),
      title: 'Fido Date for Vaccines',
      description: 'Provide vaccines to Fido',
      appointCreated: new Date(2018, 11, 24)
    },
    {
      date: new Date(2018, 11, 24),
      time: (new Date()).getTime(Number),
      title: 'Boby Nail trim',
      description: 'Trime nails for Boby',
      appointCreated: new Date(2018, 11, 24)
    }
    ];
    // Add to database
    db.Appointment
      .remove({})
      .then(() => db.Appointment.collection.insertMany(appointSeed))
      .then(data => {
        console.log(data.result.n + ' documents inserted in Appointment collection!');
      })
      .catch(err => {
        console.error(err);
      });
  }

};
