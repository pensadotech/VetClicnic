//Initialize patients

const db = require("../models")

module.exports = {

  initialize: function () {
    
    // Mongo documents array
    const patientsSeed = [{
        patientname: "Peanut",
        ownername: "Aja Magdaleno",
        breed: "Fox Terrier",
        species: "Canine",
        age: 4,
        weight: 12,
        color: "white / brown",
        address: "123 Main Street",
        phone: "951-246-2134",
        created: Date.now(),
        chartNumber: 1
      },
      {
        patientname: "Cynthia",
        ownername: "Juliana Perry",
        breed: "Calico Cat",
        species: "Feline",
        age: 5,
        weight: 15.5,
        color: "grey / tan",
        address: "456 First Street",
        phone: "951-987-1790",
        created: Date.now(),
        chartNumber: 2
      },
      {
        patientname: "Sorin",
        ownername: "James Rodgick",
        breed: "Black Cat",
        species: "Feline",
        age: 1,
        weight: 8,
        color: "black",
        address: "3456 Center Street",
        phone: "714-234-8765",
        created: Date.now(),
        chartNumber: 3
      },
      {
        patientname: "Big Doge",
        ownername: "That Guy",
        breed: "Mouse",
        species: "Canine",
        age: 1,
        weight: 64.3,
        color: "Brown",
        address: "3456 Center Street",
        phone: "714-234-8765",
        created: Date.now(),
        chartNumber: 4
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