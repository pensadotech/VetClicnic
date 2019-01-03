const router = require('express').Router()
const authRoutes = require('./authRoutes')
const usersRoutes = require('./usersRoutes')

// Matches with "/api/session"
router.use('/session', authRoutes)
// Matches with "/api/users"
router.use('/users', usersRoutes)

// Other routes goes here

module.exports = router;
