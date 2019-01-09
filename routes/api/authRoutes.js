const router = require('express').Router();
const authController = require('../../controllers/authController');

// Matches with "/api/session/signIn"
router.route('/signIn')
  .post(authController.signIn);

// Matches with "/api/session/signOut"
router.route('/signOut')
  .post(authController.signOut);

// Matches with "/api/session/getuser"
router.route('/getuser')
  .get(authController.getSessionUser);

// Export the router definitions
module.exports = router
;
