const router = require('express').Router();
const medsController = require('../../controllers/medicinesController');

// Matches with "/api/meds"
router.route('/meds')
  .get(medsController.findAll)
  .post(medsController.createUpdate);

// Matches with "/api/meds/:id"
router.route('/meds/:id')
  .get(medsController.findById)
  .put(medsController.update)
  .delete(medsController.remove);

// Matches with "/api/meds/findone"
router.route('/meds/findone/:id')
  .get(medsController.findOne);

module.exports = router