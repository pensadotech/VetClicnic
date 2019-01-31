const router = require('express').Router();
const prescriptionController = require('../../controllers/prescriptionController');

// Matches with "/api/prescriptions"
router.route('/')
  .get(prescriptionController.findAll)
  .post(prescriptionController.createUpdate)

// Matches with "/api/prescriptions/:id"
router.route('/:id')
  .get(prescriptionController.findById)
  .put(prescriptionController.update)
  .delete(prescriptionController.remove)

// Matches with "/api/prescriptions/findone"
router.route('/findone/:id')
  .get(prescriptionController.findOne)

module.exports = router