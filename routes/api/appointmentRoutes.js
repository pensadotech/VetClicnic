const router = require('express').Router();
const appointmentController = require('../../controllers/appointmentController');

// Matches with "/api/appointment/create"
router.route('/create')
  .get(appointmentController.findAll)
  .post(appointmentController.create);

// Matches with "/api/appointment/remove"
router.route('/:id')
  .get(appointmentController.findById)
  .put(appointmentController.update)
  .delete(appointmentController.remove);

// Matches with "/api/appointment/findOne"
router.route('/findone/:id')
  .get(appointmentController.findOne);

// Export the router definitions
module.exports = router
;
