const router = require('express').Router()
const authRoutes = require('./authRoutes')
const usersRoutes = require('./usersRoutes')
const patientsRoutes = require('./patientsRoutes')
const doctorsRoutes = require('./doctorsRoutes')
const appointmentRoutes = require('./appointmentRoutes')
const medsRoutes= require('./medicinesRoutes')
const emailsRoutes = require('./emailRoutes')
const prescriptionsRoutes = require('./prescriptionsRoutes')

// Matches with "/api/session"
router.use('/session', authRoutes)
// Matches with "/api/users"
router.use('/users', usersRoutes)
// Matches with "/api/patients"
router.use('/patients', patientsRoutes)
// Matches with "/api/doctors"
router.use('/doctors', doctorsRoutes)
// Matches with "/api/schedules"
router.use('/schedules', appointmentRoutes)
// Matches with "/api/meds"
router.use('/meds', medsRoutes)
// Matches with "/api/emails"
router.use('/emails', emailsRoutes)
// Matches with "/api/prescriptions"
router.use('/prescriptions', prescriptionsRoutes)

// export all routes
module.exports = router
