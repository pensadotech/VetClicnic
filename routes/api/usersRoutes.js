const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.createUpdate)

// Matches with "/api/users/:id"
router.route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove)

// Matches with "/api/users/findone/:id"
router.route("/findone/:id")
   .get(usersController.findOne)

module.exports = router