const router = require("express").Router();
const authController = require("../../controllers/authController");

// Matches with "/api/user/signIn"
router.route("/signIn")
  .post(authController.signIn)

// Matches with "/api/user/signOut"
router.route("/signOut")
  .post(authController.signOut)

// Matches with "/api/user/sessionuser"
router.route("/sessionuser")
  .get(authController.getSessionUser)

// Export the router definitions
module.exports = router