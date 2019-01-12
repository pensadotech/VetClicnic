const router = require("express").Router();
const patientsController = require("../../controllers/patientsController");

// Matches with "/api/patients"
router.route("/")
  .get(patientsController.findAll)
  .post(patientsController.createUpdate)

// Matches with "/api/patients/:id"
router.route("/:id")
  .get(patientsController.findById)
  .put(patientsController.update)
  .delete(patientsController.remove)

  // Matches with "/api/patients/findone/:id"
router.route("/findone/:id")
   .get(patientsController.findOne)

module.exports = router