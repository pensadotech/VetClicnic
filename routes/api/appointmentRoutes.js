const router = require('express').Router();
const appointmentController = require('../../controllers/appointmentController');

// Matches with "/api/schedules"
router.route('/')
  .get(appointmentController.findAll)
  .post(appointmentController.create);

// Matches with "/api/schedules/id"
router.route('/:id')
  .get(appointmentController.findById)
  .put(appointmentController.update)
  .delete(appointmentController.remove);

// Matches with "/api/schedules/findOne/id"
router.route('/findone/:id')
  .get(appointmentController.findOne);

// Export the router definitions
module.exports = router
;
