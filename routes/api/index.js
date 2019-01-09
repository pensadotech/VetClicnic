const router = require('express').Router()
const authRoutes = require('./authRoutes')
const usersRoutes = require('./usersRoutes')
const patientsRoutes = require('./patientsRoutes')
const doctorsRoutes = require('./doctorsRoutes')
const appointmentRoutes = require('./appointmentRoutes')
const medsRoutes= require('./medicinesRoutes')

// Matches with "/api/session"
router.use('/session', authRoutes);
// Matches with "/api/users"
router.use('/users', usersRoutes);
// Matches with "/api/patients"
router.use('/patients', patientsRoutes);
// Matches with "/api/doctors"
router.use('/doctors', doctorsRoutes);
// Matches with "/api/appointment"
router.use('/appointment', appointmentRoutes);
// Matches with "/api/meds"
router.use('/meds', medsRoutes)


module.exports = router;
