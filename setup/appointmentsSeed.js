// Initialize doctors
const db = require("../models")

module.exports = {

  initialize: function () {

    // Mongo documents array
    const appointSeed = [{
        Date: Date.now(),
        Title: 'Fido Date for Vaccines',
        Description: 'Provide vaccines to Fido',
        appointCreated: Date.now()
      },
      {
        Date: Date.now(),
        Title: 'Boby Nail trim',
        Description: 'Trime nails for Boby',
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