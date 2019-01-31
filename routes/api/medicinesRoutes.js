const router = require('express').Router();
const medsController = require('../../controllers/medicinesController');

// Matches with "/api/meds"
router.route('/')
  .get(medsController.findAll)
  .post(medsController.createUpdate);

// Matches with "/api/meds/:id"
router.route('/:id')
  .get(medsController.findById)
  .put(medsController.update)
  .delete(medsController.remove);

// Matches with "/api/meds/findone"
router.route('/findone/:id')
  .get(medsController.findOne);

module.exports = router