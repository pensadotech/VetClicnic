//Initialize patients

const db = require("../models")

module.exports = {

  initialize: function () {
    
    // Mongo documents array
    const patientsSeed = [{
        patientname: "Peanut",
        ownername: "Aja Magdaleno",
        breed: "Fox Terrier",
        age: 4,
        weight: 12,
        color: "white / brown",
        address: "123 Main Street",
        phone: "951-246-2134",
        created: Date.now()
      },
      {
        patientname: "Cynthia",
        ownername: "Juliana Perry",
        breed: "Calico Cat",
        age: 5,
        weight: 15,
        color: "grey / tan",
        address: "456 First Street",
        phone: "951-987-1790",
        created: Date.now()
      },
      {
        patientname: "Spreckles",
        ownername: "James Rodgick",
        breed: "Black Cat",
        age: 1,
        weight: 8,
        color: "black",
        address: "3456 Center Street",
        phone: "714-234-8765",
        created: Date.now()
      },
    ]
    // Add to database
    db.Patient
      .remove({})
      .then(() => db.Patient.collection.insertMany(patientsSeed))
      .then(data => {
        console.log(`APP-SETUP: ${data.result.n} documents inserted in Patient collection!`)
      })
      .catch(err => {
        console.error(err);
      })
  }
}