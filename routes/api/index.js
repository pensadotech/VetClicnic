<<<<<<< HEAD
const router = require('express').Router()
const authRoutes = require('./authRoutes')
const usersRoutes = require('./usersRoutes')
const patientsRoutes = require('./patientsRoutes')
const doctorsRoutes = require('./doctorsRoutes')
=======
const router = require('express').Router();
const authRoutes = require('./authRoutes');
const usersRoutes = require('./usersRoutes');
const patientsRoutes = require('./patientsRoutes');
const doctorsRoutes = require('./doctorsRoutes');
const appointmentRoutes = require('./appointmentRoutes');
>>>>>>> 287a60526847f5db3198a2fcc540423eac6f9071

// Matches with "/api/session"
router.use('/session', authRoutes);
// Matches with "/api/users"
<<<<<<< HEAD
router.use('/users', usersRoutes)
=======
router.use('/users', usersRoutes);
>>>>>>> 287a60526847f5db3198a2fcc540423eac6f9071
// Matches with "/api/patients"
router.use('/patients', patientsRoutes);
// Matches with "/api/doctors"
router.use('/doctors', doctorsRoutes);
// Matches with "/api/appointment"
router.use('/appointment', appointmentRoutes);

<<<<<<< HEAD

router.use('./doctors', doctorsRoutes)
=======
>>>>>>> 287a60526847f5db3198a2fcc540423eac6f9071
// Other routes goes here

module.exports = router;
