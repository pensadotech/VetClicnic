// Manual Patients initialization
// Type in terminal: node scripts/patientSeed.js

const mongoose = require("mongoose")
const db = require("../models")

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/vetclinic"
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })

const patientsSeed = [
    {
    patientname: "Peanut",
    ownername : "Aja Magdaleno",
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
    ownername : "Juliana Perry",
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
    ownername : "James Rodgick",
    breed: "Black Cat",
    age: 1,
    weight: 8,
    color: "black",
    address: "3456 Center Street",
    phone: "714-234-8765",
    created: Date.now()
    },
]

db.Patient
    .remove({})
    .then(() => db.Patient.collection.insertMany(patientsSeed))
    .then(data => {
    console.log(data.result.n + " records inserted!")
    process.exit(0);
    })
    .catch(err => {
    console.error(err);
    process.exit(1);
    })