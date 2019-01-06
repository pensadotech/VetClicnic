const router = require('express').Router()
const authRoutes = require('./authRoutes')
const usersRoutes = require('./usersRoutes')
const doctorsRoutes = require('./doctorsRoutes')

// Matches with "/api/session"
router.use('/session', authRoutes)
// Matches with "/api/users"
router.use('/users', usersRoutes)
router.use('./doctors', doctorsRoutes)
// Other routes goes here

module.exports = router;
