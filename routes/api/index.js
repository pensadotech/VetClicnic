const router = require('express').Router()
const authRoutes = require('./authRoutes')
const usersRoutes = require('./usersRoutes')
const patientsRoutes = require('./patientsRoutes')
const doctorsRoutes = require('./doctorsRoutes')

// Matches with "/api/session"
router.use('/session', authRoutes)
// Matches with "/api/users"
router.use('/users', usersRoutes)
// Matches with "/api/patients"
router.use('/patients', patientsRoutes)


router.use('./doctors', doctorsRoutes)
// Other routes goes here

module.exports = router;
