// Automatice initialization for data
// Executed from server.js and only if admin user is not present
// it will initialize teh database


const db = require('../models')
require("dotenv").config()
const sysKeys = require('../syskeys')

const UsersSeed = require('./usersSeed')
const DoctorsSeed = require('./doctorsSeed')
const PatientsSeed = require('./patientsSeed')
const MedsSeed = require('./medsSeed')
const AppointmentSeed = require('./appointmentsSeed')

module.exports = {
    
  Initialize: function() {
     
    console.log('APP-SETUP: Verifying if the database was intialized ...')

    // Step 1. Is ADMIN user available?
    db.User.findOne({ username: { $eq: sysKeys.adminKeys.user } })
      .then(dbModel => {
         // Step 2. If not admin user, initialize
         if(dbModel === null) {
           // initialize
           console.log('APP-SETUP: Initializing database ...')
           // initialize user
           UsersSeed.initialize()
           // initialize doctors
           DoctorsSeed.initialize()
           // initialize patients
           PatientsSeed.initialize()
           // Initialize Meds
           MedsSeed.initialize()
           // Initialize Appointments
           AppointmentSeed.initialize()

         }
      })
      .catch(err => res.status(422).json(err))
  }
  
}