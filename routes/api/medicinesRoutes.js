const router = require("express").Router();
const medsController = require("../../controllers/medicinesController");

// Matches with "/api/users"
router.route("/calc")
  .get(medsController.findAll)
  .post(medsController.createUpdate)

// Matches with "/api/users/findone"
router.route("/calc/findone")
  .get(medsController.findOne)

// Matches with "/api/users/:id"
router.route("/calc/:id")
  .get(medsController.findById)
  .put(medsController.update)
  .delete(medsController.remove)

module.exports = router