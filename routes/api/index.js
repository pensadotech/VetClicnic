const router = require('express').Router();
const authRoutes = require('./authRoutes');
const usersRoutes = require('./usersRoutes');
const patientsRoutes = require('./patientsRoutes');
const doctorsRoutes = require('./doctorsRoutes');
const appointmentRoutes = require('./appointmentRoutes');

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

// Other routes goes here

module.exports = router;
