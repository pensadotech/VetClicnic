// Initialize doctors
const db = require("../models")

module.exports = {

  initialize: function () {

    // Mongo documents array
    const appointSeed = [{
        date: Date.now(),
        title: 'Fido Date for Vaccines',
        description: 'Provide vaccines to Fido',
        appointCreated: Date.now()
      },
      {
        date: Date.now(),
        title: 'Boby Nail trim',
        description: 'Trime nails for Boby',
        appointCreated: Date.now()
      }
    ]
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

}