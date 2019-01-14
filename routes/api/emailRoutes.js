//  Email routes 
const router = require("express").Router();
const emailController = require("../../controllers/emailController")

// Matches with "/api/emails"
router.route("/")
  .post(emailController.send)

module.exports = router