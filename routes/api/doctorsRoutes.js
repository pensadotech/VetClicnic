const router = require("express").Router();
const docController = require("../../controllers/doctorsContorller");

// Matches with "/api/doctors"
router.route("/")
  .get(docController.findAll)
  .post(docController.create)

  // Matches with "/api/doctors/:id"
router.route("/:id")
.get(docController.findById)
.put(docController.update)
.delete(docController.remove)

// Export the router definitions
module.exports = router