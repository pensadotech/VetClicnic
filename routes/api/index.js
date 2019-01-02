const router = require("express").Router();
const authRoutes = require("./authRoutes");

// Matches with "/api/users"
router.use("/users", authRoutes)

module.exports = router;
