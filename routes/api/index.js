const router = require('express').Router()
const authRoutes = require('./authRoutes')
const usersRoutes = require('./usersRoutes')
<<<<<<< HEAD
const patientsRoutes = require('./patientsRoutes')
=======
const doctorsRoutes = require('./doctorsRoutes')
>>>>>>> 52690cb8984890f6f30c79ca85819bd9de1a6b69

// Matches with "/api/session"
router.use('/session', authRoutes)
// Matches with "/api/users"
router.use('/users', usersRoutes)
<<<<<<< HEAD
// Matches with "/api/patients"
router.use('/patients', patientsRoutes)


=======
router.use('./doctors', doctorsRoutes)
>>>>>>> 52690cb8984890f6f30c79ca85819bd9de1a6b69
// Other routes goes here

module.exports = router;
